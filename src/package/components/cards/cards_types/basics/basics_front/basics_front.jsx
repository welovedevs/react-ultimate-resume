import React, { useCallback, useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import { Twemoji } from 'react-emoji-render';
import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { useCardSide } from '../../../../commons/profile_card/profile_card_hooks/use_card_side';

import { styles } from './basics_front_styles';

const useStyles = createUseStyles(styles);

const BasicsFrontComponent = ({ data }) => {
    const classes = useStyles();
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === 'front' ? 'back' : 'front'), [side, setSide]);

    const [isMainTypographyTruncated, setIsMainTypographyTruncated] = useState(false);
    const mainTypographyReference = useRef();

    useEffect(() => {
        const element = mainTypographyReference.current;
        if (element.offsetWidth < element.scrollWidth) {
            setIsMainTypographyTruncated(true);
        }
    }, [mainTypographyReference.current]);

    console.log({ mainTypographyReference, isMainTypographyTruncated });


    return (
        <ProfileCardPaddedFront>
            <CenterContentContainer customClasses={{ container: classes.container }}>
                <div className={classes.texts}>
                    <ProfileCardFrontTypography
                        ref={mainTypographyReference}
                        classes={{
                            container: cn(classes.mainTypography,
                                isMainTypographyTruncated && classes.truncatedMainTypography)
                        }}
                    >
                        {data.summary}
                    </ProfileCardFrontTypography>
                    <ProfileCardFrontTypography variant="h4" component="h3" classes={{ container: classes.location }}>
                        <Twemoji svg text="📍" />
                        {data?.currentCity?.name}
                    </ProfileCardFrontTypography>
                </div>
            </CenterContentContainer>
            <ProfileCardActions>
                <ProfileCardButton onClick={handleButtonClick}>
                    <FormattedMessage id="Basics.front.action" defaultMessage="More about me" />
                </ProfileCardButton>
            </ProfileCardActions>
        </ProfileCardPaddedFront>
    );
};

export const BasicsFront = BasicsFrontComponent;
