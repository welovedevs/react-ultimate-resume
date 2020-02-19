import React, { useCallback, useMemo, useReducer } from 'react';
import { IntlProvider } from 'react-intl';
import { createUseStyles, ThemeProvider } from 'react-jss';

import { buildTheme } from '../utils/styles/theme/theme';
import { Banner } from './banner/banner';
import { Cards } from './cards/cards';

import { styles } from './profile_styles';

import en from '../i18n/en.json';
import fr from '../i18n/fr.json';

if (!Intl.PluralRules) {
    require('@formatjs/intl-pluralrules/polyfill');
    require('@formatjs/intl-pluralrules/dist/locale-data/en');
    require('@formatjs/intl-pluralrules/dist/locale-data/fr');
}


import '../styles/lib/slick-carousel/slick-theme.css';
import '../styles/lib/slick-carousel/slick.css';
import { technologiesInitialState, technologiesReducer } from '../store/technologies/technologies_reducer';
import { DeveloperProfileContext } from '../utils/context/contexts';

const messages = {
    en,
    fr
};
const useStyles = createUseStyles(styles);

const DEFAULT_OPTIONS = Object.freeze({
    locale: 'en'
});

const DEFAULT_OBJECT = {};
const DEFAULT_FUNCTION = () => {};

const DeveloperProfileComponent = ({
    data = DEFAULT_OBJECT,
    options = DEFAULT_OBJECT,
    onEdit: onEditProps = DEFAULT_FUNCTION,
    onCustomizationChanged,
    isEditing = false,
    onFilesUpload = async () =>
        // eslint-disable-next-line no-undef
        fetch('https://api.thecatapi.com/v1/images/search', {
            headers: {}
        })
            .then(res => res.json())
            .then(results => results?.[0]?.url),
    ActionButtons,
    BeforeCards
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
            apiKeys: { giphy: apiKeys?.giphy },
            store,
            endpoints: {
                devicons: endpoints?.devicons
            }
        }),
        [endpoints, apiKeys, data, onEdit, store]
    );

    return (
        <div className={classes.container}>
            <DeveloperProfileContext.Provider value={context}>
                <Banner customizationOptions={options.customization} onCustomizationChanged={onCustomizationChanged}>{ActionButtons}</Banner>
                {BeforeCards}
                <Cards cardsOrder={options.customization?.cardsOrder} />
            </DeveloperProfileContext.Provider>
        </div>
    );
};

const WithProvidersDeveloperProfile = ({
    data,
    onEdit,
    onCustomizationChanged,
    options = {},
    ActionButtons,
    BeforeCards,
    isEditing
}) => {
    const { locale, customization } = useMemo(() => ({ ...DEFAULT_OPTIONS, ...options }), [options]);
    const builtTheme = useMemo(() => {
        console.time('theme');
        const theme = buildTheme(customization?.theme);
        console.timeEnd('theme');
        return theme;
    }, [customization?.theme]);

    return (
        <ThemeProvider theme={builtTheme}>
            <IntlProvider locale={locale} messages={messages[locale] || messages.en} defaultLocale={locale}>
                <DeveloperProfileComponent
                    isEditing={isEditing}
                    data={data}
                    onEdit={onEdit}
                    onCustomizationChanged={onCustomizationChanged}
                    options={options}
                    ActionButtons={ActionButtons}
                    BeforeCards={BeforeCards}
                />
            </IntlProvider>
        </ThemeProvider>
    );
};

export const DeveloperProfile = WithProvidersDeveloperProfile;
