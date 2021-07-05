import { flex } from '../../../../utils/styles/styles_utils';
import { createStyles, Theme } from '@material-ui/core/styles';
import { primary } from '@welovedevs/ui/styles';

const { center } = flex;

type StylesKeys = 'container' | 'technologiesList';

export type Classes = {
    [key in StylesKeys]?: string;
};

export const styles = ({ spacing }: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column'
        },
        textField: {
            minHeight: 'fit-content',
            minWidth: 400,
            marginBottom: spacing(3),
            '@media screen and (max-width: 500px)': {
                minWidth: 'unset'
            }
        },
        technologiesList: {
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: spacing(-2),
            '@media screen and (max-width: 500px)': {
                justifyContent: 'center',
                marginLeft: 'unset'
            }
        },
        technologyItem: {
            width: 80,
            maxWidth: 80,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: spacing(1, 2),
            padding: spacing(1)
        },
        technologyImageContainer: {
            position: 'relative',
            width: '100%',
            minWidth: 80,
            height: 80,
            padding: spacing(1.5),
            marginBottom: spacing(2),
            overflow: 'hidden'
        },
        technologyImage: {
            width: '100%',
            height: '100%',
            objectFit: 'contain'
        },
        typography: {
            width: '100%',
            maxWidth: 80,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            textAlign: 'center',
            whiteSpace: 'nowrap'
        },
        selectedTechnologyLayer: {
            zIndex: 2,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: primary[500],
            color: 'white',
            textAlign: 'center',
            borderRadius: 5,
            ...center
        }
    });
