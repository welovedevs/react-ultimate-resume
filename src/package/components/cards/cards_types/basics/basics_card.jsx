import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';

import { BasicsBack } from './basics_back/basics_back';
import { mapBasicsDataToJsonResume, mapJsonResumeToBasicData } from './data/mapping';

import { BasicsCardEditDialog } from './basics_edit_dialog/basic_edit_dialog';
import { BasicsValidationSchema, validateBasicsComplete } from './data/validator';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { BasicsFront } from './basics_front/basics_front';
import { useMode } from '../../../hooks/use_mode';

const BasicsCardComponent = ({ variant, side }) => {
    const [mode] = useMode();
    const { data, isEditing, onEdit } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapJsonResumeToBasicData(data), [data]);

    const onDialogEdited = useCallback(
        (editedData) => {
            onEdit(mapBasicsDataToJsonResume(editedData));
        },
        [onEdit]
    );

    const isComplete = useMemo(() => validateBasicsComplete(mappedData), [mappedData]);

    if (!isComplete && mode !== 'edit') {
        return null;
    }

    return (
        <>
            <ProfileCard
                kind="basics"
                data={mappedData}
                isEditingProfile={isEditing}
                editDialog={{
                    component: BasicsCardEditDialog,
                    validationSchema: BasicsValidationSchema,
                    onEdit: onDialogEdited
                }}
                sides={{
                    front: (props) => <BasicsFront {...props} />,
                    back: (props) => <BasicsBack {...props} />
                }}
                variant={variant}
                isComplete={isComplete}
                side={side}
            />
        </>
    );
};

export const BasicsCard = BasicsCardComponent;
