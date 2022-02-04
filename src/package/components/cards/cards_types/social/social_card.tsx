import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { InterestedByFront } from './interested_by_front/interested_by_front';
import { InterestedByBack } from './interested_by_back/interested_by_back';
import { FlatObjectToJsonResume, JsonResumeToFlatObject } from '../../utils/data_mapping';
import { InterestedByEditDialog } from './social_edit_dialog/interested_by_edit_dialog';

import { socialValidationSchema, validateSocialCardComplete } from './data/validator';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { useMode } from '../../../hooks/use_mode';
import { CardSideProps, CommonCardsProps } from '../../types/card_props';
import { mapProfilesFromJsonResume, mapProfilesToJsonResume, SocialCardData } from './data/mapping';

const InterestedByCardComponent = ({ variant, side }: CommonCardsProps) => {
    const [mode] = useMode();

    const { data, onEdit, isEditing } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapProfilesFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(
        (editedData: SocialCardData) => {
            onEdit(mapProfilesToJsonResume(editedData));
        },
        [onEdit]
    );

    const isComplete = useMemo(() => validateSocialCardComplete(mappedData), [mappedData]);

    if (!isComplete && mode !== 'edit') {
        return null;
    }
    return (
        <>
            <ProfileCard
                kind="social"
                data={mappedData}
                isComplete={isComplete}
                isEditingProfile={isEditing}
                sides={{
                    back: (props: CardSideProps<SocialCardData>) => <InterestedByBack {...props} />
                }}
                editDialog={{
                    component: InterestedByEditDialog,
                    validationSchema: socialValidationSchema,
                    onEdit: onDialogEdited
                }}
                variant={variant}
                side="back"
            />
        </>
    );
};

export const InterestedByCard = InterestedByCardComponent;
