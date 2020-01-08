import React from 'react';
import { IntlProvider } from 'react-intl';
import { createUseStyles, ThemeProvider } from 'react-jss';

import JsonStub from '../../data/json_stub.json';
import { BasicCard } from './cards/basics/basic_card';
import { buildTheme } from '../utils/styles/theme';

import styles from './profile_styles';
import { prepareJsonResume } from '../utils/data/resume';

const useStyles = createUseStyles(styles);

export const DeveloperProfile = ({ options = {} }) => {
    const classes = useStyles(styles);

    const data = prepareJsonResume(JsonStub);
    return (
        <ThemeProvider theme={buildTheme(options.theme)}>
            <IntlProvider locale={options.locale || 'en'}>
                <div className={classes.grid}>
                    <BasicCard data={data} variant={0} />
                    <BasicCard data={data} />
                </div>
            </IntlProvider>
        </ThemeProvider>
    );
};
