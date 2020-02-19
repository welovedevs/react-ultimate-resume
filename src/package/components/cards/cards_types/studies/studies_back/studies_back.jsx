import React from 'react';

import { FormattedMessage } from 'react-intl';
import { ProfileCardSection } from '../../../../commons/profile_card/profile_card_section/profile_card_section';
import { ProfileCardSectionTitle } from '../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionText } from '../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { ProfileCardAnimatedBack } from '../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back';

const StudiesBackComponent = ({ data: { education: data } }) => (
    <ProfileCardAnimatedBack title="Studies">
        {data?.map(({ endDate, area, studyType, institution, id }, index) => (
            <ProfileCardSection key={`${index}_${id}`}>
                <ProfileCardSectionTitle>{endDate.year()}</ProfileCardSectionTitle>
                <ProfileCardSectionText>
                    <FormattedMessage
                        id="Studies.back.diploma"
                        defaultMessage={'{studyType} in {area}'}
                        values={{ area, studyType }}
                    />
                    <br />
                    {institution}
                </ProfileCardSectionText>
            </ProfileCardSection>
        ))}
    </ProfileCardAnimatedBack>
);

export const StudiesBack = StudiesBackComponent;
