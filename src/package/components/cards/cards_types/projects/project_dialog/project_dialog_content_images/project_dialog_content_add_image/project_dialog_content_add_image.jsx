import React from 'react';

import { createUseStyles } from 'react-jss';

import { Tooltip, Typography } from '@wld/ui';

import { UrlUploadFileDialog } from '../../../../../../commons/url_upload_file_dialog/url_upload_file_dialog';

import { useCallbackOpen } from '../../../../../../hooks/use_callback_open';

import { styles } from './project_dialog_content_add_image_styles';

const useStyles = createUseStyles(styles);

const ProjectDialogContentAddImageComponent = () => {
    const classes = useStyles();
    const [openDialog, setDialogOpened, setDialogClosed] = useCallbackOpen();

    return (
        <>
            <UrlUploadFileDialog open={openDialog} onClose={setDialogClosed} />
            <Tooltip title="Ajouter une image">
                <button type="button" className={classes.container} onClick={setDialogOpened}>
                    <Typography variant="h2">+</Typography>
                </button>
            </Tooltip>
        </>
    );
};

export const ProjectDialogContentAddImage = ProjectDialogContentAddImageComponent;
