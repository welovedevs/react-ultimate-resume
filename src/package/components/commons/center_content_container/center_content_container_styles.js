import { flex } from '../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = {
    container: ({ minus }) => ({
        height: minus ? `calc(100% - ${minus}px)` : '100%',
        width: '100%',
        ...center
    })
};
