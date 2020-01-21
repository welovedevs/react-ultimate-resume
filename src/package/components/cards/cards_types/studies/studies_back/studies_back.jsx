import React from 'react';

import { createUseStyles } from 'react-jss';

import { ProfileCardSection } from '../../../../commons/profile_card/profile_card_section/profile_card_section';
import { ProfileCardSectionTitle } from '../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionText } from '../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { ProfileCardAnimatedBack } from '../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back';

import { styles } from './studies_back_styles';

const useStyles = createUseStyles(styles);

const SECTIONS = Object.freeze({
    first: {
        start: 2018,
        end: 2019,
        name: 'Chef de projet Web',
        school: 'Efficom, Lille'
    },
    second: {
        start: 2017,
        end: 2018,
        name: 'BTS SIO - Alternance',
        school: 'Lycée Gaston Berger, Lille'
    },
    third: {
        start: 2016,
        end: 2017,
        name: 'BTS SIO - Initial',
        school: 'Lycée Dampierre, Valenciennes'
    }
});

const StudiesBackComponent = ({ variant }) => {
    const classes = useStyles();
    return (
        <ProfileCardAnimatedBack
            title="Studies"
            cardVariant={variant}
        >
            {Object.entries(SECTIONS).map(([id, { start, end, name, school }]) => (
                <ProfileCardSection key={id} cardVariant={variant}>
                    <ProfileCardSectionTitle>
                        {`${start} - ${end}`}
                    </ProfileCardSectionTitle>
                    <ProfileCardSectionText>
                        {name}
                        <br />
                        {school}
                    </ProfileCardSectionText>
                </ProfileCardSection>
            ))}
        </ProfileCardAnimatedBack>
    );
};

export const StudiesBack = StudiesBackComponent;
