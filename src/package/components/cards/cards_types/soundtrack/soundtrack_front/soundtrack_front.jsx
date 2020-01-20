import React from 'react';

import { createUseStyles } from 'react-jss';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';

import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';

import { ReactComponent as SpotifyLogo } from '../../../../../assets/icons/brands/spotify.svg';

import { styles } from './soundtrack_front_styles';

const useStyles = createUseStyles(styles);

const SoundtrackFrontComponent = () => {
    const classes = useStyles();
    return (
        <ProfileCardPaddedFront>
            <CenterContentContainer>
                <SpotifyLogo className={classes.logo} />
            </CenterContentContainer>
        </ProfileCardPaddedFront>
    );
};

export const SoundtrackFront = SoundtrackFrontComponent;
