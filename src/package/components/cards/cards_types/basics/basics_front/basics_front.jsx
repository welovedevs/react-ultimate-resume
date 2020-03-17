import React, { useCallback, useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { ReactComponent as LocationIcon } from '../../../../../assets/icons/location.svg';

import { useCardSide } from '../../../../commons/profile_card/profile_card_hooks/use_card_side';
import { useCardVariant } from '../../../../commons/profile_card/profile_card_hooks/use_card_variant';

import { styles } from './basics_front_styles';

const useStyles = createUseStyles(styles);

const BasicsFrontComponent = ({ data }) => {
    const [variant] = useCardVariant();
    console.log({ variant });
    const classes = useStyles({ variant });

    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === 'front' ? 'back' : 'front'), [side, setSide]);

    const [isMainTypographyTruncated, setIsMainTypographyTruncated] = useState(true);
    const mainTypographyReference = useRef();

    useEffect(() => {
        const element = mainTypographyReference.current;
        if (element.offsetHeight > element.scrollHeight - 1) {
            setIsMainTypographyTruncated(false);
        }
    }, []);

    const currentCityName = data?.currentCity?.name;

    return (
        <ProfileCardPaddedFront>
            <CenterContentContainer customClasses={{ container: classes.container }}>
                <div className={classes.texts}>
                    <ProfileCardFrontTypography
                        component="div"
                        ref={mainTypographyReference}
                        classes={{
                            container: cn(classes.mainTypography,
                                isMainTypographyTruncated && classes.truncatedMainTypography)
                        }}
                    >
                        {data.summary}
                    </ProfileCardFrontTypography>
                    {currentCityName && (
                        <ProfileCardFrontTypography variant="h4" component="h3" classes={{ container: classes.location }}>
                            <LocationIcon className={classes.locationIcon} />
                            {data?.currentCity?.name}
                        </ProfileCardFrontTypography>
                    )}
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
