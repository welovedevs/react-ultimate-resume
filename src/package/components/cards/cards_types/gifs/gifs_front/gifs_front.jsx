import React from 'react';

import { createUseStyles } from 'react-jss';

import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';

import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { ProfileCardTitle } from '../../../../commons/profile_card/profile_card_title/profile_card_title';

import { styles } from './gifs_front_styles';

const useStyles = createUseStyles(styles);

const GifsFrontComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.background}>
                <img className={classes.backgroundImage} src="https://media.giphy.com/media/d8WjGORtSEWqc/giphy.gif" alt="Old people holding the holy burrito" />
            </div>
            <ProfileCardTitle customClasses={{ container: classes.title, typography: classes.titleTypography }}>
                Hobbies
            </ProfileCardTitle>
            <ProfileCardActions>
                <ProfileCardButton>
                    {'See all hobbies'}
                </ProfileCardButton>
            </ProfileCardActions>
        </div>
    );
};

export const GifsFront = GifsFrontComponent;
