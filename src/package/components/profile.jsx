import React, { useMemo, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { createUseStyles, ThemeProvider } from 'react-jss';

import JsonStub from '../../data/json_stub.json';
import { buildTheme } from '../utils/styles/theme/theme';

import { prepareJsonResume } from '../utils/data/resume';
import { Banner } from './banner/banner';

import { styles } from './profile_styles';

const useStyles = createUseStyles(styles);

const DEFAULT_OPTIONS = Object.freeze({
    locale: 'en'
});

const DeveloperProfileComponent = ({ options }) => {
    const classes = useStyles(styles);
    const data = prepareJsonResume(JsonStub);
    return (
        <div className={classes.container}>
            <Banner />
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
