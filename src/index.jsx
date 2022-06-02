/* eslint-disable */
import {createRoot} from 'react-dom/client';

import App from './App';

import './package/styles/global.css';
import './styles/animations.css';
import './styles/tailwind.css';
import {DEFAULT_THEME} from '@welovedevs/ui';

import {createTheme, ThemeProvider, StyledEngineProvider} from '@mui/material/styles';
import MuiStylesProvider from '@mui/styles/StylesProvider';
import {create} from 'jss';
import {JssProvider} from 'react-jss';
import jssDefaultPreset from 'jss-preset-default';

const muiInstance = create(jssDefaultPreset());
muiInstance.setup({insertionPoint: 'mui-insertion-point'});
const jssinstance = create(jssDefaultPreset());
jssinstance.setup({insertionPoint: 'jss-insertion-point'});


export const theme = createTheme({
    spacing: 8,
    palette: Object.entries(DEFAULT_THEME.palette).reduce((acc, [name, values]) => {
        const accCopy = acc;
        accCopy[name].main = values[500];
        return accCopy;
    }, DEFAULT_THEME.palette)
});

const container = document.getElementById('root') || document.createElement('div');
const root = createRoot(container);

root.render(<MuiStylesProvider jss={muiInstance}>
    <JssProvider jss={jssinstance}>
        <App/>
    </JssProvider>
</MuiStylesProvider>);

