import React, { useCallback, useMemo, useState } from 'react';

import { createUseStyles } from 'react-jss';
import { useDropzone } from 'react-dropzone';

import { Typography } from '@wld/ui';

import { LoadingSpinner } from '../loading_spinner/loading_spinner';

import { ReactComponent as DropFileIcon } from '../../../assets/icons/drop_file.svg';
import { ReactComponent as SuccessIcon } from '../../../assets/icons/success.svg';
import { ReactComponent as RemoveIcon } from '../../../assets/icons/remove_circle.svg';

import { styles } from './file_drop_zone_styles';

const useStyles = createUseStyles(styles);

const DEFAULT_ON_DROP = () => {
    throw new Error('Did not provide a valid onDrop function.');
};

const FileDropZoneComponent = ({ onDrop = DEFAULT_ON_DROP }) => {
    const classes = useStyles();

    const [fileUrl, setFileUrl] = useState(false);
    const [error, setError] = useState(null);

    const { waiting, loading, success } = useMemo(
        () => ({
            waiting: fileUrl === false,
            loading: fileUrl === null,
            success: Boolean(fileUrl)
        }),
        [fileUrl]
    );

    const handleDrop = useCallback(
        async parameters => {
            if (typeof onDrop !== 'function') {
                return;
            }
            setFileUrl(null);
            try {
                const url = await onDrop(parameters);
                setFileUrl(url);
            } catch (e) {
                console.warn('Failed to drop file', e);
                setFileUrl(false);
                setError(e);
            }
        },
        [onDrop]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

    return (
        <button className={classes.container} type="button" {...getRootProps()}>
            <Content
                waiting={waiting}
                loading={loading}
                error={error}
                success={success}
                getInputProps={getInputProps}
                isDragActive={isDragActive}
                classes={classes}
            />
        </button>
    );
};

const Content = ({ waiting, loading, error, success, getInputProps, isDragActive, classes }) => {
    if (loading) {
        return <LoadingSpinner />;
    }
    return (
        <>
            <input {...getInputProps()} />
            <Icon waiting={waiting} error={error} success={success} classes={classes} />
            <Label waiting={waiting} error={error} success={success} isDragActive={isDragActive} classes={classes} />
        </>
    );
};

const Icon = ({ waiting, error, success, classes }) => {
    if (error) {
        return <RemoveIcon className={classes.icon} />;
    }
    if (waiting) {
        return <DropFileIcon className={classes.icon} />;
    }
    if (success) {
        return <SuccessIcon className={classes.icon} />;
    }
    return null;
};

const Label = ({ waiting, error, success, isDragActive, classes }) => {
    let text = null;
    if (isDragActive) {
        text = 'Release the cracken!';
    } else if (error) {
        text = 'An error occurred.';
    } else if (success) {
        text = 'File successfully uploaded!';
    } else if (waiting) {
        text = "Drag'n drop files or click here.";
    }
    return (
        <Typography customClasses={{ container: classes.typography }} variant="h4" component="h4">
            {text}
        </Typography>
    );
};

export const FileDropZone = FileDropZoneComponent;
