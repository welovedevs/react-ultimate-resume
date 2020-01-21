import React from 'react';

import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { styles } from './experiences_front_styles';

const useStyles = createUseStyles(styles);

const ExperiencesFrontComponent = ({ variant }) => {
    const classes = useStyles();
    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer customClasses={{ container: classes.container }}>
                    <div className={classes.textsContainer}>
                        <ProfileCardFrontTypography customClasses={{ container: classes.mainTypography }}>
                            I am leading the front-end team @welovedevs
                        </ProfileCardFrontTypography>
                        <Typography
                            customClasses={{ container: classes.locationTypography }}
                            component="h3"
                            variant="h2"
                        >
                            📍 Lille
                        </Typography>
                    </div>
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            <ProfileCardActions>
                <ProfileCardButton cardVariant={variant}>
                    3 more positions
                </ProfileCardButton>
            </ProfileCardActions>
        </>
    );
};

export const ExperiencesFront = ExperiencesFrontComponent;
