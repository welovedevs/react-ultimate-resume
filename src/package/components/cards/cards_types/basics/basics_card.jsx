import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';

import { BasicsBack } from './basics_back/basics_back';
import { mapBasicsDataToJsonResume, mapJsonResumeToBasicData } from './data/mapping';

import { BasicsCardEditDialog } from './basics_edit_dialog/basic_edit_dialog';
import { BasicsValidationSchema, validateBasicsComplete } from './data/validator';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { BasicsFront } from './basics_front/basics_front';
import { useCallbackOpen } from '../../../hooks/use_callback_open';

const BasicsCardComponent = ({ variant, side }) => {
    const { data, isEditing, onEdit, setIsEditing, mode } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapJsonResumeToBasicData(data), [data]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(mapBasicsDataToJsonResume(editedData));
    }, []);

    const [openNewDescriptionDialog, setNewDescriptionDialogOpened, setNewDescriptionDialogClosed] = useCallbackOpen();

    const handleAddButtonClick = useCallback(() => {
        setIsEditing(true);
        setNewDescriptionDialogOpened();
    }, [onEdit]);

    const isComplete = useMemo(() => validateBasicsComplete(mappedData), [mappedData]);

    if (!isComplete && mode !== 'edit') {
        return null;
    }

    return (
        <>
            <ProfileCard
                data={mappedData}
                isEditingProfile={isEditing}
                editDialog={{
                    component: BasicsCardEditDialog,
                    validationSchema: BasicsValidationSchema,
                    onEdit: onDialogEdited
                }}
                openEditDialog={openNewDescriptionDialog}
                callbackEditDialogClosed={setNewDescriptionDialogClosed}
                sides={{
                    front: (props) => <BasicsFront handleAddButtonClick={handleAddButtonClick} {...props} />,
                    back: (props) => <BasicsBack handleAddButtonClick={handleAddButtonClick} {...props} />
                }}
                variant={variant}
                isComplete={isComplete}
                side={side}
            />
        </>
    );
};

export const BasicsCard = BasicsCardComponent;
