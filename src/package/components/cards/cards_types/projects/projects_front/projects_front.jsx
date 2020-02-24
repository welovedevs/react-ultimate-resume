import React, { useCallback } from 'react';

import { Twemoji } from 'react-emoji-render';
import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';

import { styles } from './projects_front_styles';
import { useCardSide } from '../../../../commons/profile_card/profile_card_hooks/use_card_side';

const useStyles = createUseStyles(styles);

const ProjectsFrontComponent = ({ data }) => {
    const classes = useStyles();
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === 'front' ? 'back' : 'front'), [side, setSide]);

    return (
        <>
            <div className={classes.background}>
                <img
                    className={classes.backgroundImage}
                    src="https://source.unsplash.com/random/750x400"
                    alt="Project Background"
                />
            </div>
            <div className={classes.content}>
                <Typography variant="h2" component="h2" customClasses={{ container: classes.text }}>
                    <FormattedMessage
                        id="Projects.front.title"
                        defaultMessage="My <emoji>♥️</emoji> project : "
                        values={{
                            emoji: value => <Twemoji svg text={value} />
                        }}
                    />

                    {data.projects?.[0]?.name}
                </Typography>
            </div>
            <ProfileCardActions>
                <ProfileCardButton onClick={handleButtonClick}>
                    <FormattedMessage
                        id="Projects.front.action"
                        defaultMessage="See {count} project{count, plural, one {} other {s}}"
                        values={{
                            count: data.projects?.length
                        }}
                    />
                </ProfileCardButton>
            </ProfileCardActions>
        </>
    );
};

export const ProjectsFront = ProjectsFrontComponent;
