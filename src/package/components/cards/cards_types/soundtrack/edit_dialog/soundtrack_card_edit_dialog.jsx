import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';
import { useFormikContext } from 'formik';
import { useDebounce } from 'use-debounce';

import { TextField } from '@wld/ui';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { EditDialogField } from '../../../../commons/edit_dialog_field/edit_dialog_field';
import { LoadingSpinner } from '../../../../commons/loading_spinner/loading_spinner';

import { hashCode } from '../../../../../utils/string_utils';

import { styles } from './soundtrack_card_edit_dialog_styles';

const useStyles = createUseStyles(styles);

export const SoundtrackCardEditDialog = ({ open, onClose, data, onEdit }) => (
        <EditDialog
            data={data}
            onEdit={onEdit}
            onClose={onClose}
            open={open}
            title={(
                <FormattedMessage
                    id="Sountrack.editDialog.title"
                    defaultMessage="Embed your musical tastes in your profile."
                />
            )}
        >
            {helpers => <Content helpers={helpers} />}
        </EditDialog>
    );

const Content = () => {
    const classes = useStyles();
    const { values, errors, handleChange } = useFormikContext();
    const { embedUrl } = values;
    const [iframeUrl] = useDebounce(embedUrl, 1000);
    const frameHashCode = useMemo(() => hashCode(iframeUrl), [iframeUrl]);

    const [hasLoaded, setHasLoaded] = useState(false);
    const handleLoad = useCallback(() => setHasLoaded(true), []);

    const isValidUrl = useMemo(() => /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi.test(iframeUrl), [iframeUrl]);

    useEffect(() => {
        if (isValidUrl) {
            setHasLoaded(null);
        }
    }, [isValidUrl]);

    return (
        <div className={classes.container}>
            <EditDialogField
                error={errors.codingReason}
                title={(
                    <FormattedMessage
                        id="Soundtrack.editDialog.embedUrl.title"
                        defaultMessage="Enter a Spotify embed URL."
                    />
                )}
            >
                <TextField onChange={handleChange} name="embedUrl" value={embedUrl} variant="flat" fullWidth />
            </EditDialogField>
            <div className={classes.divider} />
            <div className={classes.iframeContainer}>
                {hasLoaded === null && (
                    <LoadingSpinner />
                )}
                {isValidUrl && (
                    <iframe
                        className={classes.iframe}
                        key={frameHashCode}
                        title="Soundtrack"
                        src={iframeUrl}
                        height={375}
                        width={600}
                        frameBorder="0"
                        allow="encrypted-media"
                        onLoad={handleLoad}
                    />
                )}
            </div>
        </div>
    );
};
