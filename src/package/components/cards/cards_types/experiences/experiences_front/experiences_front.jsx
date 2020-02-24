import React, { useCallback, useMemo } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { useCardVariant } from '../../../../commons/profile_card/profile_card_hooks/use_card_variant';

import { styles } from './experiences_front_styles';
import { useCardSide } from '../../../../commons/profile_card/profile_card_hooks/use_card_side';

const useStyles = createUseStyles(styles);

const ExperiencesFrontComponent = ({ data }) => {
    const [variant] = useCardVariant();
    const [side, setSide] = useCardSide();
    const classes = useStyles({ variant });

    const handleButtonClick = useCallback(() => setSide(side === 'front' ? 'back' : 'front'), [side, setSide]);

    const title = useMemo(() => {
        if (!data.work?.[0]) {
            return null;
        }
        return `${data.work[0].position} @${data.work[0].name}`;
    }, [data.work]);

    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer customClasses={{ container: classes.container }}>
                    <div className={classes.textsContainer}>
                        <ProfileCardFrontTypography classes={{ container: classes.mainTypography }}>
                            {title}
                        </ProfileCardFrontTypography>
                    </div>
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            <ProfileCardActions>
                <ProfileCardButton onClick={handleButtonClick}>
                    <FormattedMessage id="Experiences.front.action" defaultMessage="See all experiences" />
                </ProfileCardButton>
            </ProfileCardActions>
        </>
    );
};

export const ExperiencesFront = ExperiencesFrontComponent;
