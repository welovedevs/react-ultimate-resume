import React, { useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';

import { BasicsFront } from './basics_front/basics_front';
import { BasicsBack } from './basics_back/basics_back';
import { JsonResumeToFlatObject } from '../../utils/data_mapping';
import { BasicMapping } from './data/mapping';
import { DeveloperProfileContext } from '../../../profile';

import { BasicsCardEditDialog } from './edit_dialog/basic_card_edit_dialog';
import { BasicsValidationSchema } from './data/validator';

const BasicsCardComponent = ({ variant, flipped }) => {
    const { data, isEditing, onEdit } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => JsonResumeToFlatObject(data, BasicMapping), [data]);
    return (
        <>
            <ProfileCard
                data={mappedData}
                isEditingProfile={isEditing}
                editDialog={{
                    component: BasicsCardEditDialog,
                    validationSchema: BasicsValidationSchema,
                    onEdit: onEdit(BasicMapping)
                }}
                sides={{
                    front: BasicsFront,
                    back: BasicsBack
                }}
                variant={variant}
                flipped={flipped}
            />
        </>
    );
};

export const BasicsCard = BasicsCardComponent;
