import React, { useCallback, useContext } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Typography } from '@wld/ui';

import { styles } from './basics_front_styles';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardActions } from '../../../../commons/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card_button/profile_card_button';
import { ProfileCardContext } from '../../../../commons/profile_card/profile_card';

const useStyles = createUseStyles(styles);

const BasicsFrontComponent = ({ data, variant }) => {
    const classes = useStyles();
    const { side, setSide } = useContext(ProfileCardContext);
    const { currentPosition, currentCity } = data;
    const handleButtonClick = useCallback(() => setSide(side === 'front' ? 'back' : 'front'), [side]);
    return (
        <div className={classes.container}>
            <CenterContentContainer>
                <Typography variant="h1" component="h2" customClasses={{ container: classes.title }}>
                    <FormattedMessage
                        id="Basics.Front.MainPhrase"
                        defaultMessage={'{currentPosition} based in {currentCity}'}
                        values={{ currentCity, currentPosition }}
                    />
                </Typography>
            </CenterContentContainer>
            <ProfileCardActions>
                <ProfileCardButton
                    cardVariant={variant}
                    onClick={handleButtonClick}
                >
                    More about me
                </ProfileCardButton>
            </ProfileCardActions>
        </div>
    );
};

export const BasicsFront = BasicsFrontComponent;
