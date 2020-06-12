import React from 'react';

import { createUseStyles } from 'react-jss';

import { SortButtonRounded } from '../sort_button_rounded/sort_button_rounded';
import { SortProjectsDialog } from '../sort_projects_dialog/sort_projects_dialog';

import { useCallbackOpen } from '../../../../hooks/use_callback_open';

import { styles } from './sort_projects_button_styles';

const useStyles = createUseStyles(styles);

export const SortProjectsButton = ({ title, projects }) => {
    const classes = useStyles(styles);

    const [openDialog, setDialogOpened, setDialogClosed] = useCallbackOpen();

    return (
        <>
            <SortProjectsDialog open={openDialog} onClose={setDialogClosed} projects={projects} />
            <SortButtonRounded title={title} classes={{ container: classes.container }} onClick={setDialogOpened} />
        </>
    );
};
