import React, { useCallback, useEffect, useRef, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { styles } from './interested_by_front_styles';
import { useCardSide } from '../../../../commons/profile_card/profile_card_hooks/use_card_side';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { SIDES } from '../../../../commons/profile_card/profile_card_side/side';

const useStyles = createUseStyles(styles);

const InterestedByFrontComponent = ({
    data: { interestedBy },
    profileCardFrontTypographyProps,
    dismissButton,
    dismissTitle,
    customClasses = {}
}) => {
    const classes = useStyles();
    const [side, setSide] = useCardSide();

    const [isTypographyTruncated, setIsTypographyTruncated] = useState(true);
    const typographyReference = useRef();

    useEffect(() => {
        const element = typographyReference.current;
        if (element.offsetHeight > element.scrollHeight - 1) {
            setIsTypographyTruncated(false);
        }
    }, [typographyReference.current]);

    const handleButtonClick = useCallback(() => setSide(side === SIDES.FRONT ? SIDES.BACK : SIDES.FRONT), [side, setSide]);

    return (
        <>
            <ProfileCardPaddedFront customClasses={{ container: cn(classes.container, customClasses.container) }}>
                <CenterContentContainer>
                    <ProfileCardFrontTypography
                        ref={typographyReference}
                        classes={{
                            container: cn(classes.typography, customClasses.typography)
                        }}
                        {...profileCardFrontTypographyProps}
                    >
                        {!dismissTitle && (
                            <FormattedMessage
                                id="InterestedBy.front.content"
                                defaultMessage="Interested by:"
                            />
                        )}
                        <div className={classes.interestedByValue}>
                            {interestedBy}
                        </div>
                    </ProfileCardFrontTypography>
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            {isTypographyTruncated && !dismissButton && (
                <ProfileCardActions>
                    <ProfileCardButton onClick={handleButtonClick}>
                        <FormattedMessage id="InterestedBy.front.action" defaultMessage="See all" />
                    </ProfileCardButton>
                </ProfileCardActions>
            )}
        </>
    );
};

export const InterestedByFront = InterestedByFrontComponent;
