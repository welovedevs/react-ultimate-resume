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

const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
const SPOTIFY_DOMAIN = 'https://open.spotify.com';

export const SoundtrackCardEditDialog = ({ open, onClose, data, onEdit, isEditing }) => (
    <EditDialog
        data={data}
        onEdit={onEdit}
        onClose={onClose}
        isEditing={isEditing}
        open={open}
        title={
            <FormattedMessage
                id="Sountrack.editDialog.title"
                defaultMessage="Embed your musical tastes in your profile."
            />
        }
    >
        {helpers => <Content helpers={helpers} />}
    </EditDialog>
);

const Content = ({ helpers: { fullScreen, isMobile } }) => {
    const classes = useStyles({ fullScreen, isMobile });
    const { values, errors, setFieldValue } = useFormikContext();
    const { embedUrl } = values;
    const [iframeUrl] = useDebounce(embedUrl, 1000);
    const frameHashCode = useMemo(() => hashCode(iframeUrl), [iframeUrl]);

    const [hasLoaded, setHasLoaded] = useState(false);
    const handleLoad = useCallback(() => setHasLoaded(true), []);

    const handleFieldChange = useCallback(
        event => {
            const {
                target: { value }
            } = event;
            if (!URL_REGEX.test(value) || !value.startsWith(SPOTIFY_DOMAIN)) {
                return;
            }
            let finalValue = value;
            if (!value.includes('/embed')) {
                finalValue = `${value.substring(0, SPOTIFY_DOMAIN.length)}/embed/${value.substring(
                    SPOTIFY_DOMAIN.length + 1,
                    value.length
                )}`;
            }
            setFieldValue('embedUrl', finalValue);
        },
        [setFieldValue, embedUrl]
    );

    const clearField = useCallback(() => {
        setFieldValue('embedUrl', '');
    }, [setFieldValue]);

    const isValidUrl = useMemo(() => URL_REGEX.test(iframeUrl) && iframeUrl?.includes('/embed'), [iframeUrl]);

    useEffect(() => {
        if (isValidUrl) {
            setHasLoaded(null);
        }
    }, [isValidUrl]);

    return (
        <div className={classes.container}>
            <EditDialogField
                classes={{ container: classes.field }}
                error={errors.codingReason}
                title={
                    <FormattedMessage
                        id="Soundtrack.editDialog.embedUrl.title"
                        defaultMessage="Enter a Spotify embed URL."
                    />
                }
                subtitle={
                    <FormattedMessage
                        id="Soundtrack.editDialog.embedUrl.subtitle"
                        defaultMessage="Ex: https://open.spotify.com/embed/album/79dL7FLiJFOO0EoehUHQBv"
                    />
                }
            >
                <TextField
                    onChange={handleFieldChange}
                    name="embedUrl"
                    value={embedUrl}
                    variant="flat"
                    onClick={clearField}
                    onFocus={clearField}
                    fullWidth
                />
            </EditDialogField>
            <div className={classes.divider} />
            <div className={classes.iframeContainer}>
                {hasLoaded === null && <LoadingSpinner />}
                {iframeUrl && (
                    <iframe
                        className={classes.iframe}
                        key={frameHashCode}
                        title="Soundtrack"
                        src={iframeUrl}
                        height="100%"
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
