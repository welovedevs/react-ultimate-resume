import React, { useContext } from 'react';

import { DeveloperProfileContext } from '../../profile';

import { UploadFileDialog } from '../upload_file_dialog/upload_file_dialog';
import { UrlInputDialog } from '../url_input_dialog/url_input_dialog';

const UrlUploadFileDialogComponent = (props) => {
    const { onFilesUpload } = useContext(DeveloperProfileContext);
    if (typeof onFilesUpload === 'function') {
        return (
            <UploadFileDialog {...props} />
        );
    }
    return (
        <UrlInputDialog {...props} />
    );
};

export const UrlUploadFileDialog = UrlUploadFileDialogComponent;
