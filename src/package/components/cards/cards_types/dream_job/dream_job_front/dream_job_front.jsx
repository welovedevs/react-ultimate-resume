import React, { memo, useCallback, useMemo } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles, useTheme } from 'react-jss';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontVector } from '../../../../commons/profile_card/profile_card_front_vector/profile_card_front_vector';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';

import { ReactComponent as HomeLogo } from '../../../../../assets/icons/home.svg';

import { useCardSide } from '../../../../hooks/profile_card_hooks/use_card_side';
import { REMOTE_FREQUENCY } from '../../../../../utils/enums/remote/remote_utils';
import { SIDES } from '../../../../commons/profile_card/profile_card_side/side';

import { styles } from './dream_job_front_styles';

const useStyles = createUseStyles(styles);

const DreamJobFrontComponent = ({ data }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const { remoteFrequency, places } = data;
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === SIDES.FRONT ? SIDES.BACK : SIDES.FRONT), [
        side,
        setSide
    ]);

    const andMore = useMemo(() => {
        if (places.length < 2) {
            return '';
        }
        return ` (+ ${places.length - 1})`;
    }, [places]);
    const content = useMemo(() => {
        if (remoteFrequency === REMOTE_FREQUENCY.FULL_TIME) {
            return (
                <>
                    <ProfileCardFrontVector classes={{ container: classes.logo }} vector={HomeLogo} />
                    <ProfileCardFrontTypography classes={{ container: classes.typography }}>
                        <FormattedMessage id="DreamJob.Front.RemoteFulltime" defaultMessage="I want to work remotely" />
                    </ProfileCardFrontTypography>
                </>
            );
        }

        return (
            <>
                <ProfileCardFrontVector classes={{ container: classes.logo }} vector={HomeLogo} />
                <ProfileCardFrontTypography classes={{ container: classes.typography }}>
                    <FormattedMessage
                        id="DreamJob.Front.Cities"
                        defaultMessage="I want to work in {cities}{andMore}"
                        values={{
                            cities: places?.[0]?.name,
                            andMore
                        }}
                    />
                </ProfileCardFrontTypography>
            </>
        );
    }, [remoteFrequency, places]);
    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer classes={{ container: classes.container }}>{content}</CenterContentContainer>
            </ProfileCardPaddedFront>
            <ProfileCardActions>
                <ProfileCardButton onClick={handleButtonClick}>
                    <FormattedMessage id="Dreamjob.front.action" defaultMessage="Discover my dream job" />
                </ProfileCardButton>
            </ProfileCardActions>
        </>
    );
};

export const DreamJobFront = memo(DreamJobFrontComponent);
