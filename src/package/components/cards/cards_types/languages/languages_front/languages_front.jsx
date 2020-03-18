import React, { useCallback } from 'react';

import { createUseStyles } from 'react-jss';

import { FormattedMessage } from 'react-intl';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { SIDES } from '../../../../commons/profile_card/profile_card_side/side';

import { styles } from './languages_front_styles';
import { useCardSide } from '../../../../commons/profile_card/profile_card_hooks/use_card_side';

const useStyles = createUseStyles(styles);

const LanguagesFrontComponent = ({ data }) => {
    const classes = useStyles();
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === SIDES.FRONT ? SIDES.BACK : SIDES.FRONT), [side, setSide]);

    const languagesNode = (
        <>
            {data.languages?.[0]?.language}
            <br />
            {data.languages?.[1]?.language}
            <br />
            {data.languages?.[2]?.language}
        </>
    );
    return (
        <>
            <CenterContentContainer>
                <ProfileCardFrontTypography classes={{ container: classes.typography }}>
                    <FormattedMessage
                        id="Languages.front.content"
                        defaultMessage="I speak {languagesNode}"
                        values={{ languagesNode }}
                    />
                </ProfileCardFrontTypography>
            </CenterContentContainer>
            <ProfileCardActions>
                <ProfileCardButton onClick={handleButtonClick}>
                    <FormattedMessage id="Languages.front.action" defaultMessage="Languages level" />
                </ProfileCardButton>
            </ProfileCardActions>
        </>
    );
};

export const LanguagesFront = LanguagesFrontComponent;
