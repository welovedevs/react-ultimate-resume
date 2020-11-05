import React, { useCallback, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { Button, Card, PopperCardActions, TextField, Typography } from '@welovedevs/ui';

import { BouncingRoundButton } from '../../../../../../commons/bouncing_round_button/bouncing_round_button';

import { styles } from './gif_card_styles';
import { translations } from './gif_card_translations';
import { GifAuthorCredits } from '../../../../../../commons/gifs/gif_author_credits/gif_author_credits';

const useStyles = createUseStyles(styles);

export const GifCard = ({
    name,
    gifUrl,
    gifUser,
    imageEditable,
    additionalActions,
    onImageEditClick,
    onChange,
    onRemove,
    error
}) => {
    const classes = useStyles();
    const { formatMessage } = useIntl();

    const [input, setInput] = useState(name);

    const handleTextFieldChange = useCallback((event) => {
        const {
            target: { value }
        } = event;
        setInput(value);
        onChange('name')(value);
    }, []);

    useEffect(() => setInput(name), [name]);

    return (
        <>
            <Card className={classes.container}>
                {(imageEditable || additionalActions) && (
                    <div className={classes.actions}>
                        {imageEditable && gifUrl && (
                            <BouncingRoundButton
                                title={
                                    <FormattedMessage
                                        id="GifsEditDialog.gifCard.changeGif"
                                        defaultMessage="Update this gif"
                                    />
                                }
                                onClick={onImageEditClick}
                            />
                        )}
                        {additionalActions}
                    </div>
                )}
                <CardTopHalf
                    error={error}
                    gifUrl={gifUrl}
                    gifUser={gifUser}
                    name={name}
                    onImageEditClick={onImageEditClick}
                    classes={classes}
                />
                <div className={classes.content}>
                    <TextField
                        classes={{ container: classes.textField }}
                        fullWidth
                        placeholder={formatMessage(translations.hobbiesNamePlaceholder)}
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
                </PopperCardActions>
            </Card>
        </>
    );
};

const CardTopHalf = ({ error, gifUrl, gifUser, classes, name, onImageEditClick }) => {
    if (!gifUrl) {
        return (
            <div className={classes.addGifButtonContainer}>
                <Button
                    classes={{
                        container: classes.addGifButton
                    }}
                    color="primary"
                    variant="outlined"
                    onClick={onImageEditClick}
                >
                    <FormattedMessage id="GifsEditDialog.gifCard.addGif" defaultMessage="Add a gif" />
                </Button>
            </div>
        );
    }
    return (
        <div className={classes.imageContainer}>
            {error?.gifUrl && (
                <Typography color="danger" variant="p">
                    {error?.gifUrl}
                </Typography>
            )}
            <img className={classes.image} src={gifUrl} alt={name} />
            {gifUser && <GifAuthorCredits user={gifUser} />}
        </div>
    );
};
