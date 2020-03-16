import { Button } from '@wld/ui';

import React from 'react';

const NoDataButtonComponent = ({ handleAddButtonClick, children, classes: receivedClasses = {} }) => (
        <Button
            customClasses={{
                container: receivedClasses.container
            }}
            color="primary"
            variant="outlined"
            onClick={handleAddButtonClick}
        >
            {children}
        </Button>
    );

export const NoDataButton = NoDataButtonComponent;
