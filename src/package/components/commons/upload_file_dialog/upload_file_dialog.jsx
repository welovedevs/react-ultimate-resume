import React, { useCallback, useContext } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Button } from '@wld/ui';

import { Dialog, DialogContent, DialogActions } from '@material-ui/core';

import { DialogTitle } from '../dialog/dialog_title/dialog_title';
import { FileDropZone } from '../file_drop_zone/file_drop_zone';
import { DeveloperProfileContext } from '../../profile';

import { styles } from './upload_file_dialog_styles';

const useStyles = createUseStyles(styles);

const UploadFileDialogComponent = ({ open, onClose, onFileUploaded }) => {
    const classes = useStyles();
    const { onFilesUpload } = useContext(DeveloperProfileContext);

    const onDrop = useCallback(
        () =>
            onFilesUpload().then(url => {
                onFileUploaded(url);
                return url;
            }),
        [onFileUploaded]
    );
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Upload un fichier</DialogTitle>
            <DialogContent>
                <FileDropZone onDrop={onDrop} />
            </DialogContent>
            <DialogActions>
                <Button size="small" onClick={onClose}>
                    <FormattedMessage id="Main.lang.close" defaultMessage="Fermer" />
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export const UploadFileDialog = UploadFileDialogComponent;
