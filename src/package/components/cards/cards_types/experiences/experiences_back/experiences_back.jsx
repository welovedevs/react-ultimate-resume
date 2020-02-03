import React, { useMemo } from 'react';

import { createUseStyles } from 'react-jss';

import { ProfileCardSection } from '../../../../commons/profile_card/profile_card_section/profile_card_section';
import { ProfileCardSectionTitle } from '../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionText } from '../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { ProfileCardAnimatedBack } from '../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back';
import { ProfileCardSectionSubtitle } from '../../../../commons/profile_card/profile_card_section_subtitle/profile_card_section_subtitle';

import { styles } from './experiences_back_styles';
import { useIntl } from 'react-intl';
import { translations } from './experiences_translations';

const useStyles = createUseStyles(styles);

const ExperienceContent = ({ experience, variant, classes }) => {
    const { formatMessage } = useIntl();
    const { id, name, summary, place } = experience;
    const dateString = useMemo(() => {
        if (!experience.endDate) {
            return formatMessage(translations.since, { year: experience.startDate?.year() || '' });
        }
        return `${experience.startDate?.year() || ''} - ${experience.endDate.year()}`;
    }, [experience]);

    const title = useMemo(() => {
        if (!place?.name) {
            return title;
        }
        return `${name} - ${place.name}`;
    }, [experience]);
    return (
        <ProfileCardSection key={id} cardVariant={variant}>
            <ProfileCardSectionTitle>{dateString}</ProfileCardSectionTitle>
            <ProfileCardSectionSubtitle customClasses={{ container: classes.subtitle }}>
                {title}
            </ProfileCardSectionSubtitle>
            <ProfileCardSectionText>{summary}</ProfileCardSectionText>
        </ProfileCardSection>
    );
};

const ExperiencesBackComponent = ({ data }) => {
    const classes = useStyles();
    return (
        <ProfileCardAnimatedBack title="Experiences">
            {data.work?.map(experience => (
                <ExperienceContent key={`work_experience_${experience.id}`} experience={experience} classes={classes}/>
            ))}
        </ProfileCardAnimatedBack>
    );
};

export const ExperiencesBack = ExperiencesBackComponent;
