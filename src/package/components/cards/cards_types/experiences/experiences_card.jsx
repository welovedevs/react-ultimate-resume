import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { ExperiencesFront } from './experiences_front/experiences_front';
import { ExperiencesBack } from './experiences_back/experiences_back';
import { ExperiencesEditDialog } from './experiences_edit_dialog/experiences_edit_dialog';
import { validateWorkComplete, WorkValidator } from './data/validator';

import { mapWorkFromJsonResume, mapWorkToJsonResume } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { useCallbackOpen } from '../../../hooks/use_callback_open';
import { SIDES } from '../../../commons/profile_card/profile_card_side/side';

const ExperiencesCardComponent = ({ variant, side }) => {
    const { data, onEdit, isEditing, mode } = useContext(DeveloperProfileContext);

    const mappedData = useMemo(() => mapWorkFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(editedData => onEdit(mapWorkToJsonResume(editedData)), []);

    const [openNewWorkDialog, setNewWorkDialogOpened, setNewWorkDialogClosed] = useCallbackOpen();

    const handleAddButtonClick = useCallback(() => {
        setNewWorkDialogOpened();
    }, [onEdit]);

    const isComplete = useMemo(() => validateWorkComplete(mappedData), [mappedData]);

    const currentSide = useMemo(() => {
        if (!isComplete && !isEditing) {
            return SIDES.FRONT;
        }
        return side;
    }, [side, isComplete, isEditing]);

    if (!isComplete && mode !== 'edit') {
        return null;
    }
    return (
        <ProfileCard
            isEditingProfile={isEditing || openNewWorkDialog}
            isComplete={isComplete}
            data={mappedData}
            callbackEditDialogClosed={setNewWorkDialogClosed}
            sides={{
                front: (props) => <ExperiencesFront handleAddButtonClick={handleAddButtonClick} {...props} />,
                back: (props) => <ExperiencesBack handleAddButtonClick={handleAddButtonClick} {...props} />
            }}
            openEditDialog={openNewWorkDialog}
            editDialog={{
                component: ExperiencesEditDialog,
                validationSchema: WorkValidator,
                onEdit: onDialogEdited
            }}
            variant={variant}
            side={currentSide}
        />
    );
};

export const ExperiencesCard = ExperiencesCardComponent;
