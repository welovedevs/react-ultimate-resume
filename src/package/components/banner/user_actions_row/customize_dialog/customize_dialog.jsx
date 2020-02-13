import React, { useCallback, useContext, useEffect, useState } from 'react';

import { createUseStyles, ThemeProvider } from 'react-jss';
import { FormattedMessage } from 'react-intl';
import set from 'lodash/set';
import cloneDeep from 'lodash/cloneDeep';

import { Button } from '@wld/ui';

import { Dialog, DialogActions, DialogContent } from '@material-ui/core';

import { DialogTitle } from '../../../commons/dialog/dialog_title/dialog_title';
import { CardsOrderer } from './card_orderer/cards_orderer';
import { PalettesList } from './palettes_list/palettes_list';

import { buildTheme } from '../../../../utils/styles/theme/theme';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';

import { styles } from './customize_dialog_styles';

const useStyles = createUseStyles(styles);

const CustomizeDialogComponent = ({ open, onClose, customizationOptions }) => {
    const classes = useStyles();
    const [value, setValue] = useState(customizationOptions);
    const [builtTheme, setBuiltTheme] = useState({});
    const { onCustomizationChanged } = useContext(DeveloperProfileContext);

    useEffect(() => {
        setValue(customizationOptions);
    }, [customizationOptions]);

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
        <Dialog
            fullScreen
            open={open}
            classes={{
                paper: classes.paper
            }}
            onClose={onClose}
        >
            <DialogTitle>
                <FormattedMessage id="Banner.actions.customize.dialog.title" defaultMessage="Customize your profile" />
            </DialogTitle>
            <DialogContent
                classes={{
                    root: classes.content
                }}
            >
                <PalettesList
                    classes={{
                        container: classes.palettesList
                    }}
                    onChange={onPaletteChanged}
                    value={value?.theme?.palette}
                />
                <div className={classes.dividerContainer}>
                    <div className={classes.divider} />
                </div>
                <ThemeProvider theme={builtTheme}>
                    <CardsOrderer onChange={onCardOrdered} value={value?.cardsOrder} />
                </ThemeProvider>
            </DialogContent>
            <DialogActions
                classes={{
                    root: classes.actions
                }}
            >
                <Button size="small" onClick={onSave}>
                    <FormattedMessage id="Main.lang.save" defaultMessage="Save" />
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export const CustomizeDialog = CustomizeDialogComponent;
