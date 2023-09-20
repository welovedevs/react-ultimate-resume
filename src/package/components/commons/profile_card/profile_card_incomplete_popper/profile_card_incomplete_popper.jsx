import React, { memo, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { PopperCard, Typography } from '@welovedevs/ui';

import { ReactComponent as WarnIcon } from '../../../../assets/icons/warn.svg';
import { useMode } from '../../../hooks/use_mode';

const ProfileCardIncompletePopperComponent = ({ open, onClose, anchorElement }) => {
    const [hasBeenMounted, setHasBeenMouneted] = useState(false);
    const [mode] = useMode();

    useEffect(() => setHasBeenMouneted(true), []);

    if (mode !== 'edit' || !open || !hasBeenMounted) {
        return null;
    }

    return (
        <PopperCard
            classes={{
                container: 'bg-danger-400 ',
                arrowContainer: 'text-danger-400 '
            }}
            open={open}
            onClose={onClose}
            anchorElement={anchorElement}
            popperProps={{
                placement: 'top-start',
                disablePortal: true,
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, -36]
                        }
                    },
                    {
                        name: 'preventOverflow'
                    },
                    {
                        name: 'hide'
                    },
                    {
                        name: 'flip',
                        enabled: false
                    }
                ]
            }}
        >
            <Typography color="light" className="flex items-center">
                <WarnIcon className="mr-1 w-3 h-3 fill-current" />
                <FormattedMessage
                    id="ProfileCardIncompletePopper.label.value"
                    defaultMessage="This card is missing data"
                />
            </Typography>
        </PopperCard>
    );
};

export const ProfileCardIncompletePopper = memo(ProfileCardIncompletePopperComponent);
