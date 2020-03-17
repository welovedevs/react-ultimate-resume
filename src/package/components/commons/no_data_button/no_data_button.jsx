import { Button } from '@wld/ui';

import React from 'react';

const NoDataButtonComponent = ({
    handleAddButtonClick,
    color = 'primary',
    children,
    classes: receivedClasses = {}
}) => (
    <Button
        customClasses={{
            container: receivedClasses.container
        }}
        color={color}
        variant="outlined"
        onClick={handleAddButtonClick}
    >
        {children}
    </Button>
);

export const NoDataButton = NoDataButtonComponent;
