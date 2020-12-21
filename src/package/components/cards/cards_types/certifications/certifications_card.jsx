import React, { useCallback, useContext, useMemo } from 'react';

import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { SIDES } from '../../../commons/profile_card/profile_card_side/side';
import { useMode } from '../../../hooks/use_mode';
import { CertificationsBack } from './certifications_back/certifications_back';
import { CertificationsFront } from './certifications_front/certifications_front';
import { mapCertificationsFromJsonResume, mapCertificationsToJsonResume } from './data/mapping';
import { CertificationsValidator, validateCertificationsComplete } from './data/validator';
import { CertificationsCardEditDialog } from './edit_dialog/certifications_card_edit_dialog';

const CertificationsCardComponent = ({ variant, side }) => {
    const [mode] = useMode();
    const { data, onEdit, isEditing } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapCertificationsFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(
        (editedData) => {
            onEdit(mapCertificationsToJsonResume(editedData));
        },
        [onEdit]
    );

    const isComplete = useMemo(() => validateCertificationsComplete(mappedData), [mappedData]);

    const currentSide = useMemo(() => {
        if (!isComplete && !isEditing) {
            return SIDES.FRONT;
        }
        return side;
    }, [side, isComplete, isEditing]);

    if (!isComplete && mode !== 'edit') {
        return null;
    }

    return (
        <ProfileCard
            kind="certifications"
            data={mappedData}
            isComplete={isComplete}
            isEditingProfile={isEditing}
            sides={{
                front: (props) => <CertificationsFront {...props} />,
                back: (props) => <CertificationsBack {...props} />
            }}
            editDialog={{
                component: CertificationsCardEditDialog,
                validationSchema: CertificationsValidator,
                onEdit: onDialogEdited
            }}
            variant={variant}
            side={currentSide}
        />
    );
};

export const CertificationsCard = CertificationsCardComponent;
