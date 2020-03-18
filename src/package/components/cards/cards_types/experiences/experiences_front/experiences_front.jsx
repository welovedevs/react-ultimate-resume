import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { useCardVariant } from '../../../../commons/profile_card/profile_card_hooks/use_card_variant';
import { useCardSide } from '../../../../commons/profile_card/profile_card_hooks/use_card_side';
import { SIDES } from '../../../../commons/profile_card/profile_card_side/side';

import { styles } from './experiences_front_styles';

const useStyles = createUseStyles(styles);

const ExperiencesFrontComponent = ({ data }) => {
    const [variant] = useCardVariant();
    const [side, setSide] = useCardSide();
    const classes = useStyles({ variant });

    const [isTypographyTruncated, setIsTypographyTruncated] = useState(true);
    const typographyReference = useRef();

    useEffect(() => {
        const element = typographyReference.current;
        if (element.offsetHeight > element.scrollHeight - 1) {
            setIsTypographyTruncated(false);
        }
    }, []);

    const handleButtonClick = useCallback(() => setSide(side === SIDES.FRONT ? SIDES.BACK : SIDES.FRONT), [side, setSide]);

    const title = useMemo(() => {
        const builder = [];
        if (data.work?.[0]?.position) {
            builder.push(data.work?.[0].position);
        }
        if (data.work?.[0]?.name) {
            builder.push(`@${data.work[0].name}`);
        }
        return builder.join(' ');
    }, [data.work]);

    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer customClasses={{ container: classes.container }}>
                    <div className={classes.textsContainer}>
                        <ProfileCardFrontTypography
                            ref={typographyReference}
                            classes={{
                                container: cn(classes.typography, isTypographyTruncated && classes.truncatedTypography)
                            }}
                        >
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
