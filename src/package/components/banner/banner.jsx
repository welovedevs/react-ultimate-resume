import React, { useContext } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';
import { animated, config, useTransition } from 'react-spring';

import { Typography } from '@wld/ui';

import { UserInformations } from './user_actions_row/user_informations/user_informations';
import { SocialActions } from './user_actions_row/social_actions/social_actions';
import { CustomizeButton } from './user_actions_row/customize_button/customize_button';
import { DeveloperProfileContext } from '../../utils/context/contexts';
import { EditHeaderImageButton } from './edit_header_image_button/edit_header_image_button';

import { OPACITY_TRANSITIONS } from '../../utils/springs/common_transitions/opacity_transitions';

import { styles } from './banner_styles';

const useStyles = createUseStyles(styles);

const BannerComponent = ({ children, customizationOptions, onCustomizationChanged }) => {
    const classes = useStyles();
    const { isEditing } = useContext(DeveloperProfileContext);

    const transitions = useTransition(customizationOptions?.imageHeader, item => item?.alt, {
        ...OPACITY_TRANSITIONS,
        unique: true,
        config: config.molasses
    });

    const bannerImageCredits = customizationOptions?.imageHeader?.credits;

    return (
        <div className={classes.container}>
            {isEditing && onCustomizationChanged && (
                <EditHeaderImageButton customizationOptions={customizationOptions} />
            )}
            <div className={classes.overlay} />
            {transitions.map(({ item, key, props }) => item && (
                <animated.img
                    key={key}
                    className={classes.image}
                    src={item?.url}
                    alt={item?.alt}
                    style={props}
                />
            ))}
            <div className={classes.content}>
                <UserInformations />
                <SocialActions>
                    {children}
                    {onCustomizationChanged && <CustomizeButton customizationOptions={customizationOptions} />}
                </SocialActions>
            </div>
            {bannerImageCredits?.name && (
                    <Typography
                        customClasses={{ container: classes.credits }}
                        variant="body3"
                    >
                        <FormattedMessage
                            id="Unsplash.credit"
                            defaultMessage="Photo by {name} on {unsplashLink}"
                            values={{
                                name: <a href={bannerImageCredits.url}>{bannerImageCredits.name}</a>,
                                unsplashLink: (
                                    <a
                                        href={encodeURI(
                                            'https://unsplash.com/?utm_source=W3D Developer Profile&utm_medium=referral'
                                        )}
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

export const Banner = BannerComponent;
