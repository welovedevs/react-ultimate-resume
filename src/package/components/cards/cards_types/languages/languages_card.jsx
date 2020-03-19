import React, { useCallback, useContext, useMemo } from 'react';
import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { LanguagesFront } from './languages_front/languages_front';
import { LanguagesBack } from './languages_back/languages_back';
import { mapLanguagesFromJsonResume, mapLanguagesToJsonResume } from './data/mapping';
import { LanguagesCardEditDialog } from './languages_edit_dialog/languages_card_edit_dialog';
import { LanguageValidator, validateLanguagesComplete } from './data/validator';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { useCallbackOpen } from '../../../hooks/use_callback_open';
import { SIDES } from '../../../commons/profile_card/profile_card_side/side';

const LanguagesCardComponent = ({ variant, side }) => {
    const { data, isEditing, onEdit, setIsEditing, mode } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapLanguagesFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(mapLanguagesToJsonResume(editedData));
    }, []);

    const isComplete = useMemo(() => validateLanguagesComplete(mappedData), [mappedData]);

    const [openNewLanguageDialog, setNewLanguageDialogOpened, setNewLanguageDialogClosed] = useCallbackOpen();

    const handleAddButtonClick = useCallback(() => {
        setIsEditing(true);
        setNewLanguageDialogOpened();
    }, [onEdit]);

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
            data={mappedData}
            sides={{
                front: props => <LanguagesFront handleAddButtonClick={handleAddButtonClick} {...props} />,
                back: props => <LanguagesBack handleAddButtonClick={handleAddButtonClick} {...props} />
            }}
            variant={variant}
            side={currentSide}
            openEditDialog={openNewLanguageDialog}
            callbackEditDialogClosed={setNewLanguageDialogClosed}
            editDialog={{
                component: LanguagesCardEditDialog,
                validationSchema: LanguageValidator,
                onEdit: onDialogEdited
            }}
        />
    );
};

export const LanguagesCard = LanguagesCardComponent;
