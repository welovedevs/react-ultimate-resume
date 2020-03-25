import React, { useCallback, useMemo, useReducer, useState } from 'react';
import { injectIntl, IntlProvider } from 'react-intl';
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
import { DeveloperProfileContext, StaticDataContext, StoreContext } from '../utils/context/contexts';
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
const DEFAULT_UPLOAD_FUNCTION = async () => 'https://source.unsplash.com/random/4000x2000';

const DeveloperProfileComponent = ({
                                       data: originalData = DEFAULT_OBJECT,
                                       options,
                                       mode,
                                       onEdit: onEditProps = DEFAULT_FUNCTION,
                                       onIsEditingChanged = DEFAULT_FUNCTION,
                                       onCustomizationChanged,
                                       onFilesUpload = DEFAULT_UPLOAD_FUNCTION,
                                       additionalNodes,
                                       classes: receivedGlobalClasses = {}
                                   }) => {
    const classes = useStyles(styles);
    const { apiKeys, endpoints } = options;
    const [isEditing, setIsEditing] = useState(false);
    const onEdit = useCallback(
        newData => {
            if (typeof onEditProps === 'function') {
                onEditProps(newData);
            }
        },
        [onEditProps]
    );
    const setIsEditingWithCallback = useCallback((newValue) => {
        setIsEditing(newValue);
        onIsEditingChanged(newValue);
    }, [onIsEditingChanged, setIsEditing]);
    const store = {
        technologies: useReducer(technologiesReducer, technologiesInitialState)
    };
    const staticContext = useMemo(
        () => ({
            apiKeys: { giphy: apiKeys?.giphy, unsplash: apiKeys?.unsplash },
            endpoints,
            additionalNodes,
            receivedGlobalClasses
        }),
        [apiKeys, endpoints, additionalNodes, receivedGlobalClasses]
    );

    const data = useMemo(() => originalData, [JSON.stringify(originalData)]);

    const context = useMemo(
        () => ({
            data,
            isEditing,
            setIsEditing: setIsEditingWithCallback,
            onEdit,
            onCustomizationChanged,
            onFilesUpload,
            mode
        }),
        [data, isEditing, onEdit, mode, onCustomizationChanged, onFilesUpload]
    );

    const side = useMemo(() => (isEditing && SIDES.BACK) || options?.side, [options, isEditing]);

    return (
        <div className={classes.container}>
            <StaticDataContext.Provider value={staticContext}>
                <StoreContext.Provider value={store}>
                    <DeveloperProfileContext.Provider value={context}>
                        <Banner
                            customizationOptions={options.customization}
                            onCustomizationChanged={onCustomizationChanged}
                        />
                        {additionalNodes?.beforeCards}
                        <Cards cardsOrder={options.customization?.cardsOrder} side={side} />
                        {!options.dismissFooter && <Footer />}
                    </DeveloperProfileContext.Provider>
                </StoreContext.Provider>
            </StaticDataContext.Provider>
        </div>
    );
};

const WithProvidersDeveloperProfile = ({
    data,
    onEdit,
    onCustomizationChanged,
    onIsEditingChanged,
    options = {},
    mode = 'readOnly',
    additionalNodes,
    classes,
    onFilesUpload,
    intl: parentIntl
}) => {
    const mergedOptions = useMemo(
        () => mergeWith(cloneDeep(DEFAULT_OPTIONS), JSON.parse(JSON.stringify(options || {})), mergeOmitNull),
        [JSON.stringify(options)]
    );

    const { locale, customization } = mergedOptions;
    const builtTheme = useMemo(() => buildTheme(customization?.theme), [customization?.theme]);

    const providerMessages = useMemo(
        () => ({ ...(parentIntl?.messages || {}), ...(messages[locale] || messages.en) }),
        [parentIntl, locale]
    );

    return (
        <ThemeProvider theme={builtTheme}>
            <IntlProvider locale={locale} messages={providerMessages} defaultLocale={locale}>
                <DeveloperProfileComponent
                    data={data}
                    mode={mode}
                    onEdit={onEdit}
                    onCustomizationChanged={onCustomizationChanged}
                    onIsEditingChanged={onIsEditingChanged}
                    options={mergedOptions}
                    additionalNodes={additionalNodes}
                    onFilesUpload={onFilesUpload}
                    classes={classes}
                />
            </IntlProvider>
        </ThemeProvider>
    );
};

export const DeveloperProfile = injectIntl(WithProvidersDeveloperProfile, { enforceContext: false });
