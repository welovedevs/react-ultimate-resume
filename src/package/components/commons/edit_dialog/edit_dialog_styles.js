import { withCustomVerticalScrollbar } from '../../../utils/styles/styles_utils';

export const styles = ({
    paper: {
        width: '90%',
        maxWidth: [650, '!important']
    },
    content: {
        overflowX: 'hidden',
        ...withCustomVerticalScrollbar()
    }
});
