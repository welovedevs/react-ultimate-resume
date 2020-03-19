import React, { useCallback, useContext, useMemo, useRef } from 'react';

import { createUseStyles, useTheme } from 'react-jss';
import { useDebounce } from 'use-debounce';

import { PopperCard, Checkbox } from '@wld/ui';

import { PaletteVisual } from '../palette_visual/palette_visual';
import { Context } from '../card_orderer/cards_orderer';
import { ReactComponent as BasicsSvg } from '../../../../../assets/cards/basics.svg';
import { ReactComponent as HobbiesSvg } from '../../../../../assets/cards/hobbies.svg';
import { ReactComponent as InterestedBySvg } from '../../../../../assets/cards/interested_by.svg';
import { ReactComponent as LanguagesSvg } from '../../../../../assets/cards/languages.svg';
import { ReactComponent as LocationSvg } from '../../../../../assets/cards/location.svg';
import { ReactComponent as ProjectsSvg } from '../../../../../assets/cards/projects.svg';
import { ReactComponent as SchoolSvg } from '../../../../../assets/cards/school.svg';
import { ReactComponent as SkillsSvg } from '../../../../../assets/cards/skills.svg';
import { ReactComponent as SoundtrackSvg } from '../../../../../assets/cards/soundtrack.svg';
import { ReactComponent as ExperiencesSvg } from '../../../../../assets/cards/experiences.svg';

import { useOpenerState } from '../../../../hooks/use_opener_state';
import { getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';
import { CARD_STUB_TRANSLATIONS } from './card_stub_translations';

import { styles } from './card_stub_styles';

const useStyles = createUseStyles(styles);

const CARD_TYPE_MAPPING = Object.freeze({
    basics: BasicsSvg,
    projects: ProjectsSvg,
    language: LanguagesSvg,
    dreamjob: LocationSvg,
    gifs: HobbiesSvg,
    experiences: ExperiencesSvg,
    studies: SchoolSvg,
    skills: SkillsSvg,
    soundtrack: SoundtrackSvg,
    interestedBy: InterestedBySvg
});

const CardStubComponent = ({ data: { type, variant }, cardIndex, onItemChanged }) => {
    const classes = useStyles({ variant });
    const [openPopperCard, handlers] = useOpenerState();
    const [debouncedOpenPopperCard] = useDebounce(openPopperCard, openPopperCard ? 300 : 0);
    const containerReference = useRef();
    const { isSorting } = useContext(Context);

    const Component = useMemo(() => CARD_TYPE_MAPPING[type] ?? (() => null), []);

    const onVariantChanged = useCallback(
        value => () => {
            onItemChanged(cardIndex, { type, variant: value });
        },
        [onItemChanged]
    );

    return (
        <div className={classes.container} ref={containerReference} {...handlers}>
            <Component className={classes.card} />
            <PopperCard
                open={!isSorting && debouncedOpenPopperCard}
                anchorElement={containerReference.current}
                customClasses={{ popper: classes.popper }}
                popperProps={{ placement: 'right' }}
            >
                <CardVariants variant={variant} onVariantChanged={onVariantChanged} classes={classes} />
            </PopperCard>
        </div>
    );
};

const CardVariants = ({ variant, onVariantChanged, classes }) => {
    const theme = useTheme();
    const handleMouseDown = useCallback(event => {
        event.preventDefault();
        event.stopPropagation();
    }, []);
    return (
        <div className={classes.popperCardContent}>
            <li className={classes.cardVariantsList}>
                {theme.components?.cards?.variants?.map((colorScheme, variantIndex) => (
                    <ul className={classes.cardVariantsListItem} key={`card_variant_${variantIndex}`}>
                        <Checkbox
                            className={classes.cardVariantsCheckbox}
                            color="primary"
                            variant="outlined"
                            checked={variant === variantIndex}
                            onChange={onVariantChanged(variantIndex)}
                            onMouseDown={handleMouseDown}
                        />
                        <PaletteVisual
                            classes={{
                                color: classes.cardVariantsColor,
                                tooltipPopper: classes.cardVariantsTooltipPopper
                            }}
                            translations={CARD_STUB_TRANSLATIONS}
                            palette={Object.entries(colorScheme || {}).reduce(
                                (acc, [key, colorName]) => ({
                                    ...acc,
                                    [key]: { 500: getHexFromPaletteColor(theme, colorName) }
                                }),
                                {}
                            )}
                        />
                    </ul>
                ))}
            </li>
        </div>
    );
};

export const CardStub = CardStubComponent;
