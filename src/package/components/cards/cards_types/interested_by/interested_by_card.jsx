import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { InterestedByFront } from './interested_by_front/interested_by_front';
import { InterestedByBack } from './interested_by_back/interested_by_back';
import { FlatObjectToJsonResume, JsonResumeToFlatObject } from '../../utils/data_mapping';
import { InterestedByEditDialog } from './interested_by_edit_dialog/interested_by_edit_dialog';

import { interestedByMapping } from './data/mapping';
import { interestedByValidationSchema, validateInterestedByComplete } from './data/validator';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';

const InterestedByCardComponent = ({ variant, side }) => {
    const { data, onEdit, isEditing, mode } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => JsonResumeToFlatObject(data, interestedByMapping), [data]);

    const onDialogEdited = useCallback(
        editedData => {
            onEdit(FlatObjectToJsonResume(editedData, interestedByMapping));
        },
        [onEdit]
    );

    const isComplete = useMemo(() => validateInterestedByComplete(mappedData), [mappedData]);

    if (!isComplete && mode !== 'edit') {
        return null;
    }
    return (
        <>
            <ProfileCard
                data={mappedData}
                isComplete={isComplete}
                isEditingProfile={isEditing}
                sides={{
                    front: props => <InterestedByFront {...props} />,
                    back: props => <InterestedByBack {...props} />
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
