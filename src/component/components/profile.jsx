import '../main_style.css';

import React from 'react';
import { IntlProvider } from 'react-intl';
import { createUseStyles, ThemeProvider } from 'react-jss';

import JsonStub from '../../data/json_stub.json';
import { BasicCard } from './cards/basics/basic_card';
import { buildTheme } from '../utils/styles/theme';

import styles from './profile_styles';
import { prepareJsonResume } from '../utils/data/resume';

const useStyles = createUseStyles(styles);

const DeveloperProfileElements = ({ options }) => {
    const classes = useStyles(styles);
    const { flipped } = options;

    const data = prepareJsonResume(JsonStub);
    return (
        <div className={classes.grid}>
            <BasicCard flipped={flipped} data={data} variant={0} />
            <BasicCard flipped={flipped} data={data} />
        </div>
    );
};
export const DeveloperProfile = ({ options = {} }) => (
    <ThemeProvider theme={buildTheme(options.theme)}>
        <IntlProvider locale={options.locale || 'en'}>
            <DeveloperProfileElements {...{ options }} />
        </IntlProvider>
    </ThemeProvider>
);
