import React, { useCallback, useRef } from 'react';

import cn from 'classnames';
import makeStyles from '@mui/styles/makeStyles';

import { Typography } from '@welovedevs/ui';

import { PaletteVisual } from '../palette_visual/palette_visual';

import { buildShadedPalette } from './utils/build_shaded_palette';

import { styles } from './palettes_list_styles';
import { palettes } from './utils/palettes';

const useStyles = makeStyles(styles);

const PalettesListComponent = ({ value: currentPalette, onChange, classes: receivedClasses = {} }) => {
    const classes = useStyles();
    const containerReference = useRef();

    const onSelectChanged = useCallback(
        (value) => () => {
            const [primary, secondary, tertiary] = value;
            return onChange({
                primary: buildShadedPalette(primary),
                secondary: buildShadedPalette(secondary),
                tertiary: buildShadedPalette(tertiary)
            });
        },
        []
    );

    return (
        <div
            ref={containerReference}
            id={`scrollable_${classes.container}`}
            className={cn(classes.container, receivedClasses.container)}
        >
            {currentPalette && (
                <div className={classes.selectedPaletteContainer}>
                    <PaletteVisual palette={currentPalette} />
                    <div className={classes.divider} />
                </div>
            )}

            <div>
                {palettes.map((item, paletteIndex) => (
                    <button
                        key={`palette_${item.join('_')}_${paletteIndex}`}
                        type="button"
                        className={classes.selectablePaletteContainer}
                        onClick={onSelectChanged(item)}
                    >
                        <Typography
                            color="dark"
                            classes={{
                                container: classes.selectablePaletteIndex
                            }}
                            variant="h3"
                        >
                            {`${paletteIndex + 1}.`}
                        </Typography>
                        <PaletteVisual
                            classes={{
                                tooltipPopper: classes.tooltipPopper,
                                color: classes.paletteVisualColor
                            }}
                            palette={['primary', 'secondary', 'tertiary'].reduce(
                                (acc, keyName, index) => ({
                                    ...acc,
                                    [keyName]: { 500: item[index] }
                                }),
                                {}
                            )}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export const PalettesList = PalettesListComponent;
