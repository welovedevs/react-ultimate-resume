import React, { useCallback, useMemo, useReducer } from 'react';
import { IntlProvider } from 'react-intl';
import { createUseStyles, ThemeProvider } from 'react-jss';

import mergeWith from 'lodash/mergeWith';
import cloneDeep from 'lodash/cloneDeep';

import { buildTheme } from '../utils/styles/theme/theme';
import { Banner } from './banner/banner';
import { Cards } from './cards/cards';

import { styles } from './profile_styles';

import en from '../i18n/en.json';
import fr from '../i18n/fr.json';

import '../styles/lib/slick-carousel/slick-theme.css';
import '../styles/lib/slick-carousel/slick.css';
import { technologiesInitialState, technologiesReducer } from '../store/technologies/technologies_reducer';
import { DeveloperProfileContext } from '../utils/context/contexts';
import { Footer } from './footer/footer';
import { mergeOmitNull } from '../utils/data_utils';
import { SIDES } from './commons/profile_card/profile_card_side/side';

if (!Intl.PluralRules) {
    // eslint-disable-next-line global-require
    require('@formatjs/intl-pluralrules/polyfill');
    // eslint-disable-next-line global-require
    require('@formatjs/intl-pluralrules/dist/locale-data/en');
    // eslint-disable-next-line global-require
    require('@formatjs/intl-pluralrules/dist/locale-data/fr');
}

const messages = {
    en,
    fr
};
const useStyles = createUseStyles(styles);

const DEFAULT_OPTIONS = Object.freeze({
    locale: 'en',
    customization: {
        imageHeader: {
            url: 'https://cdn.filestackcontent.com/8I2wVnCRTFxypXRYLRsp',
            alt: 'Default Banner'
        }
    },
    dismissFooter: false
});

const DEFAULT_OBJECT = {};
const DEFAULT_FUNCTION = () => {};

const DeveloperProfileComponent = ({
                                       data = DEFAULT_OBJECT,
                                       options,
                                       mode,
                                       onEdit: onEditProps = DEFAULT_FUNCTION,
                                       onCustomizationChanged,
                                       isEditing = false,
                                       onFilesUpload = async () => 'https://source.unsplash.com/random/4000x2000',
                                       BeforeCards,
                                       additionalNodes,
                                       dismissCustomizeButton,
                                       setIsEditing,
                                       classes: receivedGlobalClasses = {}
                                   }) => {
    const { apiKeys, endpoints } = options;
    const classes = useStyles(styles);

    const onEdit = useCallback(newData => {
        if (typeof onEditProps === 'function') {
            onEditProps(newData);
        }
    }, []);
    const store = {
        technologies: useReducer(technologiesReducer, technologiesInitialState)
    };
    const context = useMemo(
        () => ({
            data,
            isEditing,
            onEdit,
            onCustomizationChanged,
            onFilesUpload,
            apiKeys: { giphy: apiKeys?.giphy, unsplash: apiKeys?.unsplash },
            store,
            mode,
            additionalNodes,
            endpoints,
            receivedGlobalClasses,
            dismissCustomizeButton,
            setIsEditing
        }),
        [endpoints, apiKeys, data, onEdit, store, mode, dismissCustomizeButton]
    );

    const side = useMemo(() => (isEditing && SIDES.BACK) || options?.side, [options, isEditing]);

    return (
        <div className={classes.container}>
            <DeveloperProfileContext.Provider value={context}>
                <Banner customizationOptions={options.customization} onCustomizationChanged={onCustomizationChanged} />
                {BeforeCards}
                <Cards cardsOrder={options.customization?.cardsOrder} side={side} />
                {!options.dismissFooter && <Footer />}
            </DeveloperProfileContext.Provider>
        </div>
    );
};

const WithProvidersDeveloperProfile = ({
    data,
    onEdit,
    onCustomizationChanged,
    options = {},
    mode = 'readOnly',
    additionalNodes,
    BeforeCards,
    classes,
    isEditing,
    setIsEditing
}) => {
    const mergedOptions = useMemo(
        () => mergeWith(cloneDeep(DEFAULT_OPTIONS), JSON.parse(JSON.stringify(options || {})), mergeOmitNull),
        [options]
    );

    const { locale, customization } = mergedOptions;
    const builtTheme = useMemo(() => {
        const theme = buildTheme(customization?.theme);
        return theme;
    }, [customization?.theme]);

    return (
        <ThemeProvider theme={builtTheme}>
            <IntlProvider locale={'en'} messages={messages.en} defaultLocale={locale}>
                <DeveloperProfileComponent
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    data={data}
                    mode={mode}
                    onEdit={onEdit}
                    onCustomizationChanged={onCustomizationChanged}
                    options={mergedOptions}
                    additionalNodes={additionalNodes}
                    BeforeCards={BeforeCards}
                    classes={classes}
                />
            </IntlProvider>
        </ThemeProvider>
    );
};

export const DeveloperProfile = WithProvidersDeveloperProfile;
