import React, { useMemo } from 'react';
import { ProfileCardSection } from '../../../../commons/profile_card/profile_card_section/profile_card_section';
import { ProfileCardSectionTitle } from '../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardAnimatedBack } from '../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back';
import { ProfileCardSectionSubtitle } from '../../../../commons/profile_card/profile_card_section_subtitle/profile_card_section_subtitle';
import { ProfileCardSectionText } from '../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';

const Study = ({ study }) => {
    const { endDate, area, studyType, institution } = study;
    const title = institution;
    const body = useMemo(() => {
        const bodyParts = [];
        if (studyType) {
            bodyParts.push(studyType);
            if (area) {
                bodyParts.push(', ');
            }
        }
        if (area) {
            bodyParts.push(area);
        }

        return bodyParts;
    }, [study]);

    const date = useMemo(() => {
        const year = endDate.year();
        if (!Number.isNaN(Number(year))) {
            return year;
        }
        return '';
    }, [endDate]);
    return (
        <ProfileCardSection>
            <ProfileCardSectionTitle>{title}</ProfileCardSectionTitle>
            <ProfileCardSectionSubtitle>{body}</ProfileCardSectionSubtitle>
            {date && <ProfileCardSectionText>{date}</ProfileCardSectionText>}
        </ProfileCardSection>
    );
};
const StudiesBackComponent = ({ data: { education: data } }) => (
    <ProfileCardAnimatedBack title="Studies">
        {data?.map((study, index) => (
            <Study key={`study_${index}_${study.id}`} study={study} />
        ))}
    </ProfileCardAnimatedBack>
);

export const StudiesBack = StudiesBackComponent;
