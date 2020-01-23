import React from 'react';

import { createUseStyles } from 'react-jss';

import { ProfileCardSection } from '../../../../commons/profile_card/profile_card_section/profile_card_section';
import { ProfileCardSectionTitle } from '../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionText } from '../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { ProfileCardAnimatedBack } from '../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back';

import { styles } from './dream_job_back_styles';

const useStyles = createUseStyles(styles);

const DreamJobBackComponent = ({ variant }) => {
    const classes = useStyles();
    return (
        <ProfileCardAnimatedBack title="Dream job" cardVariant={variant}>
            <ProfileCardSection cardVariant={variant}>
                <ProfileCardSectionTitle>Location</ProfileCardSectionTitle>
                <ProfileCardSectionText>
                    Based in Paris
                    <br />
                    Looking for remote work
                </ProfileCardSectionText>
            </ProfileCardSection>
            <ProfileCardSection cardVariant={variant}>
                <ProfileCardSectionTitle>Salary</ProfileCardSectionTitle>
                <ProfileCardSectionText>
                    4 years of experience
                    <br />
                    Looking for freelance jobs
                </ProfileCardSectionText>
            </ProfileCardSection>
            <ProfileCardSection cardVariant={variant}>
                <ProfileCardSectionTitle>Contract</ProfileCardSectionTitle>
                <ProfileCardSectionText>
                    Bac + 5 in front-end engineering
                </ProfileCardSectionText>
            </ProfileCardSection>
            <ProfileCardSection cardVariant={variant}>
                <ProfileCardSectionTitle>Perks</ProfileCardSectionTitle>
                <ProfileCardSectionText>
                    Meal tickets, A challenge, good atmosphere, formations...
                </ProfileCardSectionText>
            </ProfileCardSection>
        </ProfileCardAnimatedBack>
    );
};

export const DreamJobBack = DreamJobBackComponent;
