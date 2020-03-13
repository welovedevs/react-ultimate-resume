import React, { useCallback } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontVector } from '../../../../commons/profile_card/profile_card_front_vector/profile_card_front_vector';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';

import { ReactComponent as SchoolLogo } from '../../../../../assets/icons/school.svg';

import { styles } from './studies_front_styles';
import { useCardSide } from '../../../../commons/profile_card/profile_card_hooks/use_card_side';

const useStyles = createUseStyles(styles);

const StudiesFrontComponent = ({ data: { education: data } }) => {
    const classes = useStyles();
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === 'front' ? 'back' : 'front'), [side, setSide]);

    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer customClasses={{ container: classes.container }}>
                    <ProfileCardFrontVector customClasses={{ container: classes.logo }} vector={SchoolLogo} />
                    <ProfileCardFrontTypography classes={{ container: classes.typography }}>
                        <FormattedMessage
                            id="Studies.title"
                            defaultMessage="I graduated from {schoolName}"
                            values={{ schoolName: data?.[0]?.institution }}
                        />
                    </ProfileCardFrontTypography>
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            <ProfileCardActions>
                <ProfileCardButton onClick={handleButtonClick}>
                    <FormattedMessage id="Studies.front.action" defaultMessage="All my studies" />
                </ProfileCardButton>
            </ProfileCardActions>
        </>
    );
};

export const StudiesFront = StudiesFrontComponent;
