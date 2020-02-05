import React, { useCallback } from 'react';

import { createUseStyles } from 'react-jss';
import { animated, useSpring } from 'react-spring';

import { Tooltip } from '@wld/ui';
import { ReactComponent as EditIcon } from '../../../../assets/icons/edit.svg';

import { PROFILE_CARD_EDIT_BUTTON_SPRING_PROPS } from './profile_card_edit_button_spring_props';

import { styles } from './profile_card_edit_button_styles';

const useStyles = createUseStyles(styles);

const ProfileCardEditButtonComponent = ({ setEditDialogOpened }) => {
    const classes = useStyles();
    const [springProps, setSpringProps] = useSpring(() => PROFILE_CARD_EDIT_BUTTON_SPRING_PROPS.default);

    const handleMouseDown = useCallback(() => setSpringProps(PROFILE_CARD_EDIT_BUTTON_SPRING_PROPS.active));
    const handleMouseUp = useCallback(() => setSpringProps(PROFILE_CARD_EDIT_BUTTON_SPRING_PROPS.default));

    return (
        <Tooltip title="Editer cette carte">
            <animated.button
                type="button"
                className={classes.editButton}
                onClick={setEditDialogOpened}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                style={{
                    transform: springProps.scale.interpolate(value => `scale3d(${value}, ${value}, ${value})`)
                }}
            >
                <EditIcon className={classes.editIcon} />
            </animated.button>
        </Tooltip>
    );
};

export const ProfileCardEditButton = ProfileCardEditButtonComponent;
