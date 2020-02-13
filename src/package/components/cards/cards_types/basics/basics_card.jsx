import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';

import { BasicsFront } from './basics_front/basics_front';
import { BasicsBack } from './basics_back/basics_back';
import { mapBasicsDataToJsonResume, mapJsonResumeToBasicData } from './data/mapping';

import { BasicsCardEditDialog } from './basics_edit_dialog/basic_edit_dialog';
import { BasicsValidationSchema, validateBasicsComplete } from './data/validator';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';

const BasicsCardComponent = ({ variant, side }) => {
    const { data, isEditing, onEdit } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapJsonResumeToBasicData(data), [data]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(mapBasicsDataToJsonResume(editedData));
    }, []);

    const isComplete = useMemo(() => validateBasicsComplete(mappedData), [mappedData]);

    return (
        <>
            <ProfileCard
                data={mappedData}
                isEditingProfile={isEditing}
                editDialog={{
                    component: BasicsCardEditDialog,
                    validationSchema: BasicsValidationSchema,
                    onEdit: onDialogEdited
                }}
                sides={{
                    front: BasicsFront,
                    back: BasicsBack
                }}
                variant={variant}
                side={side}
                isComplete={isComplete}
            />
        </>
    );
};

export const BasicsCard = BasicsCardComponent;
