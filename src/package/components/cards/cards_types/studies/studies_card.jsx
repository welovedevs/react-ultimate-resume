import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { StudiesFront } from './studies_front/studies_front';
import { StudiesBack } from './studies_back/studies_back';
import { DeveloperProfileContext } from '../../../profile';
import { mapStudiesFromJsonResume, mapStudiesToJsonResume } from './data/mapping';
import { StudiesCardEditDialog } from './edit_dialog/studies_card_edit_dialog';
import { StudiesValidator } from './data/validator';

const StudiesCardComponent = ({ variant, side }) => {
    const { data, onEdit, isEditing } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapStudiesFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(mapStudiesToJsonResume(editedData));
    }, []);

    return (
        <ProfileCard
            data={mappedData}
            isEditingProfile={isEditing}
            sides={{
                front: StudiesFront,
                back: StudiesBack
            }}
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
