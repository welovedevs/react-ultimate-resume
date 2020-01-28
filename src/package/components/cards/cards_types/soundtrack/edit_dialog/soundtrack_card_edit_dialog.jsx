import React, { useCallback, useDebugValue, useMemo, useState } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import { useFormikContext } from 'formik';

import { TextField } from '@wld/ui';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { EditDialogField } from '../../../../commons/edit_dialog_field/edit_dialog_field';
import { animated } from 'react-spring';
import { useDebounce } from 'use-debounce';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from './soundtrack_card_edit_dialog_styles';
import { hashCode } from '../../../../../utils/string_utils';
import { LoadingSpinner } from '../../../../commons/loading_spinner/loading_spinner';
import { useCardVariant } from '../../../../commons/profile_card/profile_card_hooks/use_card_variant';
import { getColorsFromCardVariant } from '../../../../../utils/styles/styles_utils';

const useStyles = createUseStyles(styles);

const SoundtrackCardEditDialogContent = () => {
    const classes = useStyles();
    const { values, errors, handleChange } = useFormikContext();
    const { embedUrl } = values;
    const [iframeUrl] = useDebounce(embedUrl, 1000);
    const frameHashCode = useMemo(() => hashCode(iframeUrl), [iframeUrl]);

    const [hasLoaded, setHasLoaded] = useState(false);
    const handleLoad = useCallback(() => setHasLoaded(true), []);

    return (
        <div className={classes.container}>
            <EditDialogField
                error={errors.codingReason}
                title={<FormattedMessage id="Soundtrack.editDialog.embedUrl.title" defaultMessage="Embed an url ?" />}
            >
                <TextField onChange={handleChange} name="embedUrl" value={embedUrl} variant="flat" fullWidth />
            </EditDialogField>
            <div className={classes.iframe}>
                {!hasLoaded && <LoadingSpinner color="primary" />}
                <animated.iframe
                    key={frameHashCode}
                    title="Soundtrack"
                    src={iframeUrl}
                    height={300}
                    width={200}
                    frameBorder="0"
                    allow="encrypted-media"
                    onLoad={handleLoad}
                />
            </div>
        </div>
    );
};
export const SoundtrackCardEditDialog = ({ data, onEdit, onClose }) => {
    return (
        <EditDialog
            data={data}
            onEdit={onEdit}
            onClose={onClose}
            open
            title={
                <FormattedMessage
                    id="Sountrack.editDialog.title"
                    defaultMessage="Your embed playlist in your profile!"
                />
            }
        >
            {helpers => <SoundtrackCardEditDialogContent helpers={helpers} />}
        </EditDialog>
    );
};
