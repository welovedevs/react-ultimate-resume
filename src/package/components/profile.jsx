import React, { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { createUseStyles, ThemeProvider } from 'react-jss';

import JsonStub from '../../data/json_stub.json';
import { BasicCard } from './cards/basics/basic_card';
import { buildTheme } from '../utils/styles/theme';

import { styles } from './profile_styles';
import { prepareJsonResume } from '../utils/data/resume';

const useStyles = createUseStyles(styles);

const DEFAULT_OPTIONS = Object.freeze({
    locale: 'en'
});

const DeveloperProfileElements = ({ options }) => {
    const classes = useStyles(styles);
    const { flipped } = options;

    const data = prepareJsonResume(JsonStub);
    return (
        <div className={classes.container}>
            {/*<BasicCard flipped={flipped} data={data} variant={0} />*/}
            {/*<BasicCard flipped={flipped} data={data} />*/}
            coucou
        </div>
    );
};
export const DeveloperProfile = ({ options = {} }) => {
    const { locale, theme } = useMemo(() => ({ ...DEFAULT_OPTIONS, ...options }), [options]);

    const profileTheme = useMemo(() => {
        const built = buildTheme(theme);
        console.log('Built theme:', built);
        return built;
    }, [options]);

    return (
        <ThemeProvider theme={profileTheme}>
            <IntlProvider locale={locale}>
                <DeveloperProfileElements {...{ options }} />
            </IntlProvider>
        </ThemeProvider>
    );
};
