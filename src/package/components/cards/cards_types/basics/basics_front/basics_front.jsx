import React, { useCallback } from 'react';

import { FormattedMessage } from 'react-intl';

import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { useCardSide } from '../../../../commons/profile_card/profile_card_hooks/use_card_side';
import { createUseStyles } from 'react-jss';
import { styles } from './basics_front_styles';

const useStyles = createUseStyles(styles);

const BasicsFrontComponent = ({ data }) => {
    const classes = useStyles();
    const [side, setSide] = useCardSide();

    const {
        summary,
        currentCity: { name: currentCityName }
    } = data;
    const handleButtonClick = useCallback(() => setSide(side === 'front' ? 'back' : 'front'), [side, setSide]);

    return (
        <ProfileCardPaddedFront>
            <CenterContentContainer customClasses={{ container: classes.container }}>
                <ProfileCardFrontTypography>{summary}</ProfileCardFrontTypography>
                <ProfileCardFrontTypography level="h4" component="h3" customClasses={{ container: classes.subTitle }}>
                    📍 {currentCityName}
                </ProfileCardFrontTypography>
            </CenterContentContainer>
            <ProfileCardActions>
                <ProfileCardButton onClick={handleButtonClick}>More about me</ProfileCardButton>
            </ProfileCardActions>
        </ProfileCardPaddedFront>
    );
};

export const BasicsFront = BasicsFrontComponent;
