import React from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Typography } from '@wld/ui';

import { styles } from './no_project_styles';
import { AddButton } from '../../add_button/add_button';

const useStyles = createUseStyles(styles);

const NoProjectComponent = ({ handleAddButtonClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography
                color="primary"
                variant="h4"
                component="h4"
            >
                <FormattedMessage
                    id="Projects.noProject.title"
                    defaultMessage="Décrivez ici un projet qui vous a plus en tant que développeur, ce projet peut avoir été réalisé pendant vos études, sur votre temps personnel ou au sein d'une entreprise."
                />
            </Typography>
            <AddButton
                handleAddButtonClick={handleAddButtonClick}
                classes={{
                    container: classes.button
                }}
            />
        </div>
    );
};

export const NoProject = NoProjectComponent;
