import React from 'react';

import { createUseStyles } from 'react-jss';

import { Card } from '@wld/ui';

import { styles } from './profile_card_styles';

const useStyles = createUseStyles(styles);

const ProfileCardComponent = ({ data, front: FrontComponent, back: BackComponent, flipped, moreText, variant }) => {
    const classes = useStyles({ variant });

    return (
        <Card
            customClasses={{ container: classes.container }}
            elevation={1}
        >
            {!flipped && <FrontComponent data={data} variant={variant} />}
            {flipped && <BackComponent data={data} />}
            {moreText}
        </Card>
    );
};

export const ProfileCard = ProfileCardComponent;
