import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { InterestedByFront } from './interested_by_front/interested_by_front';
import { InterestedByBack } from './interested_by_back/interested_by_back';
import { FlatObjectToJsonResume, JsonResumeToFlatObject } from '../../utils/data_mapping';
import { InterestedByEditDialog } from './interested_by_edit_dialog/interested_by_edit_dialog';

import { interestedByMapping } from './data/mapping';
import { interestedByValidationSchema, validateInterestedByComplete } from './data/validator';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { useCallbackOpen } from '../../../hooks/use_callback_open';

const InterestedByCardComponent = ({ variant, side }) => {
    const { data, onEdit, isEditing, mode } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => JsonResumeToFlatObject(data, interestedByMapping), [data]);

    const [openNewInterestedDialog, setNewInterestedDialogOpened] = useCallbackOpen();

    const onDialogEdited = useCallback(editedData => {
        onEdit(FlatObjectToJsonResume(editedData, interestedByMapping));
    }, []);

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
                openEditDialog={openNewInterestedDialog}
                sides={{
                    front: props => (
                        <InterestedByFront handleAddButtonClick={setNewInterestedDialogOpened} {...props} />
                    ),
                    back: props => <InterestedByBack handleAddButtonClick={setNewInterestedDialogOpened} {...props} />
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
