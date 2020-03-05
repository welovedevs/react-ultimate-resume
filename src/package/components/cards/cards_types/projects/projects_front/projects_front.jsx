import React, { useCallback, useMemo } from 'react';

import { Twemoji } from 'react-emoji-render';
import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';

import { useCardSide } from '../../../../commons/profile_card/profile_card_hooks/use_card_side';
import { useCardVariant } from '../../../../commons/profile_card/profile_card_hooks/use_card_variant';

import { DEFAULT_PROJECT_IMAGE } from '../utils/images';
import { styles } from './projects_front_styles';

const useStyles = createUseStyles(styles);

const ProjectsFrontComponent = ({ data }) => {
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === 'front' ? 'back' : 'front'), [side, setSide]);

    const [variant] = useCardVariant();
    const imageSrc = useMemo(() => data.projects?.[0]?.images?.url ?? DEFAULT_PROJECT_IMAGE, [
        data.projects?.[0]?.images
    ]);
    const alt = data.projects?.[0]?.title;

    const projectTitle = useMemo(() => {
        if (!data.projects?.[0]) {
            return '';
        }
        if (data.projects?.[0].name) {
            return data.projects?.[0].name;
        }
        return data.projects?.[0].description?.slice(0, 20) ?? '';
    }, [data.projects?.[0]]);

    const classes = useStyles({ variant, hasImage: !!imageSrc });
    return (
        <>
            <div className={classes.background}>
                {imageSrc && <img className={classes.backgroundImage} src={imageSrc} alt={alt} />}
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
                    {projectTitle}
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
