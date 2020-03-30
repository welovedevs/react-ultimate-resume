import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'react-jss';
import { IntlProvider } from 'react-intl';

import en from '../../../i18n/en.json';
import { buildTheme } from '../../../utils/styles/theme/theme';

import { ConfirmDialog } from './confirm_dialog';

const Providers = ({ children }) => (
    <ThemeProvider theme={buildTheme()}>
        <IntlProvider locale="en" defaultLocale="en" messages={en}>
            {children}
        </IntlProvider>
    </ThemeProvider>
);

describe('<ConfirmDialog />', () => {
    it('should render with the default title', () => {
        const screen = render(
            <Providers>
                <ConfirmDialog open />
            </Providers>
        );

        expect(screen.getByText('Are you sure?')).toBeInTheDocument();
    });

    it('should call the onClose function when click close', () => {
        const onClose = jest.fn();
        const screen = render(
            <Providers>
                <ConfirmDialog open onClose={onClose} />
            </Providers>
        );

        fireEvent.click(screen.getByText('Close'));

        expect(onClose).toHaveBeenCalled();
    });
});
