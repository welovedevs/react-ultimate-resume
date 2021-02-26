import React, { memo, useCallback, useMemo } from 'react';

import { createUseStyles } from 'react-jss';

import { FormattedMessage } from 'react-intl';
import { Typography } from '@welovedevs/ui';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { SIDES } from '../../../../commons/profile_card/profile_card_side/side';

import { styles } from './languages_front_styles';
import { useCardSide } from '../../../../hooks/profile_card_hooks/use_card_side';
import { existsAndNotEmpty } from '../../../utils/exists_and_not_empty';
import { NoDataButton } from '../../../../commons/no_data_button/no_data_button';

const useStyles = createUseStyles(styles);

const LanguagesFrontComponent = ({ data, handleAddButtonClick }) => {
    const classes = useStyles();
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === SIDES.FRONT ? SIDES.BACK : SIDES.FRONT), [
        side,
        setSide
    ]);

    const languagesNode = (
        <>
            {data.languages?.[0]?.language}
            <br />
            {data.languages?.[1]?.language}
            <br />
            {data.languages?.[2]?.language}
        </>
    );

    const hasLanguage = useMemo(() => existsAndNotEmpty(data?.languages), [data]);

    return (
        <>
            <CenterContentContainer>
                <Content {...{ hasLanguage, languagesNode, handleAddButtonClick, classes }} />
            </CenterContentContainer>
            {hasLanguage && (
                <ProfileCardActions>
                    <ProfileCardButton onClick={handleButtonClick}>
                        <FormattedMessage id="Languages.front.action" defaultMessage="Languages level" />
                    </ProfileCardButton>
                </ProfileCardActions>
            )}
        </>
    );
};

const Content = ({ hasLanguage, languagesNode, handleAddButtonClick, classes }) => {
    if (hasLanguage) {
        return (
            <ProfileCardFrontTypography classes={{ container: classes.typography }}>
                <FormattedMessage
                    id="Languages.front.content"
                    defaultMessage="I speak {languagesNode}"
                    values={{ languagesNode }}
                />
            </ProfileCardFrontTypography>
        );
    }
    return (
        <div className={classes.noLanguage}>
            <Typography variant="h3" component="h3" classes={{ container: classes.noLanguageTypography }}>
                <FormattedMessage
                    id="Languages.front.noLanguage"
                    defaultMessage="Vous n'avez pas encore ajouté de langues !"
                />
            </Typography>
            <NoDataButton
                handleAddButtonClick={handleAddButtonClick}
                classes={{
                    container: classes.addButton
                }}
            >
                <FormattedMessage id="Languages.noLanguage.buttonLabel" defaultMessage="Ajouter une langue" />
            </NoDataButton>
        </div>
    );
};

export const LanguagesFront = memo(LanguagesFrontComponent);
