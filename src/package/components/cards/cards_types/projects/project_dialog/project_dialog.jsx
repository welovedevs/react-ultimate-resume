import React from 'react';

import { createUseStyles } from 'react-jss';

import { styles } from './project_dialog_styles';

const useStyles = createUseStyles(styles);

const ProjectsDialogComponent = () => {
    const classes = useStyles();

};

export const ProjectsDialog = ProjectsDialogComponent;
