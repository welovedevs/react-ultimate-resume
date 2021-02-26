import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Typography } from '@welovedevs/ui';
import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { styles } from './interested_by_front_styles';
import { useCardSide } from '../../../../hooks/profile_card_hooks/use_card_side';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { NoDataButton } from '../../../../commons/no_data_button/no_data_button';
import { SIDES } from '../../../../commons/profile_card/profile_card_side/side';

const useStyles = createUseStyles(styles);

const InterestedByFrontComponent = ({
    data: { interestedBy },
    dismissButton,
    handleAddButtonClick,
    overrideColor,
    classes: receivedClasses = {}
}) => {
    const classes = useStyles({ overrideColor });
    const [side, setSide] = useCardSide();

    const [isTypographyTruncated, setIsTypographyTruncated] = useState(true);

    const handleButtonClick = useCallback(() => setSide(side === SIDES.FRONT ? SIDES.BACK : SIDES.FRONT), [
        side,
        setSide
    ]);

    return (
        <>
            <ProfileCardPaddedFront classes={{ container: cn(classes.container, receivedClasses.container) }}>
                <CenterContentContainer>
                    <Content
                        {...{
                            interestedBy,
                            setIsTypographyTruncated,
                            handleAddButtonClick,
                            overrideColor,
                            classes,
                            receivedClasses
                        }}
                    />
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            {isTypographyTruncated && !dismissButton && interestedBy && (
                <ProfileCardActions>
                    <ProfileCardButton onClick={handleButtonClick}>
                        <FormattedMessage id="InterestedBy.front.action" defaultMessage="See all" />
                    </ProfileCardButton>
                </ProfileCardActions>
            )}
        </>
    );
};

const Content = ({
    interestedBy,
    setIsTypographyTruncated,
    handleAddButtonClick,
    overrideColor,
    classes,
    receivedClasses
}) => {
    const typographyReference = useRef();

    useEffect(() => {
        const element = typographyReference.current;
        if (element?.offsetHeight > element?.scrollHeight - 1) {
            setIsTypographyTruncated(false);
        }
    }, [typographyReference.current]);

    if (!interestedBy) {
        return (
            <div className={classes.noInterested}>
                <Typography variant="h3" component="h3" classes={{ container: classes.noInterestedTypography }}>
                    <FormattedMessage
                        id="InterestedBy.front.noInterested"
                        defaultMessage="Vous n'avez pas encore ajouté de techno qui vous intéresse !"
                    />
                </Typography>
                <NoDataButton
                    handleAddButtonClick={handleAddButtonClick}
                    classes={{
                        container: classes.addButton
                    }}
                >
                    <FormattedMessage id="InterestedBy.noInterested.buttonLabel" defaultMessage="Ajouter" />
                </NoDataButton>
            </div>
        );
    }
    return (
        <ProfileCardFrontTypography
            ref={typographyReference}
            classes={{
                container: cn(classes.typography, receivedClasses.typography)
            }}
            overrideColor={overrideColor}
        >
            <FormattedMessage id="InterestedBy.front.content" defaultMessage="Interested by:" />
            <div className={classes.interestedByValue}>{interestedBy}</div>
        </ProfileCardFrontTypography>
    );
};

export const InterestedByFront = memo(InterestedByFrontComponent);
