import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';

import { createUseStyles, useTheme } from 'react-jss';
import { AnimatePresence, motion } from 'framer-motion';

import { Card } from '@welovedevs/ui';

import { useMediaQuery } from '@material-ui/core';

import { ProfileCardSide } from './profile_card_side/profile_card_side';
import { ProfileCardEditButton } from './profile_card_edit_button/profile_card_edit_button';
import { ProfileCardEditDialog } from './profile_card_edit_dialog/profile_card_edit_dialog';
import { ProfileCardIncompletePopper } from './profile_card_incomplete_popper/profile_card_incomplete_popper';

import {
    SET_CHANGING_SIDES,
    SET_IS_EDITING,
    SET_SIDE,
    SET_VARIANT
} from '../../../store/profile_card/profile_card_actions_types';
import { getProfileCardInitialState, profileCardReducer } from '../../../store/profile_card/profile_card_reducer';
import { DeveloperProfileContext } from '../../../utils/context/contexts';
import { PROFILE_CARD_EDIT_BUTTON_TRANSITIONS_PROPS } from './profile_card_props';
import { SIDES } from './profile_card_side/side';

import { styles } from './profile_card_styles';
import { OPACITY_TRANSITIONS } from '../../../utils/framer_motion/common_transitions/opacity_transitions';

const useStyles = createUseStyles(styles);

export const ProfileCardContext = createContext({});

const ProfileCardComponent = ({
    id,
    children,
    data,
    sides,
    kind,
    variant,
    isEditingProfile,
    editDialog,
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
            side: sideProps || SIDES.FRONT,
            isEditing: isEditingProfile
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
        dispatch({
            type: SET_IS_EDITING,
            value: isEditingProfile
        });
    }, [isEditingProfile]);

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

    const handleAddButtonClick = useCallback(() => {
        setOpenEditDialog(true);
        setForceOpenEditDialog(true);
    }, []);

    const contextData = useMemo(() => ({ state, dispatch }), [JSON.stringify(state)]);
    const SideComponent = sides[side] || (() => null);

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
                classes={{ container: classes.container }}
                id={id}
                elevation={1}
                {...(!isSmall &&
                    !sideProps && {
                        onMouseEnter: handleMouseEnter,
                        onMouseLeave: handleMouseLeave
                    })}
            >
                {mode === 'edit' && isEditingProfile && (
                    <motion.div
                        variants={PROFILE_CARD_EDIT_BUTTON_TRANSITIONS_PROPS}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        className={classes.editButtonContainer}
                    >
                        <EditAction customEditAction={customEditAction} setEditDialogOpened={setEditDialogOpened} />
                    </motion.div>
                )}
                <ProfileCardContext.Provider value={contextData}>
                    {children}
                    <AnimatePresence>
                        {side && (
                            <ProfileCardSide
                                key={`card_side_${side}_${kind}`}
                                animationProps={OPACITY_TRANSITIONS}
                            >
                                <SideComponent data={data} handleAddButtonClick={handleAddButtonClick} />
                            </ProfileCardSide>
                        )}
                    </AnimatePresence>
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
