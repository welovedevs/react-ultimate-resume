import React, { useMemo } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { ProfileCardTitle } from '../../../../commons/profile_card/profile_card_title/profile_card_title';

import { ProfileCardContent } from '../../../../commons/profile_card/profile_card_content/profile_card_content';
import { ProjectSection } from './project_section/project_section';

import { DEFAULT_PROJECT_IMAGE } from '../utils/images';
import { styles } from './projects_back_styles';
import { useCardVariant } from '../../../../commons/profile_card/profile_card_hooks/use_card_variant';

const useStyles = createUseStyles(styles);

const ProjectsBackComponent = ({ data }) => {
    const [variant] = useCardVariant();

    const classes = useStyles({ variant });
    const imageSrc = useMemo(() => data.projects?.[0]?.images?.url ?? DEFAULT_PROJECT_IMAGE, [
        data.projects?.[0]?.images
    ]);
    const alt = data.projects?.[0]?.title;

    return (
        <>
            <ProfileCardTitle
                customClasses={{
                    container: classes.title,
                    typography: classes.typography
                }}
                beforeTypography={
                    <div className={classes.background}>
                        {imageSrc && <img className={classes.backgroundImage} src={imageSrc} alt={alt} />}
                        {!imageSrc && <div className={classes.stubBackground} />}
                    </div>
                }
            >
                <FormattedMessage id="Projects.back.title" defaultMessage="Projects" />
            </ProfileCardTitle>
            <ProfileCardContent>
                {data.projects?.map(project => (
                    <ProjectSection project={project} key={`project_${project.id}`} />
                ))}
            </ProfileCardContent>
        </>
    );
};

export const ProjectsBack = ProjectsBackComponent;
