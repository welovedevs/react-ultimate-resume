import React from 'react';
import { useIntl } from 'react-intl';

import { Button } from '@welovedevs/ui';
import { useMediaQuery } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Twemoji } from 'react-emoji-render';
import { useCallbackOpen } from '../../../hooks/use_callback_open';
import { CustomizeDialog } from '../customize_dialog/customize_dialog';
import { translations } from './customize_button_translations';
import { styles } from './customize_button_styles';

const useStyles = makeStyles(styles);
export const CustomizeButton = ({ customizationOptions }) => {
    const { formatMessage } = useIntl();
    const [dialogOpen, open, close] = useCallbackOpen();
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:500px)', { defaultMatches: true });

    return (
        <>
            <CustomizeDialog open={dialogOpen} onClose={close} customizationOptions={customizationOptions} />
            <Button variant="outlined" color="light" onClick={open}>
                <Twemoji
                    options={{ baseUrl: '//cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/' }}
                    svg
                    text="🎨"
                    className={classes.icon}
                />
                {!isMobile && formatMessage(translations.customize)}
            </Button>
        </>
    );
};
