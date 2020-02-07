import React, { useCallback, useContext, useMemo } from 'react';

import { DeveloperProfileContext } from '../../../profile';
import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { GifsFront } from './gifs_front/gifs_front';
import { GifsBack } from './gifs_back/gifs_back';
import { GifsEditDialog } from './gifs_edit_dialog/gifs_edit_dialog';

import { interestsValidator } from './data/validator';

import { mapInterestsFromJsonResume, mapInterestsToJsonResume } from './data/mapping';

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
