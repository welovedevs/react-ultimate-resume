import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { ReactComponent as LocationIcon } from '../../../../../assets/icons/location.svg';

import { useCardSide } from '../../../../hooks/profile_card_hooks/use_card_side';
import { useCardVariant } from '../../../../hooks/profile_card_hooks/use_card_variant';
import { SIDES } from '../../../../commons/profile_card/profile_card_side/side';

import { styles } from './basics_front_styles';
import { NoDataButton } from '../../../../commons/no_data_button/no_data_button';
import { useMode } from '../../../../hooks/use_mode';

const useStyles = createUseStyles(styles);

const BasicsFrontComponent = ({ data, handleAddButtonClick }) => {
    const [mode] = useMode();
    const [variant] = useCardVariant();

    const classes = useStyles({ variant });

    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === SIDES.FRONT ? SIDES.BACK : SIDES.FRONT), [
        side,
        setSide
    ]);

    const [isMainTypographyTruncated, setIsMainTypographyTruncated] = useState(true);
    const mainTypographyReference = useRef();

    useEffect(() => {
        const element = mainTypographyReference.current;
        if (element?.offsetHeight > element?.scrollHeight - 1) {
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
                            container: cn(
                                classes.mainTypography,
                                isMainTypographyTruncated && classes.truncatedMainTypography
                            )
                        }}
                    >
                        {data.summary}
                    </ProfileCardFrontTypography>
                    {currentCityName && (
                        <ProfileCardFrontTypography
                            variant="h4"
                            component="h3"
                            classes={{ container: classes.location }}
                        >
                            <LocationIcon className={classes.locationIcon} />
                            {currentCityName}
                        </ProfileCardFrontTypography>
                    )}
                </div>
                {!data?.personalDescription && mode === 'edit' && (
                    <NoDataButton
                        handleAddButtonClick={handleAddButtonClick}
                        classes={{
                            container: classes.addButton
                        }}
                        color="secondary"
                    >
                        <FormattedMessage
                            id="Basics.noDescription.buttonLabel"
                            defaultMessage="Ajouter une description"
                        />
                    </NoDataButton>
                )}
            </CenterContentContainer>
            <ProfileCardActions>
                <ProfileCardButton onClick={handleButtonClick}>
                    <FormattedMessage id="Basics.front.action" defaultMessage="More about me" />
                </ProfileCardButton>
            </ProfileCardActions>
        </ProfileCardPaddedFront>
    );
};

export const BasicsFront = memo(BasicsFrontComponent);
