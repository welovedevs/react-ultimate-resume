import React, { useCallback, useContext } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Button, Typography } from '@wld/ui';

import { Dialog, DialogContent, DialogActions } from '@material-ui/core';

import { DialogTitle } from '../../commons/dialog/dialog_title/dialog_title';
import { DeveloperProfileContext } from '../../../utils/context/contexts';

import { FileDropZone } from '../../commons/file_drop_zone/file_drop_zone';
import { SearchUnsplashDialog } from '../../commons/search_unsplash_dialog/search_unsplash_result';

import { useCallbackOpen } from '../../hooks/use_callback_open';

import { styles } from './edit_banner_image_dialog_styles';

const useStyles = createUseStyles(styles);

const EditBannerImageDialogComponent = ({ open, onClose, onChange }) => {
    const classes = useStyles();
    const { onFilesUpload } = useContext(DeveloperProfileContext);

    const [openSearchUnsplashDialog, setSearchUnsplashDialogOpened, setSearchUnsplashDialogClosed] = useCallbackOpen();

    const onImageSelected = useCallback(
        payload => {
            onChange(payload);
            onClose();
            setSearchUnsplashDialogClosed();
        },
        [onChange, onClose]
    );

    const onDrop = useCallback(
        files =>
            onFilesUpload(files).then(url => {
                onImageSelected({ url });
                return url;
            }),
        [onImageSelected]
    );
    const onClear = useCallback(() => onImageSelected(null), [onImageSelected]);

    return (
        <>
            <SearchUnsplashDialog
                open={openSearchUnsplashDialog}
                onClose={setSearchUnsplashDialogClosed}
                onSelect={onImageSelected}
            />
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>
                    <FormattedMessage id="Banner.EditImageDialog.Title" defaultMessage="Pick an image" />
                </DialogTitle>
                <DialogContent classes={{ root: classes.content }}>
                    <div className={classes.buttonContainer}>
                        <Button
                            color="primary"
                            variant="outlined"
                            onClick={setSearchUnsplashDialogOpened}
                            customClasses={{
                                container: classes.button
                            }}
                        >
                            <FormattedMessage
                                id="Banner.EditImageDialog.unsplashButton"
                                defaultMessage="Search on unsplash"
                            />
                        </Button>
                    </div>
                    <div className={classes.divider}>
                        <Typography className={classes.dividerOr} variant="h4" component="h4">
                            <FormattedMessage id="Main.Lang.Or" defaultMessage="or" />
                        </Typography>
                    </div>
                    <FileDropZone onDrop={onDrop} />
                </DialogContent>
                <DialogActions>
                    <Button size="small" color="danger" onClick={onClear}>
                        <FormattedMessage id="Main.lang.clear" defaultMessage="Clear" />
                    </Button>
                    <Button size="small" onClick={onClose}>
                        <FormattedMessage id="Main.lang.close" defaultMessage="Close" />
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export const EditBannerImageDialog = EditBannerImageDialogComponent;
