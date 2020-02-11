import React, { useCallback, useMemo } from 'react';
import { palettes } from './utils/palettes';
import { DialogContent, ListItem } from '@material-ui/core';

import { createUseStyles } from 'react-jss';
import PaletteHelper from 'values.js';
import { styles } from './palette_picker_styles';
import { Select } from '../../../../commons/select/select';
import { Typography } from '@wld/ui';
import { FormattedMessage } from 'react-intl';

const useStyles = createUseStyles(styles);
const buildShadedPalette = hex => {
    const values = new PaletteHelper(hex);
    return {
        50: `#${values.tint(10).hex}`,
        100: `#${values.tint(20).hex}`,
        200: `#${values.tint(40).hex}`,
        300: `#${values.tint(60).hex}`,
        400: `#${values.tint(80).hex}`,
        500: hex,
        600: `#${values.shade(20).hex}`,
        700: `#${values.shade(40).hex}`,
        800: `#${values.shade(60).hex}`,
        900: `#${values.shade(80).hex}`,
        contrastDefaultColor: 'light'
    };
};
export const PalettePicker = ({ value: currentPalette, onChange }) => {
    const classes = useStyles();
    const selectedPalette = useMemo(
        () =>
            currentPalette && [
                currentPalette?.primary?.[500],
                currentPalette?.secondary?.[500],
                currentPalette?.tertiary?.[500]
            ],
        [currentPalette]
    );
    const onSelectChanged = useCallback(value => {
        const [primary, secondary, tertiary] = value;
        return onChange({
            primary: buildShadedPalette(primary),
            secondary: buildShadedPalette(secondary),
            tertiary: buildShadedPalette(tertiary)
        });
    }, []);
    return (
        <div>
            <Typography customClasses={{ container: classes.title }} component="h3" variant="h4" color="dark">
                <FormattedMessage id={'PalettePicker.field.title'} defaultMessage={'Choose your palette'} />
            </Typography>

            <div className={classes.picker}>
                {selectedPalette && (
                    <div className={classes.currentPalette}>
                        <Typography>
                            <FormattedMessage id={'PalettePicker.field.title'} defaultMessage={'Current palette'} />
                        </Typography>
                        <div className={classes.colorSquare} style={{ backgroundColor: selectedPalette[0] }} />
                        <div className={classes.colorSquare} style={{ backgroundColor: selectedPalette[1] }} />
                        <div className={classes.colorSquare} style={{ backgroundColor: selectedPalette[2] }} />
                    </div>
                )}
                <Select
                    textFieldProps={{
                        variant: 'flat',
                        size: 'small'
                    }}
                    value={'Select a palette'}
                    onChange={onSelectChanged}
                >
                    {palettes.map((palette, index) => (
                        <ListItem className={classes.palette} value={[palette[0], palette[2], palette[4]]}>
                            {index}
                            <div className={classes.colorSquare} style={{ backgroundColor: palette[0] }} />
                            <div className={classes.colorSquare} style={{ backgroundColor: palette[2] }} />
                            <div className={classes.colorSquare} style={{ backgroundColor: palette[4] }} />
                        </ListItem>
                    ))}
                </Select>
            </div>
        </div>
    );
};
