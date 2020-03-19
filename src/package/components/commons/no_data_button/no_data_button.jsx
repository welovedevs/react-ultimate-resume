import { Button } from '@wld/ui';

import React from 'react';

const NoDataButtonComponent = ({ handleAddButtonClick, children, classes: receivedClasses = {} }) => (
    <Button
        customClasses={{
            container: receivedClasses.container
        }}
        style={{
            color: 'inherit'
        }}
        variant="outlined"
        onClick={handleAddButtonClick}
    >
        {children}
    </Button>
);

export const NoDataButton = NoDataButtonComponent;
