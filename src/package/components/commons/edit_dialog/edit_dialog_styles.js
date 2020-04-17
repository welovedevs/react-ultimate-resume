import { withCustomVerticalScrollbar } from '../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        paper: {
            width: '90%',
            maxWidth: [650, '!important']
        },
        content: {
            overflowX: 'hidden',
            ...withCustomVerticalScrollbar()
        },
        actions: {},
        mobile: {},
        fullScreen: {
            '&:not($mobile) $actions': {
                paddingRight: spacing * 3
            }
        },
        titleContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            '& > *:first-child:not(:last-child)': {
                marginRight: spacing * 2
            },
            '& > *:last-child:not(:first-child)': {
                marginLeft: spacing * 2
            }
        }
    };
};
