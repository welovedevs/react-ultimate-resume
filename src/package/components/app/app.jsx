import React, { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { createUseStyles, ThemeProvider } from 'react-jss';

import { buildTheme } from '../../utils/styles/theme';

import styles from './app_styles';

const useStyles = createUseStyles(styles);

const DEFAULT_OPTIONS = Object.freeze({
    locale: 'en'
});

const AppComponent = ({ options = DEFAULT_OPTIONS }) => {
    const classes = useStyles();
    const theme = useMemo(() => buildTheme(options?.theme), [options]);
    return (
        <ThemeProvider theme={theme}>
            <IntlProvider locale={options.locale || 'en'}>
                {'coucou'}
            </IntlProvider>
        </ThemeProvider>
    );
};

export const App = AppComponent;
