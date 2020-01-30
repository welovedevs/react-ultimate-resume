import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { SkillsFront } from './skills_front/skills_front';
import { SkillsBack } from './skills_back/skills_back';
import { mapSkillsFromJsonResume } from './data/mapping';
import { DeveloperProfileContext } from '../../../profile';
import { SkillsCardEditDialog } from './edit_dialog/skills_card_edit_dialog';

const SkillsCardComponent = ({ variant, side }) => {
    const { data, onEdit, isEditing } = useContext(DeveloperProfileContext);

    const mappedData = useMemo(() => mapSkillsFromJsonResume(data), [data]);
    const onDialogEdited = useCallback(editedData => {
        // onEdit(FlatObjectToJsonResume(editedData, SoundtrackMapping));
    }, []);
    return (
        <ProfileCard
            isEditingProfile={isEditing}
            sides={{
                front: SkillsFront,
                back: SkillsBack
            }}
            editDialog={{
                component: SkillsCardEditDialog,
                onEdit: onDialogEdited
            }}
            data={mappedData}
            variant={variant}
            side={side}
        />
    );
};

export const SkillsCard = SkillsCardComponent;
