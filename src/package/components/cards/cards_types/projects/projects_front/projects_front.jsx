import React, { memo, useCallback, useMemo } from 'react';

import { Twemoji } from 'react-emoji-render';
import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { Typography } from '@welovedevs/ui';

import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';

import { useCardSide } from '../../../../hooks/profile_card_hooks/use_card_side';
import { useCardVariant } from '../../../../hooks/profile_card_hooks/use_card_variant';

import { SIDES } from '../../../../commons/profile_card/profile_card_side/side';
import { DEFAULT_PROJECT_IMAGE } from '../utils/images';
import { styles } from './projects_front_styles';
import { existsAndNotEmpty } from '../../../utils/exists_and_not_empty';
import { NoDataButton } from '../../../../commons/no_data_button/no_data_button';

const useStyles = createUseStyles(styles);

const ProjectsFrontComponent = ({ data, handleAddButtonClick }) => {
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === SIDES.FRONT ? SIDES.BACK : SIDES.FRONT), [
        side,
        setSide
    ]);

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

    const hasProject = useMemo(() => existsAndNotEmpty(data?.projects), [data]);

    return (
        <>
            <div className={classes.background}>
                {imageSrc && <img className={classes.backgroundImage} src={imageSrc} alt={alt} />}
            </div>
            <div className={classes.content}>
                <Content
                    hasProject={hasProject}
                    projectTitle={projectTitle}
                    handleAddButtonClick={handleAddButtonClick}
                    classes={classes}
                />
            </div>
            {hasProject && (
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
            )}
        </>
    );
};

const Content = ({ hasProject, projectTitle, handleAddButtonClick, classes }) => {
    if (hasProject) {
        return (
            <Typography variant="h2" component="h2" classes={{ container: classes.text }}>
                <FormattedMessage
                    id="Projects.front.title"
                    defaultMessage="My <emoji>♥️</emoji> project : "
                    values={{
                        emoji: (value) => <Twemoji svg text={value} />
                    }}
                />
                {projectTitle}
            </Typography>
        );
    }
    return (
        <div className={classes.noProject}>
            <Typography variant="h3" component="h3" classes={{ container: classes.noProjectTypography }}>
                <FormattedMessage id="Projects.front.noProject" defaultMessage="You didn't add any projects." />
                {projectTitle}
            </Typography>
            <NoDataButton
                classes={{
                    container: classes.addButton
                }}
                handleAddButtonClick={handleAddButtonClick}
            >
                <FormattedMessage id="Projects.noProject.buttonLabel" defaultMessage="Ajouter un projet" />
            </NoDataButton>
        </div>
    );
};

export const ProjectsFront = memo(ProjectsFrontComponent);
