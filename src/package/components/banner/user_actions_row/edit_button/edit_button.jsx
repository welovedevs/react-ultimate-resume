import React, { useCallback, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { createUseStyles, useTheme } from 'react-jss';
import { Button } from '@wld/ui';

import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { ReactComponent as EditIcon } from '../../../../assets/icons/edit.svg';
import { ReactComponent as CheckIcon } from '../../../../assets/icons/success.svg';
import { styles } from './edit_button_styles';

const useStyles = createUseStyles(styles);

export const EditButton = () => {
    const { isEditing, setIsEditing } = useContext(DeveloperProfileContext);
    const theme = useTheme();
    const classes = useStyles(theme);

    const handleClick = useCallback(() => setIsEditing(!isEditing), [isEditing]);

    if (!isEditing) {
        return (
            <Button variant="outlined" color="light" onClick={handleClick}>
                <EditIcon className={classes.penIcon} />
                <FormattedMessage id="Main.lang.edit" defaultMessage="Edit" />
            </Button>
        );
    }
    return (
        <Button variant="outlined" color="light" onClick={handleClick}>
            <CheckIcon className={classes.checkIcon} />
            <FormattedMessage id="Main.lang.stopEdit" defaultMessage="Stop edit" />
        </Button>
    );
};
