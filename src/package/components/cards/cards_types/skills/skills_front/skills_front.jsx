import React, { useCallback, useMemo } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles, useTheme } from 'react-jss';
import chroma from 'chroma-js';

import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';

import { useTechnologies } from '../../../../hooks/technologies/use_technologies';
import { useCardSide } from '../../../../commons/profile_card/profile_card_hooks/use_card_side';
import { SIDES } from '../../../../commons/profile_card/profile_card_side/side';

import { styles } from './skills_front_styles';
import { useCardVariant } from '../../../../commons/profile_card/profile_card_hooks/use_card_variant';
import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';

const useStyles = createUseStyles(styles);

const SkillsFrontComponent = ({ data }) => {
    const classes = useStyles();
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === SIDES.FRONT ? SIDES.BACK : SIDES.FRONT), [side, setSide]);

    const { technologies } = useTechnologies();

    const techno = useMemo(() => {
        const firstTechno = data?.skills?.[0];

        if (!technologies || !firstTechno) {
            return null;
        }
        return technologies[firstTechno?.name];
    }, [technologies, data]);
    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer customClasses={{ container: classes.container }}>
                    <Picture techno={techno} classes={classes} />
                    <ProfileCardFrontTypography classes={{ container: classes.typography }}>
                        <FormattedMessage
                            id="Skills.front.title"
                            defaultMessage="I mainly write {techno} stuff"
                            values={{ techno: techno?.name }}
                        />
                    </ProfileCardFrontTypography>
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            <ProfileCardActions>
                <ProfileCardButton onClick={handleButtonClick}>
                    <FormattedMessage id="Skills.front.action" defaultMessage="More skills" />
                </ProfileCardButton>
            </ProfileCardActions>
        </>
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
            return `https://process.filestackapi.com/output=format:png/negative/modulate=brightness:1000/compress/${techno?.handle}`;
        }
        return `https://process.filestackapi.com/output=format:png/${techno?.handle}`;
    }, [techno, theme, backgroundColor]);

    if (!src || !techno) {
        return null;
    }

    return <img src={src} alt={techno?.name} className={classes.logo} />;
};

export const SkillsFront = SkillsFrontComponent;
