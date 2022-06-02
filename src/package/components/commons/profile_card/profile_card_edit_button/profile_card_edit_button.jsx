import React from 'react';

import makeStyles from '@mui/styles/makeStyles';

import { ReactComponent as EditIcon } from '../../../../assets/icons/edit.svg';

import { BouncingRoundButton } from '../../bouncing_round_button/bouncing_round_button';

import { styles } from './profile_card_edit_button_styles';

const useStyles = makeStyles(styles);

const ProfileCardEditButtonComponent = ({ title = 'Editer cette carte', setEditDialogOpened }) => {
    const classes = useStyles();
    return (
        <BouncingRoundButton
            title={title}
            icon={EditIcon}
            onClick={setEditDialogOpened}
            classes={{
                container: classes.container
            }}
        />
    );
};

export const ProfileCardEditButton = ProfileCardEditButtonComponent;
