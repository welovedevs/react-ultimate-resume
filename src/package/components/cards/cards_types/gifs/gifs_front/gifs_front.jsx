import React, { useCallback, useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { GifsSidesCommons } from '../gifs_sides_commons/gifs_sides_commons';

import { useCardSide } from '../../../../commons/profile_card/profile_card_hooks/use_card_side';

import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { styles } from './gifs_front_styles';

const useStyles = createUseStyles(styles);

const GifsFrontComponent = ({ data }) => {
    const classes = useStyles();
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === 'front' ? 'back' : 'front'), [side, setSide]);

    const { gifUrl, name } = data.interests?.[0] ?? {};

    const [isTypographyTruncated, setIsTypographyTruncated] = useState(true);
    const typographyReference = useRef();

    useEffect(() => {
        const element = typographyReference.current;
        if (element.offsetHeight > element.scrollHeight - 1) {
            setIsTypographyTruncated(false);
        }
    }, [typographyReference.current]);

    return (
        <GifsSidesCommons
            underLayer={gifUrl && (
                <img className={classes.image} src={gifUrl} alt={name} />
            )}
        >
            {!gifUrl && (
                <ProfileCardFrontTypography
                    ref={typographyReference}
                    classes={{
                        container: cn(classes.withoutGifTypography, isTypographyTruncated && classes.truncatedTypography)
                    }}
                >
                    {name}
                </ProfileCardFrontTypography>
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
