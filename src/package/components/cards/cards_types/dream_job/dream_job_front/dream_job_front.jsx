import React, { useMemo } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontVector } from '../../../../commons/profile_card/profie_card_front_vector/profile_card_front_vector';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';

import { ReactComponent as HomeLogo } from '../../../../../assets/icons/home.svg';

import { styles } from './dream_job_front_styles';
import { REMOTE_FREQUENCY } from '../../../../../utils/enums/remote/remote_utils';

const useStyles = createUseStyles(styles);

const DreamJobFrontComponent = ({ data }) => {
    const { remoteFrequency, places } = data;
    const classes = useStyles();

    const content = useMemo(() => {
        if (remoteFrequency === REMOTE_FREQUENCY.FULL_TIME) {
            return (
                <>
                    <ProfileCardFrontVector customClasses={{ container: classes.logo }} vector={HomeLogo} />
                    <ProfileCardFrontTypography customClasses={{ container: classes.typography }}>
                        <FormattedMessage
                            id="DreamJob.Front.RemoteFulltime"
                            defaultMessage="I want to work remotely"
                        />
                    </ProfileCardFrontTypography>
                </>
            );
        }

        return (
            <>
                <ProfileCardFrontVector customClasses={{ container: classes.logo }} vector={HomeLogo} />
                <ProfileCardFrontTypography customClasses={{ container: classes.typography }}>
                    <FormattedMessage
                        id="DreamJob.Front.Cities"
                        defaultMessage="I want to work in {cities}"
                        values={{
                            cities: places
                                .slice(0, 2)
                                .map(({ name }) => name)
                                .join(', ')
                        }}
                    />
                </ProfileCardFrontTypography>
            </>
        );
    }, [remoteFrequency, places]);
    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer customClasses={{ container: classes.container }}>
                    {content}
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            <ProfileCardActions>
                <ProfileCardButton>
                    <FormattedMessage id="Dreamjob.front.action" defaultMessage="Discover my dream job" />
                </ProfileCardButton>
            </ProfileCardActions>
        </>
    );
};

export const DreamJobFront = DreamJobFrontComponent;
