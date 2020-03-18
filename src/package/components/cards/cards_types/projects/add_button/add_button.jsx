import { FormattedMessage } from 'react-intl';

import { Button } from '@wld/ui';

import React from 'react';

const AddButtonComponent = ({ handleAddButtonClick, classes: receivedClasses = {} }) => (
        <Button
            customClasses={{
                container: receivedClasses.container
            }}
            color="primary"
            variant="outlined"
            onClick={handleAddButtonClick}
        >
            <FormattedMessage
                id="Projects.noProject.buttonLabel"
                defaultMessage="Add a project"
            />
        </Button>
    );

export const AddButton = AddButtonComponent;
