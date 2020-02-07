import React from 'react';

import { UrlUploadFileDialog } from '../../../../../../commons/url_upload_file_dialog/url_upload_file_dialog';
import { AddButtonDashed } from '../../../../../../commons/add_button_dashed/add_button_dashed';

import { useCallbackOpen } from '../../../../../../hooks/use_callback_open';

const ProjectDialogContentAddImageComponent = () => {
    const [openDialog, setDialogOpened, setDialogClosed] = useCallbackOpen();

    return (
        <>
            <UrlUploadFileDialog open={openDialog} onClose={setDialogClosed} />
            <AddButtonDashed onClick={setDialogOpened} title="Add an image" />
        </>
    );
};

export const ProjectDialogContentAddImage = ProjectDialogContentAddImageComponent;
