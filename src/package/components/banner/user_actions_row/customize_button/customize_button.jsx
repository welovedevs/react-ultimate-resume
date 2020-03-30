import React from 'react';
import { useIntl } from 'react-intl';

import { Button } from '@welovedevs/ui';
import { useMediaQuery } from '@material-ui/core';
import { createUseStyles } from 'react-jss';
import { Twemoji } from 'react-emoji-render';
import { useCallbackOpen } from '../../../hooks/use_callback_open';
import { CustomizeDialog } from '../customize_dialog/customize_dialog';
import { translations } from './customize_button_translations';
import { styles } from './customize_button_styles';

const useStyles = createUseStyles(styles);
export const CustomizeButton = ({ customizationOptions }) => {
    const { formatMessage } = useIntl();
    const [dialogOpen, open, close] = useCallbackOpen();
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:500px)', { defaultMatches: true });

    return (
        <>
            <CustomizeDialog open={dialogOpen} onClose={close} customizationOptions={customizationOptions} />
            <Button variant="outlined" color="light" onClick={open}>
                <Twemoji svg text="🎨" className={classes.icon} />
                {!isMobile && formatMessage(translations.customize)}
            </Button>
        </>
    );
};
