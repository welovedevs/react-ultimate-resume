import React, { createContext, useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { createUseStyles, ThemeProvider } from 'react-jss';

import { buildTheme } from '../utils/styles/theme/theme';

import { prepareJsonResume } from '../utils/data/resume';
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

const DeveloperProfileComponent = ({ data: dataProps = {}, options = {}, onEdit: onEditProps = () => {} }) => {
    const classes = useStyles(styles);
    const [isEditing, setIsEditing] = useState(true);
    const data = useMemo(() => {
        return prepareJsonResume(dataProps);
    }, [JSON.stringify(dataProps)]);

    const onEdit = useCallback(newData => {
        if (typeof onEditProps === 'function') {
            onEditProps(newData);
            return;
        }
    }, []);

    return (
        <div className={classes.container}>
            <DeveloperProfileContext.Provider
                value={{
                    data,
                    isEditing,
                    onEdit,
                    apiKeys: { giphy: options.apiKeys.giphy },
                    endpoints: {
                        devicons: options.endpoints.devicons
                    },
                    store: {
                        technologies: useReducer(technologiesReducer, technologiesInitialState)
                    }
                }}
            >
                <Banner />
                <Cards />
            </DeveloperProfileContext.Provider>
        </div>
    );
};

const WithProvidersDeveloperProfile = ({ data, onEdit, options = {} }) => {
    const { locale, theme } = useMemo(() => ({ ...DEFAULT_OPTIONS, ...options }), [options]);
    const [builtTheme, setBuiltTheme] = useState(null);

    useEffect(() => {
        const asyncBuild = async () => {
            const built = await buildTheme(theme);
            console.log('🎨 Built theme:', built);
            setBuiltTheme(built);
        };
        asyncBuild();
    }, [options]);

    if (!builtTheme) {
        return null;
    }

    return (
        <ThemeProvider theme={builtTheme}>
            <IntlProvider locale={locale}>
                <DeveloperProfileComponent data={data} onEdit={onEdit} options={options} />
            </IntlProvider>
        </ThemeProvider>
    );
};

export const DeveloperProfile = WithProvidersDeveloperProfile;
