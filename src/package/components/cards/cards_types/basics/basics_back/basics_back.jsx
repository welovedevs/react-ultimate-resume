import React, { useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { ProfileCardAnimatedBack } from '../../../../commons/profile_card_animated_back/profile_card_animated_back';
import { ProfileCardSectionTitle } from '../../../../commons/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionText } from '../../../../commons/profile_card_section_text/profile_card_section_text';
import { ProfileCardSection } from '../../../../commons/profile_card_section/profile_card_section';

import { styles } from './basics_back_styles';

const useStyles = createUseStyles(styles);

const BasicsBackComponent = ({ data, variant }) => {
    const classes = useStyles({ cardVariant: variant });
    const {
        currentCity: { name: currentCityName },
        remoteWork,
        experienceYears,
        contractType,
        studiesLevel,
        codingYears,
        codingReason
    } = data;
    const sections = useMemo(
        () => ({
            remote: {
                title: <FormattedMessage id="Basics.Back.Location.Title" defaultMessage="Location" />,
                value: (
                    <>
                        <FormattedMessage
                            id="Basics.Back.Location"
                            defaultMessage={'Based in {currentCity}'}
                            values={{ currentCity: currentCityName }}
                        />
                        <br />
                        <RemoteWork remoteWork={remoteWork} />
                    </>
                )
            },
            work: {
                title: <FormattedMessage id="Basics.Back.Work.Title" defaultMessage="Work" />,
                value: (
                    <>
                        <FormattedMessage
                            id="Basics.Back.Work"
                            defaultMessage={'{experienceYears} years of experience'}
                            values={{ experienceYears }}
                        />
                        <br />
                        <FormattedMessage
                            id="Basics.Back.WorkContract"
                            defaultMessage={'Looking for a {contractType} contract'}
                            values={{ contractType }}
                        />
                    </>
                )
            },
            studies: {
                title: <FormattedMessage id="Basics.Back.StudiesLevel.Title" defaultMessage="Training" />,
                value: (
                    <FormattedMessage
                        id="Basics.Back.StudiesLevel"
                        defaultMessage={'{studiesLevel} years of higher education'}
                        values={{ studiesLevel }}
                    />
                )
            },
            codingYears: {
                title: <FormattedMessage id="Basics.Back.CodingYears" defaultMessage="Experience" />,
                value: (
                    <FormattedMessage
                        id="Basics.Back.CodingYears"
                        defaultMessage={'{codingYears} years coding'}
                        values={{ codingYears }}
                    />
                )
            }
        }),
        [currentCityName, remoteWork, experienceYears, contractType, studiesLevel, codingYears, codingReason]
    );

    return (
        <ProfileCardAnimatedBack title="Who ?" cardVariant={variant}>
            {Object.entries(sections).map(([id, { title, value }]) => (
                <ProfileCardSection key={id} customClasses={{ container: classes.section }}>
                    <ProfileCardSectionTitle>{title}</ProfileCardSectionTitle>
                    <ProfileCardSectionText>{value}</ProfileCardSectionText>
                </ProfileCardSection>
            ))}
        </ProfileCardAnimatedBack>
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
