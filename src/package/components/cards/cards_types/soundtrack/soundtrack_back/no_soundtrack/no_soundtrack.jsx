import React from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Typography } from '@wld/ui';

import { styles } from './no_soundtrack_styles';
import { NoDataButton } from '../../../../../commons/no_data_button/no_data_button';

const useStyles = createUseStyles(styles);

const NoSoundTrackComponent = ({ handleAddButtonClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography style={{ color: 'inherit' }} variant="h4" component="h4">
                <FormattedMessage
                    id="SoundTrack.noSoundTrack.title"
                    defaultMessage="Ajoutez ici une playlist qui vous représente pour partagez aux recruteurs votre humeur et goût musicaux !"
                />
            </Typography>
            <NoDataButton
                handleAddButtonClick={handleAddButtonClick}
                classes={{
                    container: classes.button
                }}
            >
                <FormattedMessage id="SoundTrack.noSoundTrack.buttonLabel" defaultMessage="Ajouter une playlist" />
            </NoDataButton>
        </div>
    );
};

export const NoSoundTrack = NoSoundTrackComponent;
