import React, { useCallback, useMemo, useRef, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import InfiniteScroll from 'react-infinite-scroller';
import { motion } from 'framer-motion';

import { Typography } from '@welovedevs/ui';

import { PaletteVisual } from '../palette_visual/palette_visual';
import { LoadingSpinner } from '../../../../commons/loading_spinner/loading_spinner';

import { buildShadedPalette } from './utils/build_shaded_palette';

import { palettes } from './utils/palettes';

import { PALETTES_LIST_TRANSITIONS_PROPS, PALETTES_ITEM_TRANSITIONS_PROPS } from './palettes_list_transition_props';

import { styles } from './palettes_list_styles';

const useStyles = createUseStyles(styles);

const PalettesListComponent = ({ value: currentPalette, onChange, classes: receivedClasses = {} }) => {
    const classes = useStyles();
    const containerReference = useRef();
    const [itemsToShow, setItemsToShow] = useState(10);

    const displayedPalettes = useMemo(() => palettes.slice(0, itemsToShow), [itemsToShow]);

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

    const setNextDisplayedPalettes = useCallback(() => setItemsToShow(itemsToShow + 10), [itemsToShow, setItemsToShow]);

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
            <InfiniteScroll
                key="scroll"
                hasMore={itemsToShow < palettes.length}
                loader={<LoadingSpinner />}
                pageStart={0}
                useWindow={false}
                loadMore={setNextDisplayedPalettes}
                getScrollParent={() => containerReference.current}
            >
                <motion.div variants={PALETTES_LIST_TRANSITIONS_PROPS} initial="hidden" animate="visible">
                    {displayedPalettes.map((item, paletteIndex) => (
                        <motion.button
                            variants={PALETTES_ITEM_TRANSITIONS_PROPS}
                            key={`palette_${item.join('_')}`}
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
                        </motion.button>
                    ))}
                </motion.div>
            </InfiniteScroll>
        </div>
    );
};

export const PalettesList = PalettesListComponent;
