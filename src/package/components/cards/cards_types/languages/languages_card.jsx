import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { LanguagesFront } from './languages_front/languages_front';
import { LanguagesBack } from './languages_back/languages_back';
import { DeveloperProfileContext } from '../../../profile';
import { mapLanguagesFromJsonResume, mapLanguagesToJsonResume } from './data/mapping';
import { LanguagesCardEditDialog } from './languages_edit_dialog/languages_card_edit_dialog';
import { LanguageValidator } from './data/validator';

const LanguagesCardComponent = ({ variant, side }) => {
    const { data, isEditing, onEdit } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapLanguagesFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(mapLanguagesToJsonResume(editedData));
    }, []);

    return (
        <ProfileCard
            isEditingProfile={isEditing}
            data={mappedData}
            sides={{
                front: LanguagesFront,
                back: LanguagesBack
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
