import React, { useCallback, useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { Button, Card, PopperCardActions, TextField, Typography } from '@wld/ui';

import { BouncingRoundButton } from '../../../../../../commons/bouncing_round_button/bouncing_round_button';

import { styles } from './gif_card_styles';

const useStyles = createUseStyles(styles);

const GifCardComponent = ({
    name,
    gifUrl,
    imageEditable,
    additionalActions,
    onImageEditClick,
    onChange,
    onRemove,
    error
}) => {
    const classes = useStyles();
    const [input, setInput] = useState(name);

    const handleTextFieldChange = useCallback(event => setInput(event.target.value), []);

    const isSaveDisabled = useMemo(() => !input || input === name, [input, name]);

    const handleSave = useCallback(() => {
        if (isSaveDisabled || typeof onChange !== 'function') {
            return;
        }
        onChange('name')(input);
    }, [onChange, isSaveDisabled, input]);

    return (
        <>
            <Card className={classes.container}>
                <div className={classes.imageContainer}>
                    {error?.gifUrl && (
                        <Typography color="danger" variant="p">
                            {error?.gifUrl}
                        </Typography>
                    )}
                    {gifUrl && <img className={classes.image} src={gifUrl} alt={name} />}
                    {(imageEditable || additionalActions) && (
                        <div className={classes.actions}>
                            {imageEditable && (
                                <BouncingRoundButton title="Change this gif" onClick={onImageEditClick} />
                            )}
                            {additionalActions}
                        </div>
                    )}
                </div>
                <div className={classes.content}>
                    <TextField
                        customClasses={{ container: classes.textField }}
                        fullWidth
                        placeholder="Gif's name"
                        variant="flat"
                        value={input}
                        onChange={handleTextFieldChange}
                    />
                    {error?.name && (
                        <Typography color="danger" component="div" variant="helper">
                            {error?.name}
                        </Typography>
                    )}
                </div>
                <PopperCardActions>
                    <Button color="danger" size="small" onClick={onRemove}>
                        <FormattedMessage id="Main.lang.remove" defaultMessage="Remove" />
                    </Button>
                    <Button disabled={isSaveDisabled} size="small" color="primary" onClick={handleSave}>
                        <FormattedMessage id="Main.lang.save" defaultMessage="Save" />
                    </Button>
                </PopperCardActions>
            </Card>
        </>
    );
};

export const GifCard = GifCardComponent;
