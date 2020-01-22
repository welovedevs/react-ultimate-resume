import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { createUseStyles, ThemeProvider } from 'react-jss';

import JsonStub from '../../data/json_stub.json';
import { buildTheme } from '../utils/styles/theme/theme';

import { prepareJsonResume } from '../utils/data/resume';
import { Banner } from './banner/banner';
import { Cards } from './cards/cards';

import { styles } from './profile_styles';
import { FlatObjectToJsonResume } from './cards/utils/data_mapping';

const useStyles = createUseStyles(styles);

const DEFAULT_OPTIONS = Object.freeze({
    locale: 'en'
});

export const DeveloperProfileContext = createContext({});

const DeveloperProfileComponent = ({ options, onEdit: onEditProps = () => {} }) => {
    const classes = useStyles(styles);
    const [isEditing, setIsEditing] = useState(false);
    const data = useMemo(() => prepareJsonResume(JsonStub), [JsonStub]);

    const onEdit = useCallback(
        dataMapping => newData => {
            onEditProps(FlatObjectToJsonResume(newData, dataMapping));
            // setIsEditing(false);
        },
        []
    );

    return (
        <div className={classes.container}>
            <DeveloperProfileContext.Provider value={{ data, isEditing, onEdit }}>
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
            console.log('Built theme:', built);
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
