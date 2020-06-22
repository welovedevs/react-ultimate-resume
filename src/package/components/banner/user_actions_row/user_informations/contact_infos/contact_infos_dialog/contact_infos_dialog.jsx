/* eslint no-unused-vars: 0 */
import React, { useCallback, useContext, useEffect, useState } from 'react';

import { createUseStyles, useTheme } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import set from 'lodash/set';

import { Dialog, DialogContent, DialogActions, useMediaQuery } from '@material-ui/core';

import { Button, Typography } from '@welovedevs/ui';
import { DialogTitle } from '../../../../../commons/dialog/dialog_title/dialog_title';
import { DeveloperProfileContext } from '../../../../../../utils/context/contexts';

import { ContactInfosDialogTextFields } from './contact_infos_dialog_textfields/contact_infos_dialog_textfields';
import { styles } from './contact_infos_dialog_styles';
import { CONTACT_INFOS_DATA } from '../contact_infos_data';

const useStyles = createUseStyles(styles);

export const ContactInfosDialog = ({ open, onClose, contactInformations }) => {
    const { onEdit } = useContext(DeveloperProfileContext);
    const [inputs, setInputs] = useState(contactInformations);
    const theme = useTheme();
    const fullScreen = useMediaQuery(`(max-width: ${theme?.screenSizes.small}px)`, { defaultMatches: true });

    useEffect(() => setInputs(contactInformations), [contactInformations]);

    const handleSave = useCallback(() => {
        if (!inputs) {
            return;
        }
        const edits = Object.entries(inputs).reduce((acc, [contactInformationId, value]) => {
            if (value === contactInformations[contactInformationId]) {
                return acc;
            }
            set(acc, CONTACT_INFOS_DATA?.[contactInformationId]?.path, value);
            return acc;
        }, {});

        onEdit(edits);
        onClose();
    }, [contactInformations, inputs]);

    const classes = useStyles();
    return (
        <Dialog open={open} onClose={onClose} fullScreen={fullScreen}>
            <DialogTitle>
                <FormattedMessage
                    id="Banner.UserInformations.ContactInfos.Dialog.Title"
                    defaultMessage="Edit your contact informations?"
                />
            </DialogTitle>
            <DialogContent>
                <Typography
                    color="dark"
                    customClasses={{
                        container: classes.typography
                    }}
                >
                    <FormattedMessage
                        id="Banner.UserInformations.ContactInfos.Dialog.Content"
                        defaultMessage="You can add contact informations to your profile. Please be aware that those informations might be scrapped and used for unknown purposes. <bolder>Add them at your own risks!</bolder>"
                        values={{
                            bolder: (chunks) => <span className={classes.bolder}>{chunks}</span>
                        }}
                    />
                </Typography>
                <ContactInfosDialogTextFields inputs={inputs} setInputs={setInputs} />
            </DialogContent>
            <DialogActions>
                <Button size="small" onClick={onClose}>
                    <FormattedMessage id="Main.lang.close" defaultMessage="Close" />
                </Button>
                <Button color="primary" size="small" onClick={handleSave}>
                    <FormattedMessage id="Main.lang.save" defaultMessage="Save" />
                </Button>
            </DialogActions>
        </Dialog>
    );
};
