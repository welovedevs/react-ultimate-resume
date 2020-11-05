import React, { memo, useCallback } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { Typography } from '@welovedevs/ui';
import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontVector } from '../../../../commons/profile_card/profile_card_front_vector/profile_card_front_vector';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';

import { ReactComponent as SpotifyLogo } from '../../../../../assets/icons/brands/spotify.svg';
import { SIDES } from '../../../../commons/profile_card/profile_card_side/side';

import { styles } from './soundtrack_front_styles';
import { useCardSide } from '../../../../hooks/profile_card_hooks/use_card_side';
import { NoDataButton } from '../../../../commons/no_data_button/no_data_button';

const useStyles = createUseStyles(styles);

const SoundtrackFrontComponent = ({ data, handleAddButtonClick }) => {
    const classes = useStyles();
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === SIDES.FRONT ? SIDES.BACK : SIDES.FRONT), [
        side,
        setSide
    ]);

    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer classes={{ container: classes.container }}>
                    <Content {...{ data, handleAddButtonClick, classes }} />
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            {data?.embedUrl && (
                <ProfileCardActions>
                    <ProfileCardButton onClick={handleButtonClick}>
                        <FormattedMessage id="Soundtrack.front.button" defaultMessage="My playlist" />
                    </ProfileCardButton>
                </ProfileCardActions>
            )}
        </>
    );
};

const Content = ({ data, handleAddButtonClick, classes }) => {
    if (!data?.embedUrl) {
        return (
            <div className={classes.noSoundTrack}>
                <Typography variant="h3" component="h3" classes={{ container: classes.noSoundTrackTypography }}>
                    <FormattedMessage
                        id="SoundTrack.front.noSoundTrack"
                        defaultMessage="Vous n'avez pas encore ajouté de playlist !"
                    />
                </Typography>
                <NoDataButton
                    handleAddButtonClick={handleAddButtonClick}
                    classes={{
                        container: classes.addButton
                    }}
                >
                    <FormattedMessage id="SoundTrack.noSoundTrack.buttonLabel" defaultMessage="Ajouter une playlist" />
                </NoDataButton>
            </div>
        );
    }
    return (
        <>
            <ProfileCardFrontVector classes={{ container: classes.logo }} vector={SpotifyLogo} />
            <ProfileCardFrontTypography classes={{ container: classes.typography }}>
                <FormattedMessage id="Soundtrack.front.title" defaultMessage="Discover my favourite tracks" />
            </ProfileCardFrontTypography>
        </>
    );
};

export const SoundtrackFront = memo(SoundtrackFrontComponent);
