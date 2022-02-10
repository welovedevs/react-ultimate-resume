import { Typography } from '@welovedevs/ui';
import get from 'lodash/get';
export const ErrorsDisplay: React.FC<{ errors: string | any; path: string; classes?: { container?: string } }> = ({
    errors,
    path,
    classes
}) => {
    const error = get(errors, path);
    if (!error) {
        return null;
    }
    return (
        <Typography classes={{ container: classes?.container }} color="danger" variant="helper">
            {error}
        </Typography>
    );
};
