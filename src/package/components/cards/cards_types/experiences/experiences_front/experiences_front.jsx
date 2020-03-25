import React, { Fragment, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

import { Typography } from '@wld/ui';
import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { useCardVariant } from '../../../../hooks/profile_card_hooks/use_card_variant';
import { useCardSide } from '../../../../hooks/profile_card_hooks/use_card_side';
import { SIDES } from '../../../../commons/profile_card/profile_card_side/side';

import { styles } from './experiences_front_styles';
import { existsAndNotEmpty } from '../../../utils/exists_and_not_empty';
import { NoDataButton } from '../../../../commons/no_data_button/no_data_button';

const useStyles = createUseStyles(styles);

const ExperiencesFrontComponent = ({ data, handleAddButtonClick }) => {
    const [variant] = useCardVariant();
    const [side, setSide] = useCardSide();
    const classes = useStyles({ variant });

    const hasWork = useMemo(() => existsAndNotEmpty(data?.work), [data]);

    const handleButtonClick = useCallback(() => setSide(side === SIDES.FRONT ? SIDES.BACK : SIDES.FRONT), [
        side,
        setSide
    ]);

    const title = useMemo(() => {
        const builder = [];
        const firstExperience = data.work?.[0];
        if (firstExperience?.position) {
            builder.push(firstExperience.position);
        }
        if (builder.length) {
            builder.push(<br />);
        }
        if (firstExperience?.name) {
            builder.push(`@${firstExperience.name}`);
        } else if (firstExperience?.location) {
            builder.push(`@${firstExperience.location}`);
        } else if (firstExperience?.stillEmployed) {
            if (moment.isMoment(firstExperience?.startDate)) {
                builder.push(
                    <FormattedMessage
                        id="Experience.front.title.since"
                        defaultMessage="Since {year}"
                        values={{
                            year: firstExperience.startDate.year()
                        }}
                    />
                );
            } else {
                builder.push(
                    <FormattedMessage id="Experience.front.title.stillEmployed" defaultMessage="Still employed" />
                );
            }
        } else if (!['endDate', 'startDate'].some(key => !moment.isMoment(firstExperience?.[key]))) {
            const { startDate } = firstExperience;
            const { endDate } = firstExperience;
            const startYear = startDate.year();
            const endYear = endDate.year();
            const isSameYear = startYear === endYear;
            builder.push(
                <FormattedMessage
                    id="Experience.front.title.fromTo"
                    defaultMessage="From {start} to {end}"
                    values={{
                        start: isSameYear ? startDate.format('MMMM') : startYear,
                        end: isSameYear ? `${endDate.format('MMMM')} ${endYear}` : endYear
                    }}
                />
            );
        }
        return builder.map((value, index) => (
            <Fragment key={`builder_part_${index}`}>
                {value}
            </Fragment>
        ));
    }, [data.work]);

    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer customClasses={{ container: classes.container }}>
                    <Content {...{ hasWork, title, handleAddButtonClick, classes }} />
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            {hasWork && (
                <ProfileCardActions>
                    <ProfileCardButton onClick={handleButtonClick}>
                        <FormattedMessage id="Experiences.front.action" defaultMessage="See all experiences" />
                    </ProfileCardButton>
                </ProfileCardActions>
            )}
        </>
    );
};

const Content = ({ hasWork, title, handleAddButtonClick, classes }) => {
    const [isTypographyTruncated, setIsTypographyTruncated] = useState(true);
    const typographyReference = useRef();

    useEffect(() => {
        const element = typographyReference.current;
        setIsTypographyTruncated(false);
        if (element?.offsetHeight > element?.scrollHeight - 1) {
            setIsTypographyTruncated(false);
        }
    }, []);
    if (hasWork) {
        return (
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
        );
    }
    return (
        <div className={classes.noWork}>
            <Typography variant="h3" component="h3" customClasses={{ container: classes.noWorkTypography }}>
                <FormattedMessage
                    id="Experiences.front.noWork"
                    defaultMessage="Vous n'avez pas encore ajouté d'expériences !"
                />
            </Typography>
            <NoDataButton
                handleAddButtonClick={handleAddButtonClick}
                classes={{
                    container: classes.addButton
                }}
            >
                <FormattedMessage id="Experiences.noWork.buttonLabel" defaultMessage="Ajouter une expérience" />
            </NoDataButton>
        </div>
    );
};

export const ExperiencesFront = memo(ExperiencesFrontComponent);
