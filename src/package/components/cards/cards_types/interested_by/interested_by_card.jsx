import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { InterestedByFront } from './interested_by_front/interested_by_front';
import { InterestedByBack } from './interested_by_back/interested_by_back';
import { FlatObjectToJsonResume, JsonResumeToFlatObject } from '../../utils/data_mapping';
import { InterestedByEditDialog } from './interested_by_edit_dialog/interested_by_edit_dialog';

import { interestedByMapping } from './data/mapping';
import { interestedByValidationSchema } from './data/validator';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';

const InterestedByCardComponent = ({ variant, side }) => {
    const { data, onEdit, isEditing } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => JsonResumeToFlatObject(data, interestedByMapping), [data]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(FlatObjectToJsonResume(editedData, interestedByMapping));
    }, []);

    return (
        <>
            <ProfileCard
                data={mappedData}
                isEditingProfile={isEditing}
                sides={{
                    front: InterestedByFront,
                    back: InterestedByBack
                }}
                editDialog={{
                    component: InterestedByEditDialog,
                    validationSchema: interestedByValidationSchema,
                    onEdit: onDialogEdited
                }}
                variant={variant}
                side={side}
            />
        </>
    );
};

export const InterestedByCard = InterestedByCardComponent;
