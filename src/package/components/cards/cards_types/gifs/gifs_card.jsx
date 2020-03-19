import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { GifsFront } from './gifs_front/gifs_front';
import { GifsBack } from './gifs_back/gifs_back';
import { GifsEditDialog } from './gifs_edit_dialog/gifs_edit_dialog';

import { interestsValidator, validateInterestsComplete } from './data/validator';

import { mapInterestsFromJsonResume, mapInterestsToJsonResume } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { useCallbackOpen } from '../../../hooks/use_callback_open';
import { SIDES } from '../../../commons/profile_card/profile_card_side/side';

const GifsCardComponent = ({ variant, side }) => {
    const { data, isEditing, onEdit, setIsEditing, mode } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapInterestsFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(mapInterestsToJsonResume(editedData));
    }, []);

    const [openNewGifDialog, setNewGifDialogOpened, setNewGifDialogClosed] = useCallbackOpen();

    const handleAddButtonClick = useCallback(() => {
        setIsEditing(true);
        setNewGifDialogOpened();
    }, [onEdit]);

    const isComplete = useMemo(() => validateInterestsComplete(mappedData), [mappedData]);

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
            openEditDialog={openNewGifDialog}
            callbackEditDialogClosed={setNewGifDialogClosed}
            sides={{
                front: (props) => <GifsFront handleAddButtonClick={handleAddButtonClick} {...props} />,
                back: (props) => <GifsBack handleAddButtonClick={handleAddButtonClick} {...props} />
            }}
            editDialog={{
                component: GifsEditDialog,
                validationSchema: interestsValidator,
                onEdit: onDialogEdited
            }}
            variant={variant}
            side={currentSide}
        />
    );
};

export const GifsCard = GifsCardComponent;
