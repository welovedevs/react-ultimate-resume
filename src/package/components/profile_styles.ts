import { createStyles, Theme } from '@material-ui/core/styles';
import { theme } from '../../index';
import { DEFAULT_THEME } from '../utils/styles/theme/theme';

type StylesKeys = 'container';

export type Classes = {
    [key in StylesKeys]?: string;
};

export const styles = ({ spacing }: Theme) =>
    createStyles({
        '@global': {
            '*': {
                'box-sizing': 'border-box'
            },
            a: {
                textDecoration: 'none',
                color: 'inherit'
            },
            '*:focus': {
                outline: 'none'
            },
            textarea: {
                resize: 'none'
            },
            button: {
                background: 'none',
                color: 'inherit',
                border: 'none',
                padding: 0,
                font: 'inherit',
                cursor: 'pointer',
                outline: 'inherit'
            },
            'h1, h2, h3, h4, h5, h6': {
                margin: 0
            }
        },
        container: {
            minHeight: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 0,
            padding: 0,
            fontFamily: (DEFAULT_THEME as any).fontFamily,
            backgroundColor: (DEFAULT_THEME as any).backgroundColor,
            color: (DEFAULT_THEME as any).color
        }
    });
