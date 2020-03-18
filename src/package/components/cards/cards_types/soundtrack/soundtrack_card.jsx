import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { SoundtrackFront } from './soundtrack_front/soundtrack_front';
import { SoundtrackBack } from './soundtrack_back/soundtrack_back';
import { FlatObjectToJsonResume, JsonResumeToFlatObject } from '../../utils/data_mapping';
import { SoundtrackCardEditDialog } from './edit_dialog/soundtrack_card_edit_dialog';
import { SoundtrackMapping } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { SoundtrackValidationSchema, validateSoundtrackComplete } from './data/validator';
import { useCallbackOpen } from '../../../hooks/use_callback_open';

const SoundtrackCardComponent = ({ variant, side }) => {
    const { data, isEditing, onEdit, setIsEditing, mode } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => JsonResumeToFlatObject(data, SoundtrackMapping), [data]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(FlatObjectToJsonResume(editedData, SoundtrackMapping));
    }, []);

    const [openNewSoundtrackDialog, setNewSoundTrackDialogOpened, setNewSoundTrackDialogClosed] = useCallbackOpen();

    const handleAddButtonClick = useCallback(() => {
        setIsEditing(true);
        setNewSoundTrackDialogOpened();
    }, [onEdit]);

    const isComplete = useMemo(() => validateSoundtrackComplete(mappedData), [mappedData]);

    if (!isComplete && mode !== 'edit') {
        return null;
    }

    return (
        <ProfileCard
            isComplete={isComplete}
            isEditingProfile={isEditing}
            data={mappedData}
            callbackEditDialogClosed={setNewSoundTrackDialogClosed}
            sides={{
                front: (props) => <SoundtrackFront handleAddButtonClick={handleAddButtonClick} {...props} />,
                back: (props) => <SoundtrackBack handleAddButtonClick={handleAddButtonClick} {...props} />
            }}
            editDialog={{
                component: SoundtrackCardEditDialog,
                onEdit: onDialogEdited,
                validationSchema: SoundtrackValidationSchema
            }}
            openEditDialog={openNewSoundtrackDialog}
            variant={variant}
            side={side}
            isTransitionUnique={false}
        />
    );
};

export const SoundtrackCard = SoundtrackCardComponent;
