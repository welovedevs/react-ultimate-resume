import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { ExperiencesFront } from './experiences_front/experiences_front';
import { ExperiencesBack } from './experiences_back/experiences_back';
import { ExperiencesEditDialog } from './experiences_edit_dialog/experiences_edit_dialog';
import { validateWorkComplete, WorkValidator } from './data/validator';

import { mapWorkFromJsonResume, mapWorkToJsonResume } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';

const ExperiencesCardComponent = ({ variant, side }) => {
    const { data, onEdit, isEditing, mode } = useContext(DeveloperProfileContext);
    // console.log({ data });
    const mappedData = useMemo(() => mapWorkFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(editedData => onEdit(mapWorkToJsonResume(editedData)), []);

    const isComplete = useMemo(() => validateWorkComplete(mappedData), [mappedData]);

    if (!isComplete && mode !== 'edit') {
        return null;
    }
    return (
        <ProfileCard
            isEditingProfile={isEditing}
            isComplete={isComplete}
            data={mappedData}
            sides={{
                front: ExperiencesFront,
                back: ExperiencesBack
            }}
            editDialog={{
                component: ExperiencesEditDialog,
                validationSchema: WorkValidator,
                onEdit: onDialogEdited
            }}
            variant={variant}
            side={side}
        />
    );
};

export const ExperiencesCard = ExperiencesCardComponent;
