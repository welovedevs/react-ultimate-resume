import React from 'react';
import { Button } from '@wld/ui';
import { useCallbackOpen } from '../../../hooks/use_callback_open';
import { FormattedMessage } from 'react-intl';
import { CustomizeDialog } from '../customize_dialog/customize_dialog';

export const CustomizeButton = ({ customizationOptions }) => {
    const [dialogOpen, open, close] = useCallbackOpen();

    return (
        <>
            <CustomizeDialog open={dialogOpen} onClose={close} customizationOptions={customizationOptions} />
            <Button variant="outlined" color="light" onClick={open}>
                <FormattedMessage id="Banner.actions.customize" defaultMessage="Customize" />
            </Button>
        </>
    );
};
