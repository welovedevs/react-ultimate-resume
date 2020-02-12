import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { SkillsFront } from './skills_front/skills_front';
import { SkillsBack } from './skills_back/skills_back';
import { SkillsEditDialog } from './skills_edit_dialog/skills_edit_dialog';

import { mapSkillsFromJsonResume, mapSkillsToJsonResume } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';

const SkillsCardComponent = ({ variant }) => {
    const { data, onEdit, isEditing } = useContext(DeveloperProfileContext);

    const mappedData = useMemo(() => mapSkillsFromJsonResume(data), [data]);
    const onDialogEdited = useCallback(editedData => {
        onEdit(mapSkillsToJsonResume(editedData));
    }, []);
    return (
        <ProfileCard
            isEditingProfile={isEditing}
            sides={{
                front: SkillsFront,
                back: SkillsBack
            }}
            editDialog={{
                component: SkillsEditDialog,
                onEdit: onDialogEdited
            }}
            data={mappedData}
            variant={variant}
            side="back"
        />
    );
};

export const SkillsCard = SkillsCardComponent;
