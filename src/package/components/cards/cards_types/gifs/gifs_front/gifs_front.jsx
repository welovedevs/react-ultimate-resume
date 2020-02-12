import React from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';

import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { GifsSidesCommons } from '../gifs_sides_commons/gifs_sides_commons';

import { styles } from './gifs_front_styles';

const useStyles = createUseStyles(styles);

const GifsFrontComponent = ({ data }) => {
    const classes = useStyles();
    return (
        <GifsSidesCommons
            underLayer={
                <img className={classes.image} src={data.interests?.[0]?.gifUrl} alt={data.interests?.[0]?.name} />
            }
        >
            <ProfileCardActions>
                <ProfileCardButton overrideColor="light">
                    <FormattedMessage id="Gifs.front.action" defaultMessage="See all hobbies" />
                </ProfileCardButton>
            </ProfileCardActions>
        </GifsSidesCommons>
    );
};

export const GifsFront = GifsFrontComponent;
