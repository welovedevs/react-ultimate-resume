import React, { useCallback, useContext, useMemo } from 'react';
import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { LanguagesFront } from './languages_front/languages_front';
import { LanguagesBack } from './languages_back/languages_back';
import { mapLanguagesFromJsonResume, mapLanguagesToJsonResume } from './data/mapping';
import { LanguagesCardEditDialog } from './languages_edit_dialog/languages_card_edit_dialog';
import { LanguageValidator, validateLanguagesComplete } from './data/validator';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { SIDES } from '../../../commons/profile_card/profile_card_side/side';
import { useMode } from '../../../hooks/use_mode';

const LanguagesCardComponent = ({ variant, side }) => {
    const [mode] = useMode();
    const { data, isEditing, onEdit } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapLanguagesFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(
        editedData => {
            onEdit(mapLanguagesToJsonResume(editedData));
        },
        [onEdit]
    );

    const isComplete = useMemo(() => validateLanguagesComplete(mappedData), [mappedData]);

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
            kind="languages"
            isEditingProfile={isEditing}
            isComplete={isComplete}
            data={mappedData}
            sides={{
                front: props => <LanguagesFront {...props} />,
                back: props => <LanguagesBack {...props} />
            }}
            variant={variant}
            side={currentSide}
            editDialog={{
                component: LanguagesCardEditDialog,
                validationSchema: LanguageValidator,
                onEdit: onDialogEdited
            }}
        />
    );
};

export const LanguagesCard = LanguagesCardComponent;
