import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Twemoji } from 'react-emoji-render';

import { TextSection } from '../../../../commons/sections/text_section';
import { ProfileCardTitle } from '../../../../commons/profile_card_title/profile_card_title';
import { ProfileCardContent } from '../../../../commons/profile_card_content/profile_card_content';

const BasicsBackComponent = ({ data, variant }) => {
    const { currentCity, remoteWork, experienceYears, contractType, studiesLevel, codingYears, codingReason } = data;
    return (
        <>
            <ProfileCardTitle cardVariant={variant}>
                Who?
            </ProfileCardTitle>
            <ProfileCardContent>
            <TextSection icon={<Twemoji svg text="📍" />}>
                <FormattedMessage
                    id="Basics.Back.Location"
                    defaultMessage={'based in {currentCity}'}
                    values={{ currentCity }}
                />
                <div>
                    <RemoteWork remoteWork={remoteWork} />
                </div>
            </TextSection>
            <TextSection icon={<Twemoji svg text="💼" />}>
                <FormattedMessage
                    id="Basics.Back.Experience"
                    defaultMessage={'{experienceYears} years of experience'}
                    values={{ experienceYears }}
                />
                <FormattedMessage
                    id="Basics.Back.ContractType"
                    defaultMessage={'Looking for a {contractType} contract'}
                    values={{ contractType }}
                />
            </TextSection>
            <TextSection icon={<Twemoji svg text="🎓" />}>
                <FormattedMessage
                    id="Basics.Back.StudiesLevel"
                    defaultMessage={'{studiesLevel} years of higher education'}
                    values={{ studiesLevel }}
                />
            </TextSection>
            <TextSection icon={<Twemoji svg text="💻" />}>
                <FormattedMessage
                    id="Basics.Back.CodingYears"
                    defaultMessage={'{codingYears} years coding'}
                    values={{ codingYears }}
                />
            </TextSection>
            <TextSection icon={<Twemoji svg text="💙" />}>{codingReason}</TextSection>
            </ProfileCardContent>
        </>
    );
};

const RemoteWork = ({ remoteWork }) => {
    if (!remoteWork) {
        return null;
    }
    if (remoteWork === 'NEVER') {
        return <FormattedMessage id="Basics.Back.Location" defaultMessage="Not looking for remote work" />;
    }
    return <FormattedMessage id="Basics.Back.Location" defaultMessage="Looking for remote work" />;
};

export const BasicsBack = BasicsBackComponent;
