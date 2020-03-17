import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { StudiesFront } from './studies_front/studies_front';
import { StudiesBack } from './studies_back/studies_back';
import { mapStudiesFromJsonResume, mapStudiesToJsonResume } from './data/mapping';
import { StudiesCardEditDialog } from './edit_dialog/studies_card_edit_dialog';
import { StudiesValidator, validateStudiesComplete } from './data/validator';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { useCallbackOpen } from '../../../hooks/use_callback_open';

const StudiesCardComponent = ({ variant, side }) => {
    const { data, onEdit, isEditing, mode } = useContext(DeveloperProfileContext);
    const defaultMappedData = useMemo(() => mapStudiesFromJsonResume(data), [data]);
    const [mappedData, setMappedData] = useState(defaultMappedData);

    useEffect(() => {
        setMappedData(defaultMappedData);
    }, [defaultMappedData]);

    const onDialogEdited = useCallback(editedData => {
        onEdit(mapStudiesToJsonResume(editedData));
    }, []);

    const [openNewEducationDialog, setNewEducationDialogOpened, setNewEducationDialogClosed] = useCallbackOpen();

    const handleAddButtonClick = useCallback(() => {
         setMappedData({
            education: [
                ...mappedData.education,
                {
                    institution: 'ISEN',
                    area: 'Software Development',
                    studyType: 'Engineer Degree',
                    startDate: '2011-01-01',
                    endDate: '2013-01-01',
                    gpa: '4.0',
                    courses: ['DB1101 - Basic SQL']
                }
            ]
        });
        setNewEducationDialogOpened();
    }, [mappedData]);

    const isComplete = useMemo(() => validateStudiesComplete(mappedData), [mappedData]);

    if (!isComplete && mode !== 'edit') {
        return null;
    }

    return (
        <ProfileCard
            data={mappedData}
            isComplete={isComplete}
            isEditingProfile={isEditing}
            sides={{
                front: (props) => <StudiesFront handleAddButtonClick={handleAddButtonClick} {...props} />,
                back: (props) => <StudiesBack handleAddButtonClick={handleAddButtonClick} {...props} />
            }}
            editDialog={{
                component: StudiesCardEditDialog,
                validationSchema: StudiesValidator,
                onEdit: onDialogEdited
            }}
            variant={variant}
            side={side}
        >
            <StudiesCardEditDialog
                open={openNewEducationDialog}
                onClose={setNewEducationDialogClosed}
                onEdit={onDialogEdited}
                validationSchema={StudiesValidator}
                data={mappedData?.studies?.[mappedData?.studies?.length - 1]}
            />
        </ProfileCard>
    );
};

export const StudiesCard = StudiesCardComponent;
