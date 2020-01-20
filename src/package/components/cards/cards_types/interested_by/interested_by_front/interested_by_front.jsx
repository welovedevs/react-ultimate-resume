import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { styles } from './interested_by_front_styles';

const useStyles = createUseStyles(styles);

const InterestedByFrontComponent = ({ customClasses = {} }) => {
    const classes = useStyles();
    return (
        <ProfileCardPaddedFront customClasses={{ container: cn(classes.container, customClasses.container) }}>
            <CenterContentContainer>
                <ProfileCardFrontTypography customClasses={{ container: classes.typography }}>
                    I am interested by these technologies: Vue.js, Angular, Blockchain Testnet and NPM
                </ProfileCardFrontTypography>
            </CenterContentContainer>
        </ProfileCardPaddedFront>
    );
};

export const InterestedByFront = InterestedByFrontComponent;
