import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { SoundtrackFront } from './soundtrack_front/soundtrack_front';
import { SoundtrackBack } from './soundtrack_back/soundtrack_back';
import { FlatObjectToJsonResume, JsonResumeToFlatObject } from '../../utils/data_mapping';
import { SoundtrackCardEditDialog } from './edit_dialog/soundtrack_card_edit_dialog';
import { SoundtrackMapping } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { SoundtrackValidationSchema, validateSoundtrackComplete } from './data/validator';
import { SIDES } from '../../../commons/profile_card/profile_card_side/side';
import { useMode } from '../../../hooks/use_mode';

const SoundtrackCardComponent = ({ variant, side }) => {
    const [mode] = useMode();
    const { data, isEditing, onEdit } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => JsonResumeToFlatObject(data, SoundtrackMapping), [data]);

    const onDialogEdited = useCallback(
        (editedData) => {
            onEdit(FlatObjectToJsonResume(editedData, SoundtrackMapping));
        },
        [onEdit]
    );

    const isComplete = useMemo(() => validateSoundtrackComplete(mappedData), [mappedData]);

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
            kind="soundtrack"
            isComplete={isComplete}
            isEditingProfile={isEditing}
            data={mappedData}
            sides={{
                front: (props) => <SoundtrackFront {...props} />,
                back: (props) => <SoundtrackBack {...props} />
            }}
            editDialog={{
                component: SoundtrackCardEditDialog,
                onEdit: onDialogEdited,
                validationSchema: SoundtrackValidationSchema
            }}
            variant={variant}
            side={currentSide}
        />
    );
};

export const SoundtrackCard = SoundtrackCardComponent;
