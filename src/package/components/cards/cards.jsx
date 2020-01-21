import React from 'react';

import { createUseStyles } from 'react-jss';

import { BasicsCard } from './cards_types/basics/basics_card';
import { ProjectsCard } from './cards_types/projects/projects_card';
import { InterestedByCard } from './cards_types/interested_by/interested_by_card';
import { SoundtrackCard } from './cards_types/soundtrack/soundtrack_card';
import { StudiesCard } from './cards_types/studies/studies_card';
import { SkillsCard } from './cards_types/skills/skills_card';

import { styles } from './cards_styles';

const useStyles = createUseStyles(styles);

const CardsComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <StudiesCard variant={3} />
            <SkillsCard variant={0} />
            <SoundtrackCard variant={0} />
            <InterestedByCard variant={2} />
            <ProjectsCard variant={4} />
            <BasicsCard variant={3} />
            <BasicsCard variant={0} />
        </div>
    );
};

export const Cards = CardsComponent;
