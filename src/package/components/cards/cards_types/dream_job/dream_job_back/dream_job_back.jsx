import React from 'react';

import { ProfileCardSection } from '../../../../commons/profile_card/profile_card_section/profile_card_section';
import { ProfileCardSectionTitle } from '../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionText } from '../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { ProfileCardAnimatedBack } from '../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back';

const DreamJobBackComponent = () => {
    return (
        <ProfileCardAnimatedBack title="Dream job">
            <ProfileCardSection>
                <ProfileCardSectionTitle>Location</ProfileCardSectionTitle>
                <ProfileCardSectionText>
                    Based in Paris
                    <br />
                    Looking for remote work
                </ProfileCardSectionText>
            </ProfileCardSection>
            <ProfileCardSection>
                <ProfileCardSectionTitle>Salary</ProfileCardSectionTitle>
                <ProfileCardSectionText>
                    4 years of experience
                    <br />
                    Looking for freelance jobs
                </ProfileCardSectionText>
            </ProfileCardSection>
            <ProfileCardSection>
                <ProfileCardSectionTitle>Contract</ProfileCardSectionTitle>
                <ProfileCardSectionText>
                    Bac + 5 in front-end engineering
                </ProfileCardSectionText>
            </ProfileCardSection>
            <ProfileCardSection>
                <ProfileCardSectionTitle>Perks</ProfileCardSectionTitle>
                <ProfileCardSectionText>
                    Meal tickets, A challenge, good atmosphere, formations...
                </ProfileCardSectionText>
            </ProfileCardSection>
        </ProfileCardAnimatedBack>
    );
};

export const DreamJobBack = DreamJobBackComponent;
