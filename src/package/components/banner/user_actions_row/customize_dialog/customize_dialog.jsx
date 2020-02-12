import React, { useCallback, useContext, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import set from 'lodash/set';
import cloneDeep from 'lodash/cloneDeep';

import { Dialog, DialogActions, DialogContent } from '@material-ui/core';
import { ThemeProvider } from 'react-jss';
import { Button } from '@wld/ui';

import { DialogTitle } from '../../../commons/dialog/dialog_title/dialog_title';
import { PalettePicker } from './palette_picker/palette_picker';
import { CardsOrderer } from './card_orderer/cards_orderer';
import { buildTheme } from '../../../../utils/styles/theme/theme';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';

export const CustomizeDialog = ({ open, onClose, customizationOptions }) => {
    const [value, setValue] = useState(customizationOptions);
    const { onCustomizationChanged } = useContext(DeveloperProfileContext);

    useEffect(() => {
        setValue(customizationOptions);
    }, [customizationOptions]);

    const [builtTheme, setBuiltTheme] = useState({});

    useEffect(() => {
        const asyncBuild = async () => {
            const built = await buildTheme(value.theme);
            setBuiltTheme(built);
        };
        asyncBuild();
    }, [JSON.stringify(value.theme)]);

    const onPaletteChanged = useCallback(
        palette => {
            const newCustomization = cloneDeep(value || {});
            set(newCustomization, 'theme.palette', palette);
            setValue(newCustomization);
        },
        [value]
    );

    const onCardOrdered = useCallback(
        cardsOrder => {
            const newCustomization = cloneDeep(value || {});
            newCustomization.cardsOrder = cardsOrder;
            setValue(newCustomization);
        },
        [value]
    );

    const onSave = useCallback(() => {
        onCustomizationChanged(value);
        onClose();
    }, [value]);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                <FormattedMessage id="Banner.actions.customize.dialog.title" defaultMessage="Customize your profile" />
            </DialogTitle>
            <DialogContent>
                <PalettePicker onChange={onPaletteChanged} value={value?.theme?.palette} />
                <ThemeProvider theme={builtTheme}>
                    <CardsOrderer onChange={onCardOrdered} value={value?.cardsOrder} />
                </ThemeProvider>
            </DialogContent>
            <DialogActions>
                <Button size="small" onClick={onSave}>
                    <FormattedMessage id="Main.lang.save" defaultMessage="Save" />
                </Button>
            </DialogActions>
        </Dialog>
    );
};
