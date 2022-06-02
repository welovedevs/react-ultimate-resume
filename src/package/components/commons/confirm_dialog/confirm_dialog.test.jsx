import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {JssProvider, ThemeProvider} from 'react-jss';
import {IntlProvider} from 'react-intl';
import '@testing-library/jest-dom';
import {StyledEngineProvider, ThemeProvider as MuiThemeProvider} from '@mui/material/styles';

import en from '../../../i18n/en.json';

import {ConfirmDialog} from './confirm_dialog';
import MuiStylesProvider from "@mui/styles/StylesProvider";
import {create} from "jss";
import jssDefaultPreset from "jss-preset-default";
import {buildTheme} from "../../../utils/styles/theme/theme";

const muiInstance = create(jssDefaultPreset());
muiInstance.setup({insertionPoint: 'mui-insertion-point'});
const jssinstance = create(jssDefaultPreset());
jssinstance.setup({insertionPoint: 'jss-insertion-point'});

const Providers = ({children}) => (
    <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={buildTheme()}>
            <MuiStylesProvider jss={muiInstance}>
                <JssProvider jss={jssinstance}>
                    <IntlProvider locale="en" defaultLocale="en" messages={en}>
                        {children}
                    </IntlProvider>
                </JssProvider>
            </MuiStylesProvider>
        </MuiThemeProvider>
    </StyledEngineProvider>
)


describe('<ConfirmDialog />', () => {
    it('should render with the default title', () => {
        const screen = render(
            <Providers>
                <ConfirmDialog open/>
            </Providers>
        );

        expect(screen.getByText('Are you sure?')).toBeInTheDocument();
    });

    it('should call the onClose function when click close', () => {
        const onClose = jest.fn();
        const screen = render(
            <Providers>
                <ConfirmDialog open onClose={onClose}/>
            </Providers>
        );

        fireEvent.click(screen.getByText('Close'));

        expect(onClose).toHaveBeenCalled();
    });
});
