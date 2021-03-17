import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { createUseStyles, useTheme } from 'react-jss';
import { FormattedMessage } from 'react-intl';
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

import { Button, List, ListItem, Typography } from '@welovedevs/ui';

import { Dialog, DialogContent, DialogActions, useMediaQuery } from '@material-ui/core';

import isEqual from 'lodash.isequal';
import { DialogTitle } from '../../../../commons/dialog/dialog_title/dialog_title';

import { ReactComponent as MoveIcon } from '../../../../../assets/icons/move_list.svg';

import { styles } from './sort_projects_dialog_styles';
import { DeveloperProfileContext } from '../../../../../utils/context/contexts';

const useStyles = createUseStyles(styles);

export const SortProjectsDialog = ({ open, onClose, projects }) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);
    const { onEdit } = useContext(DeveloperProfileContext);

    const [sortedProjects, setSortedProjects] = useState(projects);

    const saveDisabled = useMemo(() => isEqual(sortedProjects, projects), [projects, sortedProjects]);

    useEffect(() => {
        setSortedProjects(projects);
    }, [projects]);

    const handleSortEnd = useCallback(
        ({ oldIndex, newIndex }) => {
            const newProjects = arrayMove(sortedProjects, oldIndex, newIndex).map((data, index) => ({
                ...data,
                index
            }));
            setSortedProjects(newProjects);
        },
        [sortedProjects]
    );

    const handleSave = useCallback(async () => {
        if (saveDisabled) {
            return;
        }
        await onEdit({
            projects: sortedProjects
        });
        onClose();
    }, [saveDisabled, onEdit, sortedProjects]);

    return (
        <Dialog open={open} onClose={onClose} fullScreen={isMobile}>
            <DialogTitle>
                <FormattedMessage id="Projects.SortDialog.Title" defaultMessage="Sort projects" />
            </DialogTitle>
            <DialogContent>
                <SortableProjects
                    lockToContainerEdges
                    helperClass={classes.sortableHelper}
                    onSortEnd={handleSortEnd}
                    distance={15}
                    useDragHandle
                    lockAxis="y"
                    items={sortedProjects}
                    classes={classes}
                />
            </DialogContent>
            <DialogActions>
                <Button size="small" onClick={onClose}>
                    <FormattedMessage id="Main.Lang.Close" defaultMessage="Close" />
                </Button>
                <Button size="small" color="primary" onClick={handleSave} disabled={saveDisabled}>
                    <FormattedMessage id="Main.Lang.Save" defaultMessage="Save" />
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const SortableProjects = SortableContainer(({ items = [], classes }) => (
    <List>
        {items
            .filter(Boolean)
            .sort(({ index: a }, { index: b }) => a - b)
            .map((project, index) => (
                <ProjectItem
                    index={index}
                    key={`project_${project.id}_${index}`}
                    id={project?.id}
                    project={project}
                    classes={classes}
                    projectIndex={index}
                />
            ))}
    </List>
));

const ProjectItem = SortableElement(({ project, classes }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);
    return (
        <div className={classes.projectRow}>
            <DragHandle classes={classes} />
            {!isMobile && <div className={classes.divider} />}
            <ListItem className={classes.listItem}>
                <Typography className={classes.name} color="dark">
                    {project?.name}
                </Typography>
            </ListItem>
        </div>
    );
});

const DragHandle = SortableHandle(({ classes }) => (
    <button className={classes.dragHandleButton} type="button">
        <MoveIcon className={classes.dragHandle} />
    </button>
));
