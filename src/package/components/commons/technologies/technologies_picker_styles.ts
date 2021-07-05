import { createStyles, Theme } from '@material-ui/core/styles';
import { withCustomVerticalScrollbar } from '../../../utils/styles/styles_utils';
import { dark } from '@welovedevs/ui/styles/palettes';

type StylesKeys = '';

export type Classes = {
    [key in StylesKeys]?: string;
};

export const styles = ({ spacing }: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            height: '100%'
        },
        column: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
        },
        allTechnologies: {
            flex: 1.25,
            marginLeft: spacing(2),
            '@media screen and (max-width: 500px)': {
                width: '100%'
            }
        },
        divider: {
            backgroundColor: dark[100],
            margin: spacing(0, 2, 0, 4)
        },
        technologiesList: {
            overflowY: 'auto',
            overflowX: 'hidden',
            paddingRight: spacing(2),
            ...(withCustomVerticalScrollbar() as any)
        },
        selectedTechnologies: {
            flex: 1
        }
    });
