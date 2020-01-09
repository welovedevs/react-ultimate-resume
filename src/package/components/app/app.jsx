import React, { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { createUseStyles, ThemeProvider } from 'react-jss';

import { buildTheme } from '../../utils/styles/theme';

import { styles } from './app_styles';

const useStyles = createUseStyles(styles);

const DEFAULT_OPTIONS = Object.freeze({
    locale: 'en'
});

const WithProvidersApplication = (props) => {
    const { options = DEFAULT_OPTIONS } = props;
    const theme = useMemo(() => {
        const built = buildTheme(options?.theme);
        console.log('Built theme:', built);
        return built;
    }, [options]);
    return (
        <ThemeProvider theme={theme}>
            <IntlProvider locale={options.locale || 'en'}>
                <Application />
            </IntlProvider>
        </ThemeProvider>
    );
};

const Application = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            coucou
        </div>
    );
};

export const App = WithProvidersApplication;
