import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';

import { createUseStyles, useTheme } from 'react-jss';
import { animated, config, useTransition } from 'react-spring';

import { Card } from '@welovedevs/ui';

import { useMediaQuery } from '@material-ui/core';

import { ProfileCardSide } from './profile_card_side/profile_card_side';
import { ProfileCardEditButton } from './profile_card_edit_button/profile_card_edit_button';
import { ProfileCardEditDialog } from './profile_card_edit_dialog/profile_card_edit_dialog';
import { ProfileCardIncompletePopper } from './profile_card_incomplete_popper/profile_card_incomplete_popper';

import { SET_CHANGING_SIDES, SET_SIDE, SET_VARIANT } from '../../../store/profile_card/profile_card_actions_types';
import { getProfileCardInitialState, profileCardReducer } from '../../../store/profile_card/profile_card_reducer';

import { styles } from './profile_card_styles';
import { PROFILE_CARD_EDIT_BUTTON_TRANSITIONS_SPRING_PROPS } from './profile_card_spring_props';
import { SIDES } from './profile_card_side/side';
import { DeveloperProfileContext } from '../../../utils/context/contexts';

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
    kind,
    variant,
    isTransitionUnique = true,
    isEditingProfile,
    editDialog,
    customTransitionsSpringProps,
    customEditAction,
    isComplete = true,
    side: sideProps
}) => {
    const changeSideTimeout = useRef();
    const { mode } = useContext(DeveloperProfileContext);

    const classes = useStyles({ variant });
    const theme = useTheme();
    const isSmall = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`, {
        defaultMatches: true
    });

    const [containerElement, setContainerElement] = useState();
    const containerReference = useRef();
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [forceOpenEditDialog, setForceOpenEditDialog] = useState(false);

    const setEditDialogOpened = useCallback(() => setOpenEditDialog(true), []);
    const setEditDialogClosed = useCallback(() => {
        setOpenEditDialog(false);
        setForceOpenEditDialog(false);
    }, []);

    const [state, dispatch] = useReducer(profileCardReducer, {}, () =>
        getProfileCardInitialState({
            variant,
            side: sideProps || SIDES.FRONT
        })
    );
    const { side, hasDialogOpened } = state;

    useEffect(() => {
        dispatch({
            type: SET_VARIANT,
            variant
        });
    }, [variant]);
    useEffect(() => {
        if (sideProps === side) {
            return;
        }
        dispatch({
            type: SET_SIDE,
            side: sideProps || SIDES.FRONT
        });
    }, [sideProps]);

    const setChangingSides = useCallback(
        (value) => {
            dispatch({
                type: SET_CHANGING_SIDES,
                value
            });
        },
        [isSmall]
    );

    useEffect(() => {
        setContainerElement(containerReference.current);
    }, []);

    const transitionsSpringProps = useMemo(() => {
        if (customTransitionsSpringProps) {
            if (typeof customTransitionsSpringProps === 'function') {
                return customTransitionsSpringProps(side);
            }
            return customTransitionsSpringProps;
        }
        return DEFAULT_TRANSITIONS_SPRING_PROPS;
    }, [customTransitionsSpringProps, side]);

    const setSide = useCallback(
        (newSide) => {
            if (sideProps) {
                return;
            }
            if (state.changingSides) {
                return;
            }
            setChangingSides(true);
            if (changeSideTimeout.current) {
                clearTimeout(changeSideTimeout.current);
            }
            changeSideTimeout.current = setTimeout(
                () =>
                    dispatch({
                        type: SET_SIDE,
                        side: newSide
                    }),
                200
            );
        },
        [sideProps]
    );

    const handleMouseEnter = useCallback(() => setSide(SIDES.BACK), [setSide]);

    const handleMouseLeave = useCallback(() => {
        if (hasDialogOpened) {
            return;
        }
        setSide(SIDES.FRONT);
    }, [hasDialogOpened, setSide]);

    const transitions = useTransition(side, (item) => `card_side_${item}_${kind}`, {
        ...transitionsSpringProps,
        unique: isTransitionUnique,
        onDestroyed: () => {
            setChangingSides(false);
        }
    });
    const handleAddButtonClick = useCallback(() => {
        setOpenEditDialog(true);
        setForceOpenEditDialog(true);
    }, []);

    const editButtonTransitions = useTransition(
        isEditingProfile,
        (item) => (item ? 'visible_editing_button' : 'invisible_editing_button'),
        {
            ...PROFILE_CARD_EDIT_BUTTON_TRANSITIONS_SPRING_PROPS,
            unique: true
        }
    );

    const contextData = useMemo(() => ({ state, dispatch }), [JSON.stringify(state)]);

    return (
        <>
            {mode === 'edit' && (isEditingProfile || forceOpenEditDialog) && (
                <ProfileCardContext.Provider value={contextData}>
                    <ProfileCardEditDialog
                        editDialog={editDialog}
                        open={openEditDialog}
                        onClose={setEditDialogClosed}
                        data={data}
                        isEditing={isEditingProfile || forceOpenEditDialog}
                    />
                </ProfileCardContext.Provider>
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
                {mode === 'edit' &&
                    editButtonTransitions.map(
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
                                <SideComponent data={data} handleAddButtonClick={handleAddButtonClick} />
                            </ProfileCardSide>
                        );
                    })}
                </ProfileCardContext.Provider>
            </Card>
        </>
    );
};

const EditAction = ({ customEditAction, setEditDialogOpened }) => {
    const onCustomClick = useCallback(() => setEditDialogOpened(), []);
    if (customEditAction) {
        const Component = customEditAction;
        return <Component onClick={onCustomClick} />;
    }
    return <ProfileCardEditButton setEditDialogOpened={setEditDialogOpened} />;
};

export const ProfileCard = ProfileCardComponent;
