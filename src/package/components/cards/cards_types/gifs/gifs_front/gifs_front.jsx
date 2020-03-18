import React, { useCallback, useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { GifsSidesCommons } from '../gifs_sides_commons/gifs_sides_commons';

import { useCardSide } from '../../../../commons/profile_card/profile_card_hooks/use_card_side';

import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { SIDES } from '../../../../commons/profile_card/profile_card_side/side';

import { styles } from './gifs_front_styles';

const useStyles = createUseStyles(styles);

const GifsFrontComponent = ({ data }) => {
    const classes = useStyles();
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === SIDES.FRONT ? SIDES.BACK : SIDES.FRONT), [side, setSide]);

    const { gifUrl, name } = data.interests?.[0] ?? {};

    const [isTypographyTruncated, setIsTypographyTruncated] = useState(true);
    const typographyReference = useRef();

    useEffect(() => {
        const element = typographyReference.current;
        if (!element) {
            return;
        }
        if (element.offsetHeight > element.scrollHeight - 1) {
            setIsTypographyTruncated(false);
        }
    }, []);

    return (
        <GifsSidesCommons
            classes={{
                container: classes.container
            }}
            underLayer={gifUrl && (
                <img className={classes.image} src={gifUrl} alt={name} />
            )}
        >
            {!gifUrl && (
                <ProfileCardPaddedFront customClasses={{ container: classes.paddedFront }}>
                    <ProfileCardFrontTypography
                        ref={typographyReference}
                        classes={{
                            container: cn(classes.withoutGifTypography, isTypographyTruncated && classes.truncatedTypography)
                        }}
                    >
                        {name}
                    </ProfileCardFrontTypography>
                </ProfileCardPaddedFront>
            )}
            <ProfileCardActions>
                <ProfileCardButton onClick={handleButtonClick} overrideColor="light">
                    <FormattedMessage id="Gifs.front.action" defaultMessage="See all hobbies" />
                </ProfileCardButton>
            </ProfileCardActions>
        </GifsSidesCommons>
    );
};

export const GifsFront = GifsFrontComponent;
