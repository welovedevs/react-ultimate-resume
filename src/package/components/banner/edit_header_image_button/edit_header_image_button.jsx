import React, { useCallback, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { DeveloperProfileContext } from '../../../utils/context/contexts';
import { BouncingRoundButton } from '../../commons/bouncing_round_button/bouncing_round_button';
import { ReactComponent as EditIcon } from '../../../assets/icons/edit.svg';
import { useCallbackOpen } from '../../hooks/use_callback_open';
import { UnsplashEditDialog } from '../unsplash_edit_dialog/unsplash_edit_dialog';
import { styles } from './edit_header_image_button_styles';

const useStyles = createUseStyles(styles);
export const EditHeaderImageButton = ({ customizationOptions }) => {
    const classes = useStyles();
    const { onCustomizationChanged } = useContext(DeveloperProfileContext);
    const [open, onOpen, onClose] = useCallbackOpen();

    const onChange = useCallback(
        value => {
            onCustomizationChanged({ ...customizationOptions, imageHeader: value });
        },
        [customizationOptions]
    );
    return (
        <>
            <UnsplashEditDialog
                open={open}
                onClose={onClose}
                value={customizationOptions.imageHeader}
                onChange={onChange}
            />
            <BouncingRoundButton
                title={<FormattedMessage id="Banner.image.editButton" defaultMessage="Edit banner image" />}
                icon={EditIcon}
                onClick={onOpen}
                classes={{
                    container: classes.editButton
                }}
            />
        </>
    );
};
