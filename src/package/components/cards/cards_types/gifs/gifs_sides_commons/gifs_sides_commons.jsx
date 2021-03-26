import React from 'react';

import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { ProfileCardTitle } from '../../../../commons/profile_card/profile_card_title/profile_card_title';

import { styles } from './gifs_sides_commons_styles';
import { GifAuthorCredits } from '../../../../commons/gifs/gif_author_credits/gif_author_credits';

const useStyles = createUseStyles(styles);

export const GifsSidesCommons = ({ underLayer, children, gifUser, classes: receivedClasses = {} }) => {
    const classes = useStyles({ classes: receivedClasses });
    return (
        <div className={classes.container}>
            {underLayer && (
                <>
                    <div className={classes.underLayerContainer}>{underLayer}</div>
                    <div className={classes.darkenLayer} />
                </>
            )}
            <ProfileCardTitle
                overrideColor="light"
                classes={{
                    container: classes.title
                }}
            >
                <FormattedMessage id="Hobbies.side.commons" defaultMessage="Hobbies" />
            </ProfileCardTitle>
            {children}
            {gifUser && <GifAuthorCredits classes={{ container: classes.credits }} user={gifUser} />}
        </div>
    );
};
