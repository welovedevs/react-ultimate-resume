import React, { memo, useCallback, useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Typography } from '@welovedevs/ui';
import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontVector } from '../../../../commons/profile_card/profile_card_front_vector/profile_card_front_vector';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';

import { ReactComponent as CertificationLogo } from '../../../../../assets/icons/certification.svg';

import { SIDES } from '../../../../commons/profile_card/profile_card_side/side';
import { styles } from './certifications_front_styles';
import { useCardSide } from '../../../../hooks/profile_card_hooks/use_card_side';
import { existsAndNotEmpty } from '../../../utils/exists_and_not_empty';
import { NoDataButton } from '../../../../commons/no_data_button/no_data_button';

const useStyles = createUseStyles(styles);

const CertificationsFrontComponent = ({ data: { certifications: data }, handleAddButtonClick }) => {
    const classes = useStyles();
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === SIDES.FRONT ? SIDES.BACK : SIDES.FRONT), [
        side,
        setSide
    ]);

    const hasCertification = useMemo(() => existsAndNotEmpty(data), [data]);

    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer classes={{ container: classes.container }}>
                    <Content {...{ hasCertification, data, handleAddButtonClick, classes }} />
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            {hasCertification && (
                <ProfileCardActions>
                    <ProfileCardButton onClick={handleButtonClick}>
                        <FormattedMessage id="Certifications.front.action" defaultMessage="All my certifications" />
                    </ProfileCardButton>
                </ProfileCardActions>
            )}
        </>
    );
};

const Content = ({ hasCertification, data, handleAddButtonClick, classes }) => {
    if (hasCertification) {
        return (
            <>
                <ProfileCardFrontVector classes={{ container: classes.logo }} vector={CertificationLogo} />
                <ProfileCardFrontTypography classes={{ container: classes.typography }}>
                    <FormattedMessage
                        id="Certifications.title"
                        defaultMessage="Certified at {issuerName}"
                        values={{ issuerName: data?.[0]?.issuer }}
                    />
                </ProfileCardFrontTypography>
            </>
        );
    }
    return (
        <div className={classes.noCertification}>
            <Typography variant="h3" component="h3" classes={{ container: classes.noCertificationTypography }}>
                <FormattedMessage
                    id="Certifications.front.empty"
                    defaultMessage="You haven't added any certifications yet!"
                />
            </Typography>
            <NoDataButton
                handleAddButtonClick={handleAddButtonClick}
                classes={{
                    container: classes.addButton
                }}
            >
                <FormattedMessage id="Certifications.empty.buttonLabel" defaultMessage="Add certification" />
            </NoDataButton>
        </div>
    );
};

export const CertificationsFront = memo(CertificationsFrontComponent);
