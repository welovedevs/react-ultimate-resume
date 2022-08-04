import React, { createContext, useCallback, useContext, useMemo, useRef } from 'react';

import { useTheme } from '@mui/styles';
import makeStyles from '@mui/styles/makeStyles';
import { useDebounce } from 'use-debounce';

import { PopperCard, Checkbox } from '@welovedevs/ui';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { PaletteVisual } from '../palette_visual/palette_visual';
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
import { ReactComponent as SocialSvg } from '../../../../../assets/cards/social.svg';

import { useOpenerState } from '../../../../hooks/use_opener_state';
import { getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';
import { CARD_STUB_TRANSLATIONS } from './card_stub_translations';

import { styles } from './card_stub_styles';

const useStyles = makeStyles(styles);

export const Context = createContext({});

const CARD_TYPE_MAPPING = {
    basics: BasicsSvg,
    projects: ProjectsSvg,
    language: LanguagesSvg,
    dreamjob: LocationSvg,
    gifs: HobbiesSvg,
    experiences: ExperiencesSvg,
    studies: SchoolSvg,
    skills: SkillsSvg,
    soundtrack: SoundtrackSvg,
    interestedBy: InterestedBySvg,
    social: SocialSvg
};

const CardStubComponent = ({ data: { type, variant }, cardIndex, onItemChanged }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: type });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    const classes = useStyles({ variant });
    const [openPopperCard, handlers] = useOpenerState();
    const [debouncedOpenPopperCard] = useDebounce(openPopperCard, openPopperCard ? 300 : 0);
    const { isSorting } = useContext(Context);
    const containerReference = useRef();

    const Component = useMemo(() => CARD_TYPE_MAPPING[type] ?? (() => null), []);

    const onVariantChanged = useCallback(
        (value) => () => {
            onItemChanged(cardIndex, { type, variant: value });
        },
        [onItemChanged]
    );

    return (
        <div ref={setNodeRef} style={style} className={classes.container} {...handlers}>
            <Component className={classes.card} ref={containerReference} {...attributes} {...listeners} />
            <PopperCard
                open={!isSorting && debouncedOpenPopperCard}
                anchorElement={containerReference.current}
                classes={{ popper: classes.popper }}
                popperProps={{ placement: 'right' }}
            >
                <CardVariants variant={variant} onVariantChanged={onVariantChanged} classes={classes} />
            </PopperCard>
        </div>
    );
};

const CardVariants = ({ variant, onVariantChanged, classes }) => {
    const theme = useTheme();
    const handleMouseDown = useCallback((event) => {
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
