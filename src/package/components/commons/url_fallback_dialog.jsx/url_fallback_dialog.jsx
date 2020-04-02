import React, { useCallback, useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { Button, Typography } from '@welovedevs/ui';
import { DialogTitle } from '../dialog/dialog_title/dialog_title';
import { URLFailoverField } from '../url_failover_field/url_failover_field';

export const URLFallbackDialog = ({ open, onClose, onChange, value: inputValue }) => {
    const [value, setValue] = useState(inputValue);

    useEffect(() => setValue(inputValue), [inputValue]);

    const handleUrlChange = useCallback(({ url }) => setValue(url), []);

    const handleSave = useCallback(() => {
        onChange(value);
        onClose();
    }, [value, onChange]);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                <FormattedMessage id="Gifs.searchdialog.failoverTitle" defaultMessage="Enter an url" />
            </DialogTitle>
            <DialogContent>
                <Typography component="div">
                    <FormattedMessage
                        id="Gifs.searchdialog.nogiphy"
                        defaultMessage="⚠️ No key, giphy search is disabled"
                    />
                </Typography>
                <URLFailoverField value={value} onChange={handleUrlChange} />
            </DialogContent>
            <DialogActions>
                <Button size="small" onClick={onClose}>
                    <FormattedMessage id="Main.lang.close" defaultMessage="Close" />
                </Button>
                <Button size="small" color="primary" onClick={handleSave}>
                    <FormattedMessage id="Main.lang.save" defaultMessage="Save" />
                </Button>
            </DialogActions>
        </Dialog>
    );
};
