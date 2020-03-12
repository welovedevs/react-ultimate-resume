import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { DreamJobFront } from './dream_job_front/dream_job_front';
import { DreamJobBack } from './dream_job_back/dream_job_back';
import { DreamJobCardEditDialog } from './dream_job_edit_dialog/dream_job_card_edit_dialog';
import { DreamJobValidationSchema, validateDreamjobComplete } from './data/validator';

import { mapDreamJobFromJsonResume, mapDreamJobToJsonResume } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';

const DreamJobCardComponent = ({ variant, side }) => {
    const { data, isEditing, onEdit, mode } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapDreamJobFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(mapDreamJobToJsonResume(editedData));
    }, []);

    const isComplete = useMemo(() => validateDreamjobComplete(mappedData), [mappedData]);

    if (!isComplete && mode !== 'edit') {
        return null;
    }
    return (
        <ProfileCard
            isEditingProfile={isEditing}
            isComplete={isComplete}
            data={mappedData}
            sides={{
                front: () => null,
                back: DreamJobBack
            }}
            editDialog={{
                component: DreamJobCardEditDialog,
                validationSchema: DreamJobValidationSchema,
                onEdit: onDialogEdited
            }}
            variant={variant}
            side={side}
        />
    );
};

export const DreamJobCard = DreamJobCardComponent;
