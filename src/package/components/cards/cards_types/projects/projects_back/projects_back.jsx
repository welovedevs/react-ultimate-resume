import React, { memo, useCallback, useContext, useMemo } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { ProfileCardTitle } from '../../../../commons/profile_card/profile_card_title/profile_card_title';

import { ProfileCardContent } from '../../../../commons/profile_card/profile_card_content/profile_card_content';
import { ProjectSection } from './project_section/project_section';

import { DEFAULT_PROJECT_IMAGE } from '../utils/images';
import { styles } from './projects_back_styles';
import { useCardVariant } from '../../../../hooks/profile_card_hooks/use_card_variant';
import { DeveloperProfileContext } from '../../../../../utils/context/contexts';
import { existsAndNotEmpty } from '../../../utils/exists_and_not_empty';
import { NoProject } from './no_project/no_project';

const useStyles = createUseStyles(styles);

const ProjectsBackComponent = ({ data, handleAddButtonClick }) => {
    const [variant] = useCardVariant();
    const { onEdit } = useContext(DeveloperProfileContext);
    const classes = useStyles({ variant });

    const imageSrc = useMemo(() => data.projects?.[0]?.images?.url ?? DEFAULT_PROJECT_IMAGE, [
        data.projects?.[0]?.images
    ]);
    const alt = data.projects?.[0]?.title;

    const handleProjectDeletion = useCallback(
        index => {
            const newProjects = [...data.projects];
            newProjects.splice(index, 1);
            onEdit({ projects: newProjects });
        },
        [data, onEdit]
    );

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
                    <ProjectSection project={project} key={`project_${project.id}`} onDelete={handleProjectDeletion} />
                ))}
                {!existsAndNotEmpty(data?.projects) && <NoProject handleAddButtonClick={handleAddButtonClick} />}
            </ProfileCardContent>
        </>
    );
};

export const ProjectsBack = memo(ProjectsBackComponent);
