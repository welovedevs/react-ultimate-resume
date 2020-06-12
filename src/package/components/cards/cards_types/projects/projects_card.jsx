import React, { useContext, useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { ProjectsFront } from './projects_front/projects_front';
import { ProjectsBack } from './projects_back/projects_back';
import { AddButton } from './add_button_rounded/add_button_rounded';
import { ProjectDialog } from './project_dialog/project_dialog';

import { mapProjectsFromJsonResume } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { validateProjectsComplete } from './data/validator';
import { SIDES } from '../../../commons/profile_card/profile_card_side/side';
import { useMode } from '../../../hooks/use_mode';
import { SortProjectsButton } from './sort_projects_button/sort_projects_button';

import { styles } from './projects_card_styles';

const useStyles = createUseStyles(styles);

const ProjectsCardComponent = ({ variant, side }) => {
    const classes = useStyles();
    const [mode] = useMode();
    const { data, isEditing } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapProjectsFromJsonResume(data), [data]);

    const isComplete = useMemo(() => validateProjectsComplete(mappedData), [mappedData]);

    const currentSide = useMemo(() => {
        if (!isComplete && !isEditing) {
            return SIDES.FRONT;
        }
        return side;
    }, [side, isComplete, isEditing]);

    if (!isComplete && mode !== 'edit') {
        return null;
    }
    return (
        <ProfileCard
            kind="projects"
            data={mappedData}
            isComplete={isComplete}
            isEditingProfile={isEditing}
            sides={{
                front: (props) => <ProjectsFront {...props} />,
                back: (props) => <ProjectsBack {...props} />
            }}
            variant={variant}
            side={currentSide}
            customEditAction={(props) => (
                <div className={classes.actions}>
                    {data.projects?.length > 1 && (
                        <SortProjectsButton
                            projects={data?.projects}
                            title={<FormattedMessage id="Projects.Actions.Sort" defaultMessage="Sort projects" />}
                        />
                    )}
                    <AddButton
                        title={<FormattedMessage id="Projects.Actions.Add" defaultMessage="Add a project" />}
                        {...props}
                    />
                </div>
            )}
            editDialog={{
                component: ProjectDialog,
                data: {}
            }}
        />
    );
};

export const ProjectsCard = ProjectsCardComponent;
