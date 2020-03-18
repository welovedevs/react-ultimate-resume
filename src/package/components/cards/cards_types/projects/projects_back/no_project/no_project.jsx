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
                    defaultMessage="Describe a project that you've enjoyed as a developer. This project may have been realized during your studies, your personal time or while working at a company."
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
