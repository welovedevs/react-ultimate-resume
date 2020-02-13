import React from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { PopperCard, Typography } from '@wld/ui';

import { ReactComponent as WarnIcon } from '../../../../assets/icons/warn.svg';

import { styles } from './profile_card_incomplete_popper_styles';

const useStyles = createUseStyles(styles);

const ProfileCardIncompletePopperComponent = ({ open, onClose, anchorElement }) => {
    const classes = useStyles();
    return (
        <PopperCard
            customClasses={{
                container: classes.container,
                arrowContainer: classes.arrowContainer
            }}
            open={open}
            onClose={onClose}
            anchorElement={anchorElement}
            popperProps={{
                placement: 'top-start',
                disablePortal: true,
                modifiers: {
                    preventOverflow: {
                        enabled: false
                    },
                    flip: {
                        behavior: ['top-start']
                    }
                }
            }}
        >
            <WarnIcon
                className={classes.icon}
            />
            <Typography
                color="light"
            >
                <FormattedMessage
                    id="ProfileCardIncompletePopper.label.value"
                    defaultMessage="Cette carte n'est pas complète."
                />
            </Typography>
        </PopperCard>
    );
};

export const ProfileCardIncompletePopper = ProfileCardIncompletePopperComponent;
