import React, { useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { InterestedByFront } from './interested_by_front/interested_by_front';
import { InterestedByBack } from './interested_by_back/interested_by_back';
import { JsonResumeToFlatObject } from '../../utils/data_mapping';
import { InterestedByValidationSchema } from './data/validator';
import { InterestedByMapping } from './data/mapping';
import { InterestedByEditDialog } from './edit_dialog/interested_by_edit_dialog';
import { DeveloperProfileContext } from '../../../profile';

const InterestedByCardComponent = ({ variant, flipped }) => {
    const { data, onEdit, isEditing } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => JsonResumeToFlatObject(data, InterestedByMapping), [data]);

    return (
        <>
            {isEditing && (
                <InterestedByEditDialog
                    data={mappedData}
                    onEdit={onEdit(InterestedByMapping)}
                    validationSchema={InterestedByValidationSchema}
                />
            )}
            <ProfileCard
                data={mappedData}
                sides={{
                    front: InterestedByFront,
                    back: InterestedByBack
                }}
                variant={variant}
                flipped={flipped}
            />
        </>
    );
};

export const InterestedByCard = InterestedByCardComponent;
