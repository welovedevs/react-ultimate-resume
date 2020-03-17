import React, { createContext, useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';

import { createUseStyles, useTheme } from 'react-jss';
import { animated, config, useTransition } from 'react-spring';
import { useDebounce } from 'use-debounce';

import { Card } from '@wld/ui';

import { useMediaQuery } from '@material-ui/core';

import { ProfileCardSide } from './profile_card_side/profile_card_side';
import { ProfileCardEditButton } from './profile_card_edit_button/profile_card_edit_button';
import { ProfileCardEditDialog } from './profile_card_edit_dialog/profile_card_edit_dialog';
import { ProfileCardIncompletePopper } from './profile_card_incomplete_popper/profile_card_incomplete_popper';

import { SET_SIDE, SET_VARIANT } from '../../../store/profile_card/profile_card_actions_types';
import { getProfileCardInitialState, profileCardReducer } from '../../../store/profile_card/profile_card_reducer';
import { useCallbackOpen } from '../../hooks/use_callback_open';

import { styles } from './profile_card_styles';
import { PROFILE_CARD_EDIT_BUTTON_TRANSITIONS_SPRING_PROPS } from './profile_card_spring_props';

const useStyles = createUseStyles(styles);

export const ProfileCardContext = createContext({});

const DEFAULT_TRANSITIONS_SPRING_PROPS = {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.default
};

const ProfileCardComponent = ({
    id,
    children,
    data,
    sides,
    variant,
    isTransitionUnique = true,
    isEditingProfile,
    editDialog,
    customTransitionsSpringProps,
    customEditAction,
    isComplete = true,
    side: sideProps
}) => {
    const classes = useStyles({ variant });
    const theme = useTheme();
    const [containerElement, setContainerElement] = useState();
    const containerReference = useRef();
    const [openEditDialog, setEditDialogOpened, setEditDialogClosed] = useCallbackOpen();
    const [state, dispatch] = useReducer(
        profileCardReducer,
        getProfileCardInitialState({
            variant,
            side: sideProps
        })
    );

    useEffect(() => {
        dispatch({
            type: SET_VARIANT,
            variant
        });
    }, [variant]);

    const { side, hasDialogOpened } = state;
    const [debouncedSide] = useDebounce(side, 200);

    useEffect(() => {
        setContainerElement(containerReference.current);
    }, []);

    const isSmall = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`, {
        defaultMatches: true
    });

    const transitionsSpringProps = useMemo(() => {
        if (customTransitionsSpringProps) {
            if (typeof customTransitionsSpringProps === 'function') {
                return customTransitionsSpringProps(side);
            }
            return customTransitionsSpringProps;
        }
        return DEFAULT_TRANSITIONS_SPRING_PROPS;
    }, [customTransitionsSpringProps, side]);

    const hasSideChanged = useRef(false);

    const setSide = useCallback(newSide => {
        if (sideProps) {
            return;
        }
        dispatch({
            type: SET_SIDE,
            side: newSide
        });
    }, []);

    const handleMouseEnter = useCallback(() => setSide('back'), [dispatch]);

    const handleMouseLeave = useCallback(() => {
        if (hasDialogOpened) {
            return;
        }
        setSide('front');
    }, [hasDialogOpened, dispatch]);

    useEffect(() => {
        if (hasSideChanged.current) {
            return;
        }
        hasSideChanged.current = true;
    }, [side]);

    const transitions = useTransition(debouncedSide, item => `card_side_${item}`, {
        ...transitionsSpringProps,
        unique: isTransitionUnique,
        immediate: !hasSideChanged.current
    });

    const editButtonTransitions = useTransition(
        isEditingProfile,
        item => (item ? 'visible_editing_button' : 'invisible_editing_button'),
        {
            ...PROFILE_CARD_EDIT_BUTTON_TRANSITIONS_SPRING_PROPS,
            unique: true
        }
    );

    const contextData = useMemo(() => ({ state, dispatch }), [state]);

    return (
        <>
            {isEditingProfile && !customEditAction && (
                <ProfileCardEditDialog
                    editDialog={editDialog}
                    open={openEditDialog}
                    onClose={setEditDialogClosed}
                    data={data}
                />
            )}
            <ProfileCardIncompletePopper open={isComplete !== true} anchorElement={containerElement} />
            <Card
                containerRef={containerReference}
                customClasses={{ container: classes.container }}
                id={id}
                elevation={1}
                {...(!isSmall &&
                    !sideProps && {
                        onMouseEnter: handleMouseEnter,
                        onMouseLeave: handleMouseLeave
                    })}
            >
                {editButtonTransitions.map(
                    ({ item, key, props }) =>
                        item && (
                            <animated.div className={classes.editButtonContainer} key={key} style={props}>
                                <EditAction
                                    customEditAction={customEditAction}
                                    setEditDialogOpened={setEditDialogOpened}
                                />
                            </animated.div>
                        )
                )}
                <ProfileCardContext.Provider value={contextData}>
                    {children}
                    {transitions.map(({ item, key, props }) => {
                        const SideComponent = sides[item] || (() => null);
                        return (
                            <ProfileCardSide key={key} style={props}>
                                <SideComponent data={data} />
                            </ProfileCardSide>
                        );
                    })}
                </ProfileCardContext.Provider>
            </Card>
        </>
    );
};

const EditAction = ({ customEditAction, setEditDialogOpened }) => {
    if (customEditAction) {
        return customEditAction;
    }
    return <ProfileCardEditButton setEditDialogOpened={setEditDialogOpened} />;
};

export const ProfileCard = ProfileCardComponent;
