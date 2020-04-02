import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { ExperiencesFront } from './experiences_front/experiences_front';
import { ExperiencesBack } from './experiences_back/experiences_back';
import { ExperiencesEditDialog } from './experiences_edit_dialog/experiences_edit_dialog';
import { validateWorkComplete, WorkValidator } from './data/validator';

import { mapWorkFromJsonResume, mapWorkToJsonResume } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { SIDES } from '../../../commons/profile_card/profile_card_side/side';
import { useMode } from '../../../hooks/use_mode';

const ExperiencesCardComponent = ({ variant, side }) => {
    const [mode] = useMode();
    const { data, onEdit, isEditing } = useContext(DeveloperProfileContext);

    const mappedData = useMemo(() => mapWorkFromJsonResume(data), [data]);

    const onDialogEdited = useCallback((editedData) => onEdit(mapWorkToJsonResume(editedData)), [onEdit]);

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
            kind="experience"
            isEditingProfile={isEditing}
            isComplete={isComplete}
            data={mappedData}
            sides={{
                front: (props) => <ExperiencesFront {...props} />,
                back: (props) => <ExperiencesBack {...props} />
            }}
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
