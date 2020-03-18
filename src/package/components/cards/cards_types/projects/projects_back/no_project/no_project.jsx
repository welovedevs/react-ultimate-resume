import React from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Typography } from '@wld/ui';

import { styles } from './no_project_styles';
import { NoDataButton } from '../../../../../commons/no_data_button/no_data_button';

const useStyles = createUseStyles(styles);

const NoProjectComponent = ({ handleAddButtonClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography style={{ color: 'inherit' }} variant="h4" component="h4">
                <FormattedMessage
                    id="Projects.noProject.title"
                    defaultMessage="Décrivez ici un projet qui vous a plus en tant que développeur, ce projet peut avoir été réalisé pendant vos études, sur votre temps personnel ou au sein d'une entreprise."
                />
            </Typography>
            <NoDataButton
                handleAddButtonClick={handleAddButtonClick}
                classes={{
                    container: classes.button
                }}
            >
                <FormattedMessage id="Projects.noProject.buttonLabel" defaultMessage="Ajouter un projet" />
            </NoDataButton>
        </div>
    );
};

export const NoProject = NoProjectComponent;
