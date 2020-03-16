import React, { useCallback, useContext, useMemo, useState } from 'react';

import uuid from 'uuid/v4';
import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { LanguagesFront } from './languages_front/languages_front';
import { LanguagesBack } from './languages_back/languages_back';
import { mapLanguagesFromJsonResume, mapLanguagesToJsonResume } from './data/mapping';
import { LanguagesCardEditDialog } from './languages_edit_dialog/languages_card_edit_dialog';
import { LanguageValidator, validateLanguagesComplete } from './data/validator';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';

const LanguagesCardComponent = ({ variant, side }) => {
    const { data, isEditing, onEdit, mode } = useContext(DeveloperProfileContext);
    const defaultMappedData = useMemo(() => mapLanguagesFromJsonResume(data), [data]);
    const [mappedData, setMappedData] = useState(defaultMappedData);

    const onDialogEdited = useCallback(editedData => {
        onEdit(mapLanguagesToJsonResume(editedData));
    }, []);

    const isComplete = useMemo(() => validateLanguagesComplete(mappedData), [mappedData]);

    const handleAddButtonClick = useCallback(() => {
        setMappedData({
            projects: [
                ...mappedData.projects,
                {
                    id: uuid(),
                    name: 'Nouveau projet',
                    description: 'Description du nouveau projet...'
                }
            ]
        });
        // setNewProjectDialogOpened();
    }, [mappedData]);

    if (!isComplete && mode !== 'edit') {
        return null;
    }
    return (
        <ProfileCard
            isEditingProfile={isEditing}
            isComplete={isComplete}
            data={mappedData}
            sides={{
                front: (props) => <LanguagesFront handleAddButtonClick={handleAddButtonClick} {...props} />,
                back: (props) => <LanguagesBack handleAddButtonClick={handleAddButtonClick} {...props} />
            }}
            variant={variant}
            side={side}
            editDialog={{
                component: LanguagesCardEditDialog,
                validationSchema: LanguageValidator,
                onEdit: onDialogEdited
            }}
        />
    );
};

export const LanguagesCard = LanguagesCardComponent;
