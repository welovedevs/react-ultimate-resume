import React, { useCallback, useContext } from 'react';

import { FormattedMessage } from 'react-intl';

import { Button } from '@welovedevs/ui';

import { Dialog, DialogActions, DialogContent } from '@material-ui/core';

import { DialogTitle } from '../dialog/dialog_title/dialog_title';
import { FileDropZone } from '../file_drop_zone/file_drop_zone';
import { DeveloperProfileContext } from '../../../utils/context/contexts';

const UploadFileDialogComponent = ({ open, onClose, onFileUploaded }) => {
    const { onFilesUpload } = useContext(DeveloperProfileContext);

    const onDrop = useCallback(
        (files) =>
            onFilesUpload(files).then((url) => {
                onFileUploaded(url);
                return url;
            }),
        [onFileUploaded, onFilesUpload]
    );
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                <FormattedMessage id="UploadDialog.title" defaultMessage="Upload a file" />
            </DialogTitle>
            <DialogContent>
                <FileDropZone disabled={!onFilesUpload} onDrop={onDrop} />
            </DialogContent>
            <DialogActions>
                <Button size="small" onClick={onClose}>
                    <FormattedMessage id="Main.lang.close" defaultMessage="Close" />
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export const UploadFileDialog = UploadFileDialogComponent;
