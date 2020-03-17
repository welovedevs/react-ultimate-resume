import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { SkillsFront } from './skills_front/skills_front';
import { SkillsBack } from './skills_back/skills_back';
import { SkillsEditDialog } from './skills_edit_dialog/skills_edit_dialog';

import { mapSkillsFromJsonResume, mapSkillsToJsonResume } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { SkillsValidationSchema, validateSkillsComplete } from './data/validator';
import { useCallbackOpen } from '../../../hooks/use_callback_open';

const SkillsCardComponent = ({ variant, side }) => {
    const { data, onEdit, isEditing, mode } = useContext(DeveloperProfileContext);

    const defaultMappedData = useMemo(() => mapSkillsFromJsonResume(data), [data]);
    const [mappedData, setMappedData] = useState(defaultMappedData);

    const [openNewSkillDialog, setNewSkillDialogOpened, setNewSkillDialogClosed] = useCallbackOpen();

    useEffect(() => {
        setMappedData(defaultMappedData);
    }, [defaultMappedData]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(mapSkillsToJsonResume(editedData));
    }, []);

    const handleAddButtonClick = useCallback(() => {
        setMappedData({
            skills: [
                ...mappedData.skills,
                {
                    name: 'React',
                    level: 'Master',
                    value: 50,
                    keywords: ['HTML', 'CSS', 'Javascript']
                }
            ]
        });
        setNewSkillDialogOpened();
    }, [mappedData]);

    const isComplete = useMemo(() => validateSkillsComplete(mappedData), [mappedData]);

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
            data={mappedData}
            variant={variant}
            side={side}
        >
            <SkillsEditDialog
                open={openNewSkillDialog}
                onEdit={onDialogEdited}
                validationSchema={SkillsValidationSchema}
                onClose={setNewSkillDialogClosed}
            />
        </ProfileCard>
    );
};

export const SkillsCard = SkillsCardComponent;
