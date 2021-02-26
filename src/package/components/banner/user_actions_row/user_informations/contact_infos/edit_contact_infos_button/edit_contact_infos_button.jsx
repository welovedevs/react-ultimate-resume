import React from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Button } from '@welovedevs/ui';

import { useCallbackOpen } from '../../../../../hooks/use_callback_open';
import { ContactInfosDialog } from '../contact_infos_dialog/contact_infos_dialog';

import { styles } from './edit_contact_infos_button_styles';

const useStyles = createUseStyles(styles);

export const EditContactInfosButton = ({ contactInformations }) => {
    const classes = useStyles();
    const [openDialog, setDialogOpened, setDialogClosed] = useCallbackOpen();
    return (
        <>
            <ContactInfosDialog open={openDialog} onClose={setDialogClosed} contactInformations={contactInformations} />
            <Button
                variant="outlined"
                classes={{
                    container: classes.container
                }}
                onClick={setDialogOpened}
            >
                <FormattedMessage
                    id="Banner.UserInformations.ContactInfosButton"
                    defaultMessage="Edit contact informations"
                />
            </Button>
        </>
    );
};
