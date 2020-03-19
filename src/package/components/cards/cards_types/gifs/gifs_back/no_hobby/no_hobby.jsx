import React from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Typography } from '@wld/ui';

import { styles } from './no_hobby_styles';
import { NoDataButton } from '../../../../../commons/no_data_button/no_data_button';

const useStyles = createUseStyles(styles);

const NoHobbyComponent = ({ handleAddButtonClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography style={{ color: 'inherit' }} variant="h4" component="h4" className={classes.noGifDescription}>
                <FormattedMessage
                    id="Gifs.noHobby.title"
                    defaultMessage="Vos hobbies seront affichés sous la forme d'un gif trop stylé !"
                />
            </Typography>
            <NoDataButton
                color="secondary"
                handleAddButtonClick={handleAddButtonClick}
                classes={{
                    container: classes.button
                }}
            >
                <FormattedMessage id="Gifs.noHobby.buttonLabel" defaultMessage="Ajouter un hobby" />
            </NoDataButton>
        </div>
    );
};

export const NoHobby = NoHobbyComponent;
