import React, { useCallback, useContext } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Typography } from '@wld/ui';

import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { ProfileCardContext } from '../../../../commons/profile_card/profile_card';
import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { styles } from './basics_front_styles';

const useStyles = createUseStyles(styles);

const BasicsFrontComponent = ({ data, variant }) => {
    const classes = useStyles();
    const { side, setSide } = useContext(ProfileCardContext);
    const {
        currentPosition,
        currentCity: { name: currentCityName }
    } = data;
    const handleButtonClick = useCallback(() => setSide(side === 'front' ? 'back' : 'front'), [side]);
    return (
        <ProfileCardPaddedFront>
            <CenterContentContainer>
                <ProfileCardFrontTypography>
                    <FormattedMessage
                        id="Basics.Front.MainPhrase"
                        defaultMessage={'{currentPosition} based in {currentCity}'}
                        values={{ currentCity: currentCityName, currentPosition }}
                    />
                </ProfileCardFrontTypography>
            </CenterContentContainer>
            <ProfileCardActions>
                <ProfileCardButton cardVariant={variant} onClick={handleButtonClick}>
                    More about me
                </ProfileCardButton>
            </ProfileCardActions>
        </ProfileCardPaddedFront>
    );
};

export const BasicsFront = BasicsFrontComponent;
