import React, { useCallback, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { DeveloperProfileContext } from '../../../utils/context/contexts';
import { BouncingRoundButton } from '../../commons/bouncing_round_button/bouncing_round_button';
import { ReactComponent as EditIcon } from '../../../assets/icons/edit.svg';
import { EditBannerImageDialog } from '../edit_banner_image_dialog/edit_banner_image_dialog';

import { useCallbackOpen } from '../../hooks/use_callback_open';

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
            <EditBannerImageDialog
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
