import React, { useCallback, useContext, useMemo } from 'react';
import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { StudiesFront } from './studies_front/studies_front';
import { StudiesBack } from './studies_back/studies_back';
import { mapStudiesFromJsonResume, mapStudiesToJsonResume } from './data/mapping';
import { StudiesCardEditDialog } from './edit_dialog/studies_card_edit_dialog';
import { StudiesValidator, validateStudiesComplete } from './data/validator';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { useCallbackOpen } from '../../../hooks/use_callback_open';

const StudiesCardComponent = ({ variant, side }) => {
    const { data, onEdit, isEditing, mode } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapStudiesFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(mapStudiesToJsonResume(editedData));
    }, []);

    const [openNewEducationDialog, setNewEducationDialogOpened] = useCallbackOpen();

    const isComplete = useMemo(() => validateStudiesComplete(mappedData), [mappedData]);

    if (!isComplete && mode !== 'edit') {
        return null;
    }

    return (
        <ProfileCard
            data={mappedData}
            isComplete={isComplete}
            isEditingProfile={isEditing}
            sides={{
                front: props => <StudiesFront handleAddButtonClick={setNewEducationDialogOpened} {...props} />,
                back: props => <StudiesBack handleAddButtonClick={setNewEducationDialogOpened} {...props} />
            }}
            openEditDialog={openNewEducationDialog}
            editDialog={{
                component: StudiesCardEditDialog,
                validationSchema: StudiesValidator,
                onEdit: onDialogEdited
            }}
            variant={variant}
            side={side}
        />
    );
};

export const StudiesCard = StudiesCardComponent;
