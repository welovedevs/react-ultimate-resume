import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { SocialEditDialog } from './social_edit_dialog/social_edit_dialog';

import { socialValidationSchema, showSocialCard } from './data/validator';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { useMode } from '../../../hooks/use_mode';
import { CardSideProps, CommonCardsProps } from '../../types/card_props';
import { mapProfilesFromJsonResume, mapProfilesToJsonResume, SocialCardData } from './data/mapping';
import { SocialCardContent } from './interested_by_back/social';
import { useOptions } from '../../../hooks/use_options';

export const SocialCard = ({ variant, side }: CommonCardsProps) => {
    const [mode] = useMode();
    const [showContactInformations] = useOptions('showContactInfos', false);

    const { data, onEdit, isEditing } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapProfilesFromJsonResume(data, showContactInformations), [data]);

    const onDialogEdited = useCallback(
        (editedData: SocialCardData) => {
            onEdit(mapProfilesToJsonResume(editedData));
        },
        [onEdit]
    );

    const isComplete = useMemo(() => showSocialCard(mappedData, showContactInformations), [
        mappedData,
        showContactInformations
    ]);

    if (!isComplete && !isEditing) {
        return null;
    }
    return (
        <>
            <ProfileCard
                kind="social"
                data={mappedData}
                isEditingProfile={isEditing}
                sides={{
                    back: (props: CardSideProps<SocialCardData>) => (
                        <SocialCardContent {...props} isComplete={isComplete} />
                    )
                }}
                editDialog={{
                    component: SocialEditDialog,
                    validationSchema: socialValidationSchema,
                    onEdit: onDialogEdited
                }}
                variant={variant}
                side="back"
            />
        </>
    );
};
