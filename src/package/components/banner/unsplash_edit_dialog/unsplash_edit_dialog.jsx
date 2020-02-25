import React, { useCallback, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';
import { Dialog, DialogContent } from '@material-ui/core';
import { Typography } from '@wld/ui';

import { DialogTitle } from '../../commons/dialog/dialog_title/dialog_title';
import { styles } from './unsplash_edit_dialog_styles';
import { UnsplashSearchImage } from '../../commons/unsplash_search_image/unsplash_search_image';
import { DeveloperProfileContext } from '../../../utils/context/contexts';
import { FileDropZone } from '../../commons/file_drop_zone/file_drop_zone';
// import { DeveloperProfileContext } from '../../../utils/context/contexts';

const useStyles = createUseStyles(styles);
export const UnsplashEditDialog = ({ open, onClose, onChange }) => {
    const classes = useStyles();
    const { apiKeys, onFilesUpload } = useContext(DeveloperProfileContext);

    const onImageSelected = useCallback(
        payload => {
            onChange(payload);
        },
        [onChange]
    );

    const onDrop = useCallback(
        () =>
            onFilesUpload().then(url => {
                onImageSelected({ url });
                return url;
            }),
        [onImageSelected]
    );
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                <FormattedMessage id="Unsplash.Dialog.title" defaultMessage="Trouvez une image via unsplash" />
            </DialogTitle>
            <DialogContent className={classes.content}>
                {apiKeys.unsplash && (
                    <UnsplashSearchImage onChange={onImageSelected} classes={{ container: classes.container }} />
                )}
                <div className={classes.divider}>
                    {apiKeys.unsplash && (
                        <Typography>
                            <FormattedMessage id="Main.lang.or" defaultMessage="OR" />
                        </Typography>
                    )}
                </div>
                <FileDropZone onDrop={onDrop} />
            </DialogContent>
        </Dialog>
    );
};
