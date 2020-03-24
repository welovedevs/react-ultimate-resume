import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { GifsSidesCommons } from '../gifs_sides_commons/gifs_sides_commons';

import { useCardSide } from '../../../../hooks/profile_card_hooks/use_card_side';

import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { SIDES } from '../../../../commons/profile_card/profile_card_side/side';

import { styles } from './gifs_front_styles';
import { existsAndNotEmpty } from '../../../utils/exists_and_not_empty';
import { NoDataButton } from '../../../../commons/no_data_button/no_data_button';

const useStyles = createUseStyles(styles);

const GifsFrontComponent = ({ data, handleAddButtonClick }) => {
    const classes = useStyles();
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === SIDES.FRONT ? SIDES.BACK : SIDES.FRONT), [
        side,
        setSide
    ]);

    const { gifUrl, name } = data.interests?.[0] ?? {};

    const hasHobby = useMemo(() => existsAndNotEmpty(data?.interests), [data]);

    return (
        <GifsSidesCommons
            classes={{
                container: classes.container
            }}
            underLayer={gifUrl && <img className={classes.image} src={gifUrl} alt={name} />}
        >
            {!gifUrl && (
                <ProfileCardPaddedFront customClasses={{ container: classes.paddedFront }}>
                    <Content {...{ hasHobby, name, handleAddButtonClick, classes }} />
                </ProfileCardPaddedFront>
            )}
            {hasHobby && (
                <ProfileCardActions>
                    <ProfileCardButton onClick={handleButtonClick} overrideColor="light">
                        <FormattedMessage id="Gifs.front.action" defaultMessage="See all hobbies" />
                    </ProfileCardButton>
                </ProfileCardActions>
            )}
        </GifsSidesCommons>
    );
};

const Content = ({ hasHobby, name, handleAddButtonClick, classes }) => {
    const [isTypographyTruncated, setIsTypographyTruncated] = useState(true);
    const typographyReference = useRef();

    useEffect(() => {
        const element = typographyReference.current;
        if (!element) {
            return;
        }
        if (element?.offsetHeight > element?.scrollHeight - 1) {
            setIsTypographyTruncated(false);
        }
    }, []);

    if (!hasHobby) {
        return (
            <div className={classes.noHobby}>
                <Typography variant="h3" component="h3" customClasses={{ container: classes.noHobbyTypography }}>
                    <FormattedMessage
                        id="Gifs.front.noHobby"
                        defaultMessage="Vous n'avez pas encore ajouté de hobbies !"
                    />
                </Typography>
                <NoDataButton
                    handleAddButtonClick={handleAddButtonClick}
                    classes={{
                        container: classes.addButton
                    }}
                    color="secondary"
                >
                    <FormattedMessage id="Gifs.noHobby.buttonLabel" defaultMessage="Ajouter un hobby" />
                </NoDataButton>
            </div>
        );
    }

    return (
        <ProfileCardFrontTypography
            ref={typographyReference}
            classes={{
                container: cn(classes.withoutGifTypography, isTypographyTruncated && classes.truncatedTypography)
            }}
        >
            {name}
        </ProfileCardFrontTypography>
    );
};

export const GifsFront = memo(GifsFrontComponent);
