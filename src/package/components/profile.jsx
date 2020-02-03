import React, { createContext, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { createUseStyles, ThemeProvider } from 'react-jss';

import { buildTheme } from '../utils/styles/theme/theme';
import { Banner } from './banner/banner';
import { Cards } from './cards/cards';

import { styles } from './profile_styles';

import '../styles/lib/slick-carousel/slick-theme.css';
import '../styles/lib/slick-carousel/slick.css';
import { technologiesInitialState, technologiesReducer } from '../store/technologies/technologies_reducer';

const useStyles = createUseStyles(styles);

const DEFAULT_OPTIONS = Object.freeze({
    locale: 'en'
});

export const DeveloperProfileContext = createContext({});
const DEFAULT_OBJECT = {};
const DEFAULT_FUNCTION = {};

const DeveloperProfileComponent = ({
    data = DEFAULT_OBJECT,
    options = DEFAULT_OBJECT,
    onEdit: onEditProps = DEFAULT_FUNCTION,
    isEditing,
    ActionButtons
}) => {
    const classes = useStyles(styles);

    const onEdit = useCallback(newData => {
        if (typeof onEditProps === 'function') {
            onEditProps(newData);
            return;
        }
    }, []);
    const store = {
        technologies: useReducer(technologiesReducer, technologiesInitialState)
    };
    const context = useMemo(() => {
        console.log('on usememoise le contexte dans DeveloperProfileComponent');
        return {
            data,
            isEditing: false,
            onEdit,
            apiKeys: { giphy: options?.apiKeys?.giphy },
            store,
            endpoints: {
                devicons: options?.endpoints?.devicons
            }
        };
    }, [options, data, onEdit, store]);

    return (
        <div className={classes.container}>
            <DeveloperProfileContext.Provider value={context}>
                <Banner>{ActionButtons}</Banner>
                <Cards />
            </DeveloperProfileContext.Provider>
        </div>
    );
};

const WithProvidersDeveloperProfile = ({ data, onEdit, options = {}, ActionButtons, isEditing }) => {
    const { locale, theme } = useMemo(() => ({ ...DEFAULT_OPTIONS, ...options }), [options]);
    const [builtTheme, setBuiltTheme] = useState(null);

    useEffect(() => {
        const asyncBuild = async () => {
            const built = await buildTheme(theme);
            console.log('🎨 Built theme:', built);
            setBuiltTheme(built);
        };
        asyncBuild();
    }, [JSON.stringify(options)]);

    if (!builtTheme) {
        return null;
    }

    return (
        <ThemeProvider theme={builtTheme}>
            <IntlProvider locale={locale}>
                <DeveloperProfileComponent
                    isEditing={isEditing}
                    data={data}
                    onEdit={onEdit}
                    options={options}
                    ActionButtons={ActionButtons}
                />
            </IntlProvider>
        </ThemeProvider>
    );
};

export const DeveloperProfile = WithProvidersDeveloperProfile;
