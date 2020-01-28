import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { ExperiencesFront } from './experiences_front/experiences_front';
import { ExperiencesBack } from './experiences_back/experiences_back';
import { ExperiencesEditDialog } from './edit_dialog/experiences_card_edit_dialog';
import { WorkValidator } from './data/validator';
import { DeveloperProfileContext } from '../../../profile';

import { mapWorkFromJsonResume, mapWorkToJsonResume } from './data/mapping';

const ExperiencesCardComponent = ({ variant, side }) => {
    const { data, onEdit, isEditing } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapWorkFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(editedData => onEdit(mapWorkToJsonResume(editedData)), []);

    return (
        <ProfileCard
            isEditingProfile={isEditing}
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
