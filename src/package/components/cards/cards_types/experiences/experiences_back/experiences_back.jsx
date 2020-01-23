import React, { useMemo } from 'react';

import { createUseStyles } from 'react-jss';

import { ProfileCardSection } from '../../../../commons/profile_card/profile_card_section/profile_card_section';
import { ProfileCardSectionTitle } from '../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionText } from '../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { ProfileCardAnimatedBack } from '../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back';
import { ProfileCardSectionSubtitle } from '../../../../commons/profile_card/profile_card_section_subtitle/profile_card_section_subtitle';

import { styles } from './experiences_back_styles';

const useStyles = createUseStyles(styles);

const ExperienceContent = ({ experience, variant, classes }) => {
    const { id, name, summary } = experience;
    const dateString = useMemo(() => {
        if (!experience.endDate) {
            return experience.startDate?.year() || '';
        }
        return `${experience.startDate?.year() || ''} - ${experience.endDate.year()}`;
    }, [experience]);

    return (
        <ProfileCardSection key={id} cardVariant={variant}>
            <ProfileCardSectionTitle>{dateString}</ProfileCardSectionTitle>
            <ProfileCardSectionSubtitle customClasses={{ container: classes.subtitle }}>
                {name}
            </ProfileCardSectionSubtitle>
            <ProfileCardSectionText>{summary}</ProfileCardSectionText>
        </ProfileCardSection>
    );
};
const ExperiencesBackComponent = ({ variant, data }) => {
    const classes = useStyles();
    return (
        <ProfileCardAnimatedBack title="Experiences" cardVariant={variant}>
            {data.work?.map(experience => (
                <ExperienceContent
                    key={`work_experience_${experience.id}`}
                    experience={experience}
                    variant={variant}
                    classes={classes}
                />
            ))}
        </ProfileCardAnimatedBack>
    );
};

export const ExperiencesBack = ExperiencesBackComponent;
