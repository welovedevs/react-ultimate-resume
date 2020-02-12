import React, { useContext } from 'react';

import { UploadFileDialog } from '../upload_file_dialog/upload_file_dialog';
import { UrlInputDialog } from '../url_input_dialog/url_input_dialog';
import { DeveloperProfileContext } from '../../../utils/context/contexts';

const UrlUploadFileDialogComponent = ({ onAdd, ...props }) => {
    const { onFilesUpload } = useContext(DeveloperProfileContext);
    if (typeof onFilesUpload === 'function') {
        return <UploadFileDialog {...props} onFileUploaded={onAdd} />;
    }
    return <UrlInputDialog {...props} onConfirm={onAdd} />;
};

export const UrlUploadFileDialog = UrlUploadFileDialogComponent;
