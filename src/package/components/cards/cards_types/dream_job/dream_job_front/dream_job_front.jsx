import React from 'react';

import { createUseStyles } from 'react-jss';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontVector } from '../../../../commons/profile_card/profie_card_front_vector/profile_card_front_vector';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';

import { ReactComponent as HomeLogo } from '../../../../../assets/icons/home.svg';

import { styles } from './dream_job_front_styles';

const useStyles = createUseStyles(styles);

const DreamJobFrontComponent = () => {
    const classes = useStyles();
    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer customClasses={{ container: classes.container }}>
                    <ProfileCardFrontVector
                        customClasses={{ container: classes.logo }}
                        vector={HomeLogo}
                    />
                    <ProfileCardFrontTypography customClasses={{ container: classes.typography }}>
                        Want to work remotely
                    </ProfileCardFrontTypography>
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            <ProfileCardActions>
                <ProfileCardButton>
                    Discover my dream job
                </ProfileCardButton>
            </ProfileCardActions>
        </>
    );
};

export const DreamJobFront = DreamJobFrontComponent;
