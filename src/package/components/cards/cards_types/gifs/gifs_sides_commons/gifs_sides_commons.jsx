import React from 'react';

import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { ProfileCardTitle } from '../../../../commons/profile_card/profile_card_title/profile_card_title';

import { styles } from './gifs_sides_commons_styles';

const useStyles = createUseStyles(styles);

const GifsSidesCommonsComponent = ({ underLayer, children, classes: receivedClasses = {} }) => {
    const classes = useStyles();
    return (
        <div className={cn(classes.container, receivedClasses.container)}>
            <div className={classes.underLayerContainer}>{underLayer}</div>
            <div className={classes.darkenLayer} />
            <ProfileCardTitle
                overrideColor="light"
                customClasses={{
                    container: classes.title
                }}
            >
                <FormattedMessage id="Hobbies.side.commons" defaultMessage="Hobbies" />
            </ProfileCardTitle>
            {children}
        </div>
    );
};

export const GifsSidesCommons = GifsSidesCommonsComponent;
