import React, { useMemo } from 'react';

import { createUseStyles, useTheme } from 'react-jss';

import { BasicsCard } from './cards_types/basics/basics_card';
import { ProjectsCard } from './cards_types/projects/projects_card';
import { InterestedByCard } from './cards_types/interested_by/interested_by_card';
import { SoundtrackCard } from './cards_types/soundtrack/soundtrack_card';
import { StudiesCard } from './cards_types/studies/studies_card';
import { ExperiencesCard } from './cards_types/experiences/experiences_card';
import { SkillsCard } from './cards_types/skills/skills_card';
import { GifsCard } from './cards_types/gifs/gifs_card';
import { DreamJobCard } from './cards_types/dream_job/dream_job_card';
import { LanguagesCard } from './cards_types/languages/languages_card';

import { getRandomCardVariant } from '../../utils/styles/theme/theme';
import { DEFAULT_CARD_ORDER } from './utils/cards_order';

import { styles } from './cards_styles';
import { useAdditionalNodes } from '../hooks/use_additional_nodes';

const useStyles = createUseStyles(styles);

const CARD_TYPE_MAPPING = {
    basics: BasicsCard,
    projects: ProjectsCard,
    language: LanguagesCard,
    dreamjob: DreamJobCard,
    gifs: GifsCard,
    experiences: ExperiencesCard,
    studies: StudiesCard,
    skills: SkillsCard,
    soundtrack: SoundtrackCard,
    interestedBy: InterestedByCard
};

const CardsComponent = ({ cardsOrder = DEFAULT_CARD_ORDER, side }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [{ before: beforeNode, after: afterNode }] = useAdditionalNodes('cards');
    const cards = useMemo(
        () =>
            cardsOrder
                .map(({ type, variant }, index) => {
                    if (!CARD_TYPE_MAPPING[type]) {
                        return null;
                    }
                    return React.createElement(CARD_TYPE_MAPPING[type], {
                        variant: !Number.isNaN(Number(variant)) ? variant : getRandomCardVariant(theme),
                        key: `card_${type}_${index}`,
                        side
                    });
                })
                .filter(Boolean),
        [cardsOrder, side]
    );
    return (
        <div className={classes.container}>
            {beforeNode}
            {cards}
            {afterNode}
        </div>
    );
};

export const Cards = CardsComponent;
