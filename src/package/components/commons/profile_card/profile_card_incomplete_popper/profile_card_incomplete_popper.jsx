import React from 'react';

import { createUseStyles } from 'react-jss';

import { PopperCard } from '@wld/ui';

import { styles } from './profile_card_incomplete_popper_styles';

const useStyles = createUseStyles(styles);

const ProfileCardIncompletePopperComponent = ({ open, onClose, anchorElement }) => {
    const classes = useStyles();
    console.log({ classes });
    return (
        <PopperCard
            open={open}
            onClose={onClose}
            anchorElement={anchorElement}
            popperProps={{
                placement: 'top',
                disablePortal: true,
                modifiers: {
                    preventOverflow: {

                    },
                    flip: {
                        behavior: ['top']
                    }
                }
            }}
        />
    );
};

export const ProfileCardIncompletePopper = ProfileCardIncompletePopperComponent;
