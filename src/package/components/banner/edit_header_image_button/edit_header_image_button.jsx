import React, { useCallback, useContext } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { ReactComponent as PhotoCameraIcon } from '../../../assets/icons/photo_camera.svg';

import { DeveloperProfileContext } from '../../../utils/context/contexts';
import { BouncingRoundButton } from '../../commons/bouncing_round_button/bouncing_round_button';
import { EditBannerImageDialog } from '../edit_banner_image_dialog/edit_banner_image_dialog';

import { useCallbackOpen } from '../../hooks/use_callback_open';

import { styles } from './edit_header_image_button_styles';
import { useReceivedGlobalClasses } from '../../hooks/use_received_global_classes';
import { useMode } from '../../hooks/use_mode';

const useStyles = createUseStyles(styles);

export const EditHeaderImageButton = ({ customizationOptions }) => {
    const classes = useStyles();
    const [globalReceivedClasses = {}] = useReceivedGlobalClasses('banner.editHeaderImageButton');
    const [mode] = useMode();
    const { onCustomizationChanged } = useContext(DeveloperProfileContext);
    const [open, onOpen, onClose] = useCallbackOpen();

    const onChange = useCallback(
        value => {
            if (typeof onCustomizationChanged === 'function') {
                onCustomizationChanged({ ...customizationOptions, imageHeader: value });
            }
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
            {mode === 'edit' && (
                <BouncingRoundButton
                    title={<FormattedMessage id="Banner.image.editButton" defaultMessage="Edit image banner" />}
                    icon={PhotoCameraIcon}
                    onClick={onOpen}
                    classes={{
                        container: cn(classes.editButton, globalReceivedClasses)
                    }}
                />
            )}
        </>
    );
};
