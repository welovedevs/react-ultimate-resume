import React, { useCallback, useState } from 'react';
import copy from 'copy-to-clipboard';
import { FormattedMessage } from 'react-intl';
import { Portal, Snackbar } from '@material-ui/core';

const mergeOnClicks = (...fns) => (...args) => {
    fns.forEach((fn) => {
        if (typeof fn === 'function') {
            fn(args);
        }
    });
};

const CopyWrapperComponent = ({ value, children }) => {
    const [showSnack, setShowSnack] = useState(false);

    const handleCopyToClipboardClick = useCallback(() => {
        copy(value);
        setShowSnack(true);
    }, [value]);

    return (
        <>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    ...child.props,
                    onClick: mergeOnClicks(handleCopyToClipboardClick, child.props.onClick)
                })
            )}
            <Portal>
                <Snackbar
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    open={showSnack}
                    message={<FormattedMessage id="Main.lang.copied" defaultMessage="Copied in your clipboard" />}
                    autoHideDuration={5000}
                    onClose={() => setShowSnack(false)}
                />
            </Portal>
        </>
    );
};

export const CopyWrapper = CopyWrapperComponent;
