/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { DEFAULT_THEME } from '@welovedevs/ui/styles/theme';
import { StylesProvider as MuiStylesProvider, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './styles/global.css';
import './styles/animations.css';
import { create } from 'jss';
import { JssProvider, ThemeProvider as ReactJSSThemeProvider } from 'react-jss';
import jssDefaultPreset from 'jss-preset-default';

const muiInstance = create(jssDefaultPreset());
muiInstance.setup({ insertionPoint: 'mui-insertion-point' });
const jssinstance = create(jssDefaultPreset());
jssinstance.setup({ insertionPoint: 'jss-insertion-point' });

export const theme = createMuiTheme({
    ...DEFAULT_THEME,
    spacing: 8,
    palette: Object.entries(DEFAULT_THEME.palette).reduce((acc, [name, values]) => {
        const accCopy = acc;
        accCopy[name].main = values[500];
        return accCopy;
    }, DEFAULT_THEME.palette)
});

ReactDOM.render(
    <MuiStylesProvider jss={muiInstance}>
        <JssProvider jss={jssinstance}>
            <ThemeProvider {...{ theme }}>
                <App />
            </ThemeProvider>
        </JssProvider>
    </MuiStylesProvider>,
    document.getElementById('root')
);
