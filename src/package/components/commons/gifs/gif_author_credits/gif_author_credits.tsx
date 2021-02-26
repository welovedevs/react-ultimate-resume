import React, { useCallback } from 'react';

import { Classes, styles } from './gif_author_credits_styles';
import { GiphyAuthor, GiphySearchResult } from '../../../hooks/giphy/types';
import { ReactComponent as Verified } from '../../../../assets/icons/verified.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@welovedevs/ui';

const useStyles = makeStyles(styles);

interface Props {
    classes?: Classes;
    user: GiphyAuthor;
}

export const GifAuthorCredits: React.FC<Props> = ({ classes: receivedClasses = {}, user }) => {
    const classes = useStyles({ classes: receivedClasses });

    const clickTrap = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
    }, []);
    return (
        <a className={classes.container} target="_blank" onClick={clickTrap} href={user.profileUrl}>
            {user.profileAvatarUrl && <img className={classes.img} src={user.profileAvatarUrl} />}
            <Typography color="light" classes={{ container: classes.typography }}>
                {user.name}
            </Typography>
            {user.isVerified && <Verified className={classes.logo} />}
        </a>
    );
};
