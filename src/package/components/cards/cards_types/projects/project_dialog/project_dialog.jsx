import React, { useContext, useEffect } from 'react';

import { createUseStyles } from 'react-jss';

import { Button, TextField } from '@wld/ui';
import {
    Dialog,
    DialogContent,
    DialogActions
} from '@material-ui/core';

import { FormattedMessage } from 'react-intl';

import { DialogTitle } from '../../../../commons/dialog/dialog_title/dialog_title';
import { ProfileCardContext } from '../../../../commons/profile_card/profile_card';

import { SET_HAS_DIALOG_OPENED } from '../../../../commons/profile_card/profile_card_actions_types';

import { styles } from './project_dialog_styles';

const useStyles = createUseStyles(styles);

const ProjectDialogComponent = ({ open, onClose, project }) => {
    const classes = useStyles();
    const { dispatch: profileCardDispatch } = useContext(ProfileCardContext);

    useEffect(() => {
        profileCardDispatch({
            type: SET_HAS_DIALOG_OPENED,
            hasDialogOpened: open
        });
    }, [open, profileCardDispatch]);

    return (
        <Dialog
            classes={{
                paper: classes.paper
            }}
            open={open}
            onClose={onClose}
        >
            <DialogTitle>
                Le projet en détails
            </DialogTitle>
            <DialogContent
                classes={{
                    root: classes.content
                }}
            >
                <TextField
                    fullWidth
                    multiline
                    variant="flat"
                    rows={10}
                />
                <div className={classes.images}>
                    <div className={classes.image} />
                    <div className={classes.image} />
                    <div className={classes.image} />
                    <div className={classes.image} />
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    size="small"
                    onClick={onClose}
                >
                    <FormattedMessage
                        id="Main.Lang.Close"
                        defaultMessage="Fermer"
                    />
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export const ProjectDialog = ProjectDialogComponent;
