import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { DreamJobFront } from './dream_job_front/dream_job_front';
import { DreamJobBack } from './dream_job_back/dream_job_back';
import { DeveloperProfileContext } from '../../../profile';
import { FlatObjectToJsonResume, JsonResumeToFlatObject } from '../../utils/data_mapping';
import { BasicMapping } from '../basics/data/mapping';
import { mapDreamJobFromJsonResume, mapDreamJobToJsonResume } from './data/mapping';

const DreamJobCardComponent = ({ variant, side }) => {
    const { data, isEditing, onEdit } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => mapDreamJobFromJsonResume(data), [data]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(mapDreamJobToJsonResume(editedData));
    }, []);

    return (
        <ProfileCard
            data={mappedData}
            sides={{
                front: DreamJobFront,
                back: DreamJobBack
            }}
            variant={variant}
            side={'back'}
        />
    );
};

export const DreamJobCard = DreamJobCardComponent;
