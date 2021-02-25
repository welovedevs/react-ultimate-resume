import React, { memo } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';
import { AnimatePresence, motion } from 'framer-motion';

import { Typography } from '@welovedevs/ui';

import { UserInformations } from './user_actions_row/user_informations/user_informations';
import { SocialActions } from './user_actions_row/social_actions/social_actions';
import { CustomizeButton } from './user_actions_row/customize_button/customize_button';
import { EditHeaderImageButton } from './edit_header_image_button/edit_header_image_button';

import { OPACITY_TRANSITIONS } from '../../utils/framer_motion/common_transitions/opacity_transitions';

import { useIsEditing } from '../hooks/use_is_editing';
import { useAdditionalNodes } from '../hooks/use_additional_nodes';
import { useReceivedGlobalClasses } from '../hooks/use_received_global_classes';

import { styles } from './banner_styles';
import { useMode } from '../hooks/use_mode';
import { EditButton } from './user_actions_row/edit_button/edit_button';

const useStyles = createUseStyles(styles);

const BannerComponent = ({ customizationOptions, onCustomizationChanged }) => {
    const classes = useStyles();
    const [mode] = useMode();
    const [actionsButtons] = useAdditionalNodes('banner.actionsButtons', null);
    const [globalReceivedBannerClasses = {}] = useReceivedGlobalClasses('banner');
    const [isEditing] = useIsEditing();

    const imageInformations = customizationOptions?.imageHeader;
    const bannerImageCredits = customizationOptions?.imageHeader?.credits;

    return (
        <div className={cn(classes.container, globalReceivedBannerClasses.container)}>
            {isEditing && onCustomizationChanged && (
                <EditHeaderImageButton customizationOptions={customizationOptions} />
            )}
            <div className={cn(classes.overlay, globalReceivedBannerClasses.overlay)} />
            <AnimatePresence>
                {imageInformations && (
                    <motion.img
                        className={classes.image}
                        src={imageInformations?.url}
                        alt={imageInformations?.alt}
                        variants={OPACITY_TRANSITIONS}
                        transition={{ duration: 1 }}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    />
                )}
            </AnimatePresence>
            <div className={cn(classes.content, globalReceivedBannerClasses.content)}>
                <UserInformations />
                <SocialActions>
                    {actionsButtons}
                    {mode === 'edit' && <EditButton />}
                    {mode === 'edit' && <CustomizeButton customizationOptions={customizationOptions} />}
                </SocialActions>
            </div>
            {bannerImageCredits?.name && (
                <Typography
                    classes={{ container: cn(classes.credits, globalReceivedBannerClasses.credits) }}
                    variant="body3"
                >
                    <FormattedMessage
                        id="Unsplash.credit"
                        defaultMessage="Photo by {name} on {unsplashLink}"
                        values={{
                            name: (
                                <a
                                    className={classes.author}
                                    href={bannerImageCredits.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={bannerImageCredits.name}
                                >
                                    {bannerImageCredits.name}
                                </a>
                            ),
                            unsplashLink: (
                                <a
                                    href={encodeURI(
                                        'https://unsplash.com/?utm_source=W3D Developer Profile&utm_medium=referral'
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FormattedMessage id="Unsplash.brandName" defaultMessage="Unsplash" />
                                </a>
                            )
                        }}
                    />
                </Typography>
            )}
        </div>
    );
};

export const Banner = memo(BannerComponent);
