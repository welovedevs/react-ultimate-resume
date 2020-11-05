import { createStyles, Theme } from '@material-ui/core/styles';

type StylesKeys = 'container';

export type Classes = {
    [key in StylesKeys]?: string;
};

export const styles = ({ spacing }: Theme) =>
    createStyles({
        container: {
            position: 'absolute',
            bottom: 5,
            left: 5,
            display: 'flex',
            alignItems: 'center'
        },
        img: {
            width: 18,
            height: 18,
            borderRadius: 5
        },
        logo: {
            fill: 'white',
            width: 16,
            height: 16
        },
        typography: {
            fontSize: 10,
            fontWeight: 700 as any,
            margin: spacing(0, 1),
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: 80
        }
    });
