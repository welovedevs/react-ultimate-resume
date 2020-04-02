import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';

import { UrlUploadFileDialog } from '../../../../../../commons/url_upload_file_dialog/url_upload_file_dialog';
import { AddButtonDashed } from '../../../../../../commons/add_button_dashed/add_button_dashed';

import { useCallbackOpen } from '../../../../../../hooks/use_callback_open';

const ProjectDialogContentAddImageComponent = () => {
    const [openDialog, setDialogOpened, setDialogClosed] = useCallbackOpen();
    const { values, setFieldValue } = useFormikContext();

    const onFileAdded = useCallback((url) => setFieldValue('images', [...(values.images || []), { url }]), [
        JSON.stringify(values.images)
    ]);

    return (
        <>
            <UrlUploadFileDialog open={openDialog} onClose={setDialogClosed} onAdd={onFileAdded} />
            <AddButtonDashed onClick={setDialogOpened} title="Add an image" />
        </>
    );
};

export const ProjectDialogContentAddImage = ProjectDialogContentAddImageComponent;
