import React from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontVector } from '../../../../commons/profile_card/profie_card_front_vector/profile_card_front_vector';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';

import { ReactComponent as SchoolLogo } from '../../../../../assets/icons/dev_only/42.svg';

import { styles } from './studies_front_styles';

const useStyles = createUseStyles(styles);

const StudiesFrontComponent = ({ data: { education: data } }) => {
    const classes = useStyles();
    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer customClasses={{ container: classes.container }}>
                    <ProfileCardFrontVector customClasses={{ container: classes.logo }} vector={SchoolLogo} />
                    <ProfileCardFrontTypography customClasses={{ container: classes.typography }}>
                        <FormattedMessage
                            id="Studies.title"
                            defaultMessage="I gratuated from {schoolName}"
                            values={{ schoolName: data?.[0]?.institution }}
                        />
                    </ProfileCardFrontTypography>
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            <ProfileCardActions>
                <ProfileCardButton>All my studies</ProfileCardButton>
            </ProfileCardActions>
        </>
    );
};

export const StudiesFront = StudiesFrontComponent;
