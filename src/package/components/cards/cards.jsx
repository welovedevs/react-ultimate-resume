import React from 'react';

import { createUseStyles } from 'react-jss';

import { BasicsCard } from './cards_types/basics/basics_card';
import { ProjectsCard } from './cards_types/projects/projects_card';
import { InterestedByCard } from './cards_types/interested_by/interested_by_card';
import { SoundtrackCard } from './cards_types/soundtrack/soundtrack_card';

import { styles } from './cards_styles';

const useStyles = createUseStyles(styles);

const CardsComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <SoundtrackCard variant={0} />
            <BasicsCard variant={3} />
            <InterestedByCard variant={2} />
            <ProjectsCard variant={4} />
            <BasicsCard variant={0} />
        </div>
    );
};

export const Cards = CardsComponent;
