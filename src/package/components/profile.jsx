import React, { useMemo } from 'react';
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

    const profileTheme = useMemo(() => {
        const built = buildTheme(theme);
        console.log('Built theme:', built);
        return built;
    }, [options]);

    return (
        <ThemeProvider theme={profileTheme}>
            <IntlProvider locale={locale}>
                <DeveloperProfileComponent {...{ options }} />
            </IntlProvider>
        </ThemeProvider>
    );
};

export const DeveloperProfile = WithProvidersDeveloperProfile;
