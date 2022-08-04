import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { useTheme } from '@mui/styles';
import makeStyles from '@mui/styles/makeStyles';

import { FormattedMessage } from 'react-intl';

import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Button, List, ListItem, Typography } from '@welovedevs/ui';

import { Dialog, DialogContent, DialogActions, useMediaQuery } from '@mui/material';

import isEqual from 'lodash/isEqual';
import { DialogTitle } from '../../../../commons/dialog/dialog_title/dialog_title';

import { ReactComponent as MoveIcon } from '../../../../../assets/icons/move_list.svg';

import { styles } from './sort_projects_dialog_styles';
import { DeveloperProfileContext } from '../../../../../utils/context/contexts';

const useStyles = makeStyles(styles);

export const SortProjectsDialog = ({ open, onClose, projects }) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);
    const { onEdit } = useContext(DeveloperProfileContext);

    const [sortedProjects, setSortedProjects] = useState(projects.sort(({ index: a }, { index: b }) => a - b));

    useEffect(() => {
        setSortedProjects(projects.sort(({ index: a }, { index: b }) => a - b));
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
        await onEdit({
            projects: sortedProjects
        });
        onClose();
    }, [onEdit, sortedProjects]);

    return (
        <Dialog open={open} onClose={onClose} fullScreen={isMobile}>
            <DialogTitle>
                <FormattedMessage id="Projects.SortDialog.Title" defaultMessage="Sort projects" />
            </DialogTitle>
            <DialogContent>
                <SortableProjects onSortEnd={handleSortEnd} items={sortedProjects} classes={classes} />
            </DialogContent>
            <DialogActions>
                <Button size="small" onClick={onClose}>
                    <FormattedMessage id="Main.Lang.Close" defaultMessage="Close" />
                </Button>
                <Button size="small" color="primary" onClick={handleSave}>
                    <FormattedMessage id="Main.Lang.Save" defaultMessage="Save" />
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const SortableProjects = ({ items = [], classes, onSortEnd }) => {
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const handleDragEnd = useCallback(
        (event) => {
            const { active, over } = event;

            if (active.id !== over.id) {
                const oldItem = items.find(({ id }) => id === active.id);
                const newItem = items.find(({ id }) => id === over.id);
                const oldIndex = oldItem && items.indexOf(oldItem);
                const newIndex = newItem && items.indexOf(newItem);
                return onSortEnd({ oldIndex, newIndex });
            }
        },
        [items]
    );

    return (
        <List>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={items} strategy={verticalListSortingStrategy}>
                    {items.filter(Boolean).map((project, index) => (
                        <ProjectItem
                            index={index}
                            key={`project_${project.id}_${index}`}
                            id={project?.id}
                            project={project}
                            classes={classes}
                            projectIndex={index}
                        />
                    ))}
                </SortableContext>
            </DndContext>
        </List>
    );
};

const ProjectItem = ({ project, classes }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: project.id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);
    return (
        <div className={classes.projectRow} style={style} ref={setNodeRef}>
            <button className={classes.dragHandleButton} type="button" {...attributes} {...listeners}>
                <MoveIcon className={classes.dragHandle} />
            </button>
            {!isMobile && <div className={classes.divider} />}
            <ListItem className={classes.listItem}>
                <Typography className={classes.name} color="dark">
                    {project?.name}
                </Typography>
            </ListItem>
        </div>
    );
};
