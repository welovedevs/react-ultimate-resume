import React, { useEffect } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Button } from '@wld/ui';

import { Dialog, DialogContent, DialogActions } from '@material-ui/core';

import { DialogTitle } from '../../../../commons/dialog/dialog_title/dialog_title';
import { ProjectDialogContentTitle } from './project_dialog_content_title/project_dialog_content_title';
import { ProjectDialogContentImages } from './project_dialog_content_images/project_dialog_content_images';
import { ProjectDialogContentDescription } from './project_dialog_content_description/project_dialog_content_description';

import { useHasDialogOpened } from '../../../../commons/profile_card/profile_card_hooks/use_card_has_dialog_opened';

import { styles } from './project_dialog_styles';

const useStyles = createUseStyles(styles);

const DEFAULT_PROJECT = {
    title: "Développement d'un serpent connecté",
    description:
        "Et oui, vous avez bien entendu !\nUn serpent connecté, c'est comme une montre connectée, mais en serpent, en fait ça ressemble pas une montre, mais ça reste connecté 🚀",
    images: {
        random1: {
            name: 'Random 1',
            url: 'https://source.unsplash.com/random/400x200'
        },
        random2: {
            name: 'Random 2',
            url: 'https://source.unsplash.com/random/400x200'
        },
        random3: {
            name: 'Random 3',
            url: 'https://source.unsplash.com/random/400x200'
        },
        random4: {
            name: 'Random 4',
            url: 'https://source.unsplash.com/random/400x200'
        },
        random5: {
            name: 'Random 3',
            url: 'https://source.unsplash.com/random/400x200'
        },
        random6: {
            name: 'Random 4',
            url: 'https://source.unsplash.com/random/400x200'
        }
    }
};

const ProjectDialogComponent = ({ open, onClose, project }) => {
    const classes = useStyles();
    const [, setHasDialogOpened] = useHasDialogOpened();

    useEffect(() => setHasDialogOpened(open), [open]);

    return (
        <Dialog
            classes={{
                paper: classes.paper
            }}
            open={open}
            onClose={onClose}
        >
            <DialogTitle>Le projet en détails</DialogTitle>
            <DialogContent
                classes={{
                    root: classes.content
                }}
            >
                <ProjectDialogContentTitle title={DEFAULT_PROJECT.title} />
                <ProjectDialogContentDescription description={DEFAULT_PROJECT.description} />
                <ProjectDialogContentImages images={DEFAULT_PROJECT.images} />
            </DialogContent>
            <DialogActions>
                <Button size="small" onClick={onClose}>
                    <FormattedMessage id="Main.Lang.Close" defaultMessage="Fermer" />
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export const ProjectDialog = ProjectDialogComponent;
