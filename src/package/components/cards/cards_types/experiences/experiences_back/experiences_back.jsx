import React from 'react';

import { createUseStyles } from 'react-jss';

import { ProfileCardSection } from '../../../../commons/profile_card/profile_card_section/profile_card_section';
import { ProfileCardSectionTitle } from '../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionText } from '../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { ProfileCardAnimatedBack } from '../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back';
import { ProfileCardSectionSubtitle } from '../../../../commons/profile_card/profile_card_section_subtitle/profile_card_section_subtitle';

import { styles } from './experiences_back_styles';

const useStyles = createUseStyles(styles);

const SECTIONS = Object.freeze({
    first: {
        start: 2016,
        end: 2019,
        description: 'Implemented websites, mobile applications, and landing pages from concept through deployment. Assessed UX and UI designs for technical feasibility.',
        company: 'WeLoveDevs.com'
    },
    second: {
        start: 2013,
        end: 2014,
        description: 'Sitting quietly watching someone build a game that later killed the company.',
        company: 'Adictiz'
    }
});

const ExperiencesBackComponent = ({ variant }) => {
    const classes = useStyles();
    return (
        <ProfileCardAnimatedBack
            title="Experiences"
            cardVariant={variant}
        >
            {Object.entries(SECTIONS).map(([id, { start, end, description, company }]) => (
                <ProfileCardSection key={id} cardVariant={variant}>
                    <ProfileCardSectionTitle>
                        {`${start} - ${end}`}
                    </ProfileCardSectionTitle>
                    <ProfileCardSectionSubtitle customClasses={{ container: classes.subtitle }}>
                        {company}
                    </ProfileCardSectionSubtitle>
                    <ProfileCardSectionText>
                        {description}
                    </ProfileCardSectionText>
                </ProfileCardSection>
            ))}
        </ProfileCardAnimatedBack>
    );
};

export const ExperiencesBack = ExperiencesBackComponent;
