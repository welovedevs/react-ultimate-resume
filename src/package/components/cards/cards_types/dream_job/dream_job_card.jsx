import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { DreamJobFront } from './dream_job_front/dream_job_front';
import { DreamJobBack } from './dream_job_back/dream_job_back';
import { DeveloperProfileContext } from '../../../profile';
import { mapDreamJobFromJsonResume, mapDreamJobToJsonResume } from './data/mapping';
import { DreamjobCardEditDialog } from './edit_dialog/dreamjob_card_edit_dialog';
import { DreamJobValidationSchema } from './data/validator';

const DreamJobCardComponent = ({ variant, side }) => {
    const { data, isEditing, onEdit } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapDreamJobFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(mapDreamJobToJsonResume(editedData));
    }, []);

    return (
        <ProfileCard
            isEditingProfile={isEditing}
            data={mappedData}
            sides={{
                front: DreamJobFront,
                back: DreamJobBack
            }}
            editDialog={{
                component: DreamjobCardEditDialog,
                validationSchema: DreamJobValidationSchema,
                onEdit: onDialogEdited
            }}
            variant={variant}
            side={side}
        />
    );
};

export const DreamJobCard = DreamJobCardComponent;
