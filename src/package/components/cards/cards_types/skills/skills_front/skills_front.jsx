import React, { memo, useCallback, useMemo } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles, useTheme } from 'react-jss';
import chroma from 'chroma-js';

import { Typography } from '@welovedevs/ui';
import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';

import { useTechnologies } from '../../../../hooks/technologies/use_technologies';
import { useCardSide } from '../../../../hooks/profile_card_hooks/use_card_side';
import { SIDES } from '../../../../commons/profile_card/profile_card_side/side';

import { styles } from './skills_front_styles';
import { useCardVariant } from '../../../../hooks/profile_card_hooks/use_card_variant';
import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';
import { existsAndNotEmpty } from '../../../utils/exists_and_not_empty';
import { NoDataButton } from '../../../../commons/no_data_button/no_data_button';
import { DEFAULT_TECHNO_HANDLE } from '../../../../../utils/icons';

const useStyles = createUseStyles(styles);

const SkillsFrontComponent = ({ data, handleAddButtonClick }) => {
    const classes = useStyles();
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === SIDES.FRONT ? SIDES.BACK : SIDES.FRONT), [
        side,
        setSide
    ]);

    const { technologies } = useTechnologies();

    const techno = useMemo(() => {
        const firstTechno = data?.skills?.[0];

        if (!technologies || !firstTechno) {
            return { name: firstTechno?.name };
        }
        return technologies[firstTechno?.name] || { name: firstTechno?.name };
    }, [technologies, data]);

    const hasSkill = useMemo(() => existsAndNotEmpty(data?.skills), [data]);

    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer classes={{ container: classes.container }}>
                    <Content {...{ hasSkill, techno, handleAddButtonClick, classes }} />
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            {hasSkill && (
                <ProfileCardActions>
                    <ProfileCardButton onClick={handleButtonClick}>
                        <FormattedMessage id="Skills.front.action" defaultMessage="More skills" />
                    </ProfileCardButton>
                </ProfileCardActions>
            )}
        </>
    );
};

const Content = ({ hasSkill, techno, handleAddButtonClick, classes }) => {
    if (hasSkill) {
        return (
            <>
                <Picture techno={techno} classes={classes} />
                <ProfileCardFrontTypography classes={{ container: classes.typography }}>
                    <FormattedMessage
                        id="Skills.front.title"
                        defaultMessage="I mainly write {techno} stuff"
                        values={{ techno: techno?.name }}
                    />
                </ProfileCardFrontTypography>
            </>
        );
    }
    return (
        <div className={classes.noSkill}>
            <Typography variant="h3" component="h3" classes={{ container: classes.noSkillTypography }}>
                <FormattedMessage
                    id="Skills.front.noSkill"
                    defaultMessage="Vous n'avez pas encore ajouté de compétences !"
                />
            </Typography>
            <NoDataButton
                handleAddButtonClick={handleAddButtonClick}
                classes={{
                    container: classes.addButton
                }}
            >
                <FormattedMessage id="Skills.noSkill.buttonLabel" defaultMessage="Ajouter une compétence" />
            </NoDataButton>
        </div>
    );
};

const Picture = ({ techno, classes }) => {
    const theme = useTheme();
    const [variant] = useCardVariant();
    const { backgroundColor } = getColorsFromCardVariant(theme, variant);
    const src = useMemo(() => {
        const hex = getHexFromPaletteColor(theme, backgroundColor);
        const luminance = chroma(hex).luminance();
        if (luminance < 0.98) {
            return `https://process.filestackapi.com/output=format:png/negative/modulate=brightness:1000/compress/${
                techno?.handle || DEFAULT_TECHNO_HANDLE
            }`;
        }
        return `https://process.filestackapi.com/output=format:png/${techno?.handle || DEFAULT_TECHNO_HANDLE}`;
    }, [techno, theme, backgroundColor]);
    if (!src || !techno) {
        return null;
    }
    return <img src={src} alt={techno?.name} className={classes.logo} />;
};

export const SkillsFront = memo(SkillsFrontComponent);
