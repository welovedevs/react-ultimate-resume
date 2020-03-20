import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { SkillsFront } from './skills_front/skills_front';
import { SkillsBack } from './skills_back/skills_back';
import { SkillsEditDialog } from './skills_edit_dialog/skills_edit_dialog';

import { mapSkillsFromJsonResume, mapSkillsToJsonResume } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { SkillsValidationSchema, validateSkillsComplete } from './data/validator';
import { SIDES } from '../../../commons/profile_card/profile_card_side/side';

const SkillsCardComponent = ({ variant, side }) => {
    const { data, onEdit, isEditing, mode } = useContext(DeveloperProfileContext);

    const mappedData = useMemo(() => mapSkillsFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(
        editedData => {
            onEdit(mapSkillsToJsonResume(editedData));
        },
        [onEdit]
    );

    const isComplete = useMemo(() => validateSkillsComplete(mappedData), [mappedData]);

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
            kind="skills"
            isEditingProfile={isEditing}
            isComplete={isComplete}
            sides={{
                front: props => <SkillsFront {...props} />,
                back: props => <SkillsBack {...props} />
            }}
            editDialog={{
                component: SkillsEditDialog,
                validationSchema: SkillsValidationSchema,
                onEdit: onDialogEdited
            }}
            data={mappedData}
            variant={variant}
            side={currentSide}
        />
    );
};

export const SkillsCard = SkillsCardComponent;
