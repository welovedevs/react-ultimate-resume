import React from 'react';

import { createUseStyles } from 'react-jss';

import { BasicsCard } from './cards_types/basics/basics_card';
import { ProjectsCard } from './cards_types/projects/projects_card';

import { styles } from './cards_styles';

const useStyles = createUseStyles(styles);

const CardsComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <ProjectsCard variant={4} />
            <BasicsCard variant={3} />
            <BasicsCard variant={2} />
            <BasicsCard variant={1} />
        </div>
    );
};

export const Cards = CardsComponent;
