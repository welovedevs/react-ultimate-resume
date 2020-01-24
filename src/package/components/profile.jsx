import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { createUseStyles, ThemeProvider } from 'react-jss';

import JsonStub from '../../data/json_stub.json';
import { buildTheme } from '../utils/styles/theme/theme';

import { prepareJsonResume } from '../utils/data/resume';
import { Banner } from './banner/banner';
import { Cards } from './cards/cards';

import { styles } from './profile_styles';

import '../styles/lib/slick-carousel/slick-theme.css';
import '../styles/lib/slick-carousel/slick.css';

const useStyles = createUseStyles(styles);

const DEFAULT_OPTIONS = Object.freeze({
    locale: 'en'
});

export const DeveloperProfileContext = createContext({});

const DeveloperProfileComponent = ({ options = {}, onEdit: onEditProps = () => {} }) => {
    const classes = useStyles(styles);
    const [isEditing, setIsEditing] = useState(true);
    const data = useMemo(() => prepareJsonResume(JsonStub), [JsonStub]);

    const onEdit = useCallback(newData => {
        console.log(newData);
    }, []);

    return (
        <div className={classes.container}>
            <DeveloperProfileContext.Provider
                value={{ data, isEditing, onEdit, apiKeys: { giphy: options.apiKeys.giphy } }}
            >
                <Banner />
                <Cards />
            </DeveloperProfileContext.Provider>
        </div>
    );
};

const WithProvidersDeveloperProfile = ({ options = {} }) => {
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
                <DeveloperProfileComponent options={options} />
            </IntlProvider>
        </ThemeProvider>
    );
};

export const DeveloperProfile = WithProvidersDeveloperProfile;
