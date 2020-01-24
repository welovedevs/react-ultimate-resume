import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { GifsFront } from './gifs_front/gifs_front';
import { GifsBack } from './gifs_back/gifs_back';
import { DeveloperProfileContext } from '../../../profile';
import { mapInterestsFromJsonResume, mapInterestsToJsonResume } from './data/mapping';
import { InterestsEditDialog } from './edit_dialog/experiences_card_edit_dialog';
import { InterestsValidator } from './data/validator';

const GifsCardComponent = ({ variant, side }) => {
    const { data, isEditing, onEdit } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapInterestsFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(mapInterestsToJsonResume(editedData));
    }, []);

    return (
        <ProfileCard
            isEditingProfile={isEditing}
            data={mappedData}
            sides={{
                front: GifsFront,
                back: GifsBack
            }}
            editDialog={{
                component: InterestsEditDialog,
                validationSchema: InterestsValidator,
                onEdit: onDialogEdited
            }}
            variant={variant}
            side={side}
        />
    );
};

export const GifsCard = GifsCardComponent;
