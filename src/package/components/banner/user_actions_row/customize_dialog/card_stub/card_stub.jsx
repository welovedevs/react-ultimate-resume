import React, { useCallback, useMemo } from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { ListItem } from '@material-ui/core';
import { Typography } from '@wld/ui';

import { ReactComponent as BasicsSvg } from '../../../../../assets/cards/basics.svg';
import { ReactComponent as HobbiesSvg } from '../../../../../assets/cards/hobbies.svg';
import { ReactComponent as InterestedBySvg } from '../../../../../assets/cards/interested_by.svg';
import { ReactComponent as LanguagesSvg } from '../../../../../assets/cards/languages.svg';
import { ReactComponent as LocationSvg } from '../../../../../assets/cards/location.svg';
import { ReactComponent as ProjectsSvg } from '../../../../../assets/cards/projects.svg';
import { ReactComponent as SchoolSvg } from '../../../../../assets/cards/school.svg';
import { ReactComponent as SkillsSvg } from '../../../../../assets/cards/skills.svg';
import { ReactComponent as SoundtrackSvg } from '../../../../../assets/cards/soundtrack.svg';
import { styles } from './card_stub_styles';
import { Select } from '../../../../commons/select/select';
import { getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';

const useStyles = createUseStyles(styles);

const CARD_TYPE_MAPPING = {
    basics: BasicsSvg,
    projects: ProjectsSvg,
    language: LanguagesSvg,
    dreamjob: LocationSvg,
    gifs: HobbiesSvg,
    experiences: BasicsSvg,
    studies: SchoolSvg,
    skills: SkillsSvg,
    soundtrack: SoundtrackSvg,
    interestedBy: InterestedBySvg
};

const VariantItem = ({ colorScheme, value }) => {
    const classes = useStyles({});

    const theme = useTheme();
    const colors = useMemo(() => Object.values(colorScheme || {}).map(color => getHexFromPaletteColor(theme, color)), [
        theme
    ]);
    return (
        <>
            <Typography>{`#${value + 1}`}</Typography>
            {colors.map((hex, index) => (
                <div key={`${hex}_${index}`} className={classes.colorSquare} style={{ backgroundColor: hex }} />
            ))}
        </>
    );
};
const VariantSelector = ({ value, onChange }) => {
    const theme = useTheme();
    const onSelectChanged = useCallback(
        newValue => onChange(newValue),
        [onChange]
    );
    return (
        <Select
            textFieldProps={{
                variant: 'flat'
            }}
            value={value}
            onChange={onSelectChanged}
        >
            {theme.components?.cards?.variants?.map((colorScheme, variantIndex) => (
                <ListItem key={`select_variant_${variantIndex}`} value={variantIndex}>
                    <VariantItem colorScheme={colorScheme} value={variantIndex} />
                </ListItem>
            ))}
        </Select>
    );
};
export const CardStub = ({ data: { type, variant }, cardIndex, onItemChanged }) => {
    const classes = useStyles({ variant });

    const Component = useMemo(() => CARD_TYPE_MAPPING[type], []);

    const onVariantChanged = useCallback(
        value => {
            onItemChanged(cardIndex, { type, variant: value });
        },
        [onItemChanged]
    );
    return (
        <div className={classes.wrapper}>
            <VariantSelector onChange={onVariantChanged} value={variant} />
            <Component className={classes.card} />
        </div>
    );
};
