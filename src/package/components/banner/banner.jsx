import React, { useContext } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';
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

const UnsplashCredits = ({ credits: { name, url } }) => {
    const classes = useStyles();
    return (
        <div className={classes.credits}>
            <Typography variant="body3">
                <FormattedMessage
                    id="Unsplash.credit"
                    defaultMessage="Photo by {name} on {unsplashLink}"
                    values={{
                        name: <a href={url}>{name}</a>,
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
        </div>
    );
};

const BannerComponent = ({ children, customizationOptions, onCustomizationChanged }) => {
    const classes = useStyles();
    const { isEditing } = useContext(DeveloperProfileContext);

    const transitions = useTransition(customizationOptions?.imageHeader, item => item?.alt, {
        ...OPACITY_TRANSITIONS,
        unique: true,
        config: config.molasses
    });

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
            {customizationOptions?.imageHeader?.fromUnsplash && (
                <UnsplashCredits credits={customizationOptions?.imageHeader?.credits} />
            )}
            <div className={classes.content}>
                <UserInformations />
                <SocialActions>
                    {children}
                    {onCustomizationChanged && <CustomizeButton customizationOptions={customizationOptions} />}
                </SocialActions>
            </div>
        </div>
    );
};

export const Banner = BannerComponent;
