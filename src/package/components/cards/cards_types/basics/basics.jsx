import React, { useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';

import { BasicsFront } from './basics_front/basics_front';
import { BasicsBack } from './basics_back/basics_back';
import { DeveloperProfileContext } from '../../../profile';
import { JsonResumeToFlatObject } from '../../utils/data_mapping';
import { BasicMapping } from './data/mapping';

import { BasicsCardEditDialog } from './edit_dialog/basic_card_edit_dialog';

const BasicsCardComponent = ({ variant, flipped }) => {
    const { data, isEditing, onEdit } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => JsonResumeToFlatObject(data, BasicMapping), [data]);
    return (
        <>
            {isEditing && <BasicsCardEditDialog data={mappedData} onEdit={onEdit(BasicMapping)} />}
            <ProfileCard
                data={mappedData}
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
