import React from 'react';

import { createUseStyles } from 'react-jss';

import { BouncingRoundButton } from '../../../../commons/bouncing_round_button/bouncing_round_button';

import { ReactComponent as EditIcon } from '../../../../../assets/icons/add.svg';

import { styles } from './add_button_styles';

const useStyles = createUseStyles(styles);

const AddButtonComponent = ({ title = 'Ajouter', onClick }) => {
    const classes = useStyles();
    return (
        <BouncingRoundButton
            title={title}
            icon={EditIcon}
            onClick={onClick}
            classes={{
                container: classes.container
            }}
        />
    );
};

export const AddButton = AddButtonComponent;
