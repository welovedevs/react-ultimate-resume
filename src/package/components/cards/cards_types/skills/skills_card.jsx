import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { SkillsFront } from './skills_front/skills_front';
import { SkillsBack } from './skills_back/skills_back';
import { SkillsEditDialog } from './skills_edit_dialog/skills_edit_dialog';

import { mapSkillsFromJsonResume, mapSkillsToJsonResume } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { SkillsValidationSchema, validateSkillsComplete } from './data/validator';
import { useCallbackOpen } from '../../../hooks/use_callback_open';
import { SIDES } from '../../../commons/profile_card/profile_card_side/side';

const SkillsCardComponent = ({ variant, side }) => {
    const { data, onEdit, isEditing, setIsEditing, mode } = useContext(DeveloperProfileContext);

    const mappedData = useMemo(() => mapSkillsFromJsonResume(data), [data]);

    const [openNewSkillDialog, setNewSkillDialogOpened, setNewSkillDialogClosed] = useCallbackOpen();

    const onDialogEdited = useCallback(editedData => {
        onEdit(mapSkillsToJsonResume(editedData));
    }, []);

    const handleAddButtonClick = useCallback(() => {
        setIsEditing(true);
        setNewSkillDialogOpened();
    }, [onEdit]);

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
            isEditingProfile={isEditing}
            isComplete={isComplete}
            sides={{
                front: props => <SkillsFront handleAddButtonClick={handleAddButtonClick} {...props} />,
                back: props => <SkillsBack handleAddButtonClick={handleAddButtonClick} {...props} />
            }}
            editDialog={{
                component: SkillsEditDialog,
                validationSchema: SkillsValidationSchema,
                onEdit: onDialogEdited
            }}
            openEditDialog={openNewSkillDialog}
            callbackEditDialogClosed={setNewSkillDialogClosed}
            data={mappedData}
            variant={variant}
            side={currentSide}
        />
    );
};

export const SkillsCard = SkillsCardComponent;
