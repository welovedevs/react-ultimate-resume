import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { GifsFront } from './gifs_front/gifs_front';
import { GifsBack } from './gifs_back/gifs_back';
import { GifsEditDialog } from './gifs_edit_dialog/gifs_edit_dialog';

import { interestsValidator, validateInterestsComplete } from './data/validator';

import { mapInterestsFromJsonResume, mapInterestsToJsonResume } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { useCallbackOpen } from '../../../hooks/use_callback_open';

const GifsCardComponent = ({ variant, side }) => {
    const { data, isEditing, onEdit, mode } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapInterestsFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(mapInterestsToJsonResume(editedData));
    }, []);

    const [openNewGifDialog, setNewGifDialogOpened] = useCallbackOpen();

    const isComplete = useMemo(() => validateInterestsComplete(mappedData), [mappedData]);

    if (!isComplete && mode !== 'edit') {
        return null;
    }
    return (
        <ProfileCard
            isEditingProfile={isEditing}
            isComplete={isComplete}
            data={mappedData}
            openEditDialog={openNewGifDialog}
            sides={{
                front: (props) => <GifsFront handleAddButtonClick={setNewGifDialogOpened} {...props} />,
                back: (props) => <GifsBack handleAddButtonClick={setNewGifDialogOpened} {...props} />
            }}
            editDialog={{
                component: GifsEditDialog,
                validationSchema: interestsValidator,
                onEdit: onDialogEdited
            }}
            variant={variant}
            side={side}
        />
    );
};

export const GifsCard = GifsCardComponent;
