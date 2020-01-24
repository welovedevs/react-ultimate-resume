import React from 'react';

import { createUseStyles } from 'react-jss';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontVector } from '../../../../commons/profile_card/profie_card_front_vector/profile_card_front_vector';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';

import { ReactComponent as ReactLogo } from '../../../../../assets/icons/dev_only/react.svg';

import { styles } from './skills_front_styles';

const useStyles = createUseStyles(styles);

const SkillsFrontComponent = () => {
    const classes = useStyles();
    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer customClasses={{ container: classes.container }}>
                    <ProfileCardFrontVector
                        customClasses={{ container: classes.logo }}
                        vector={ReactLogo}
                    />
                    <ProfileCardFrontTypography customClasses={{ container: classes.typography }}>
                        I mainly write React stuff
                    </ProfileCardFrontTypography>
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            <ProfileCardActions>
                <ProfileCardButton>
                    More skills
                </ProfileCardButton>
            </ProfileCardActions>
        </>
    );
};

export const SkillsFront = SkillsFrontComponent;
