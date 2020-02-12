import React, { useCallback, useMemo, useRef, useState } from 'react';

import { createUseStyles } from 'react-jss';
import InfiniteScroll from 'react-infinite-scroller';
import { animated, config, useTransition } from 'react-spring';

import { Typography } from '@wld/ui';

import { PaletteVisual } from '../palette_visual/palette_visual';
import { LoadingSpinner } from '../../../../commons/loading_spinner/loading_spinner';

import { buildShadedPalette } from './utils/build_shaded_palette';

import { palettes } from './utils/palettes';

import { styles } from './palettes_list_styles';

const useStyles = createUseStyles(styles);

const PalettesListComponent = ({ value: currentPalette, onChange }) => {
    const classes = useStyles();
    const containerReference = useRef();
    const [itemsToShow, setItemsToShow] = useState(10);

    const displayedPalettes = useMemo(() => palettes.slice(0, itemsToShow), [itemsToShow]);

    const selectedPalette = useMemo(
        () =>
            currentPalette && [
                currentPalette?.primary?.[500],
                currentPalette?.secondary?.[500],
                currentPalette?.tertiary?.[500]
            ],
        [currentPalette]
    );

    const onSelectChanged = useCallback(value => () => {
        const [primary, secondary, tertiary] = value;
        return onChange({
            primary: buildShadedPalette(primary),
            secondary: buildShadedPalette(secondary),
            tertiary: buildShadedPalette(tertiary)
        });
    }, []);

    const setNextDisplayedPalettes = useCallback(() => {
        setItemsToShow(itemsToShow + 10);
    }, [itemsToShow, setItemsToShow]);

    const transitions = useTransition(displayedPalettes, (item) => `palette_${item.join('_')}`, ({
        from: ({
            opacity: 0,
            transform: 'translate3d(-20px, 0, 0)'
        }),
        enter: ({
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
        }),
        leave: ({
            opacity: 0,
            transform: 'translate3d(-20px, 0, 0)'
        }),
        trail: 1000 / 10,
        config: config.wobbly,
        unique: true
    }));

    return (
        <div
            ref={containerReference}
            id={`scrollable_${classes.container}`}
            className={classes.container}
        >
            {currentPalette && (
                <div className={classes.selectedPaletteContainer}>
                    <PaletteVisual palette={currentPalette} />
                    <div className={classes.divider} />
                </div>
            )}
            <InfiniteScroll
                hasMore={itemsToShow < palettes.length}
                loader={(
                    <LoadingSpinner />
                )}
                pageStart={0}
                useWindow={false}
                loadMore={setNextDisplayedPalettes}
                getScrollParent={() => containerReference.current}
            >
                {transitions.map(({ item, key, props }, paletteIndex) => (
                    <animated.button
                        key={key}
                        type="button"
                        className={classes.selectablePaletteContainer}
                        onClick={onSelectChanged(item)}
                        style={props}
                    >
                        <Typography
                            color="dark"
                            customClasses={{
                                container: classes.selectablePaletteIndex
                            }}
                            variant="h3"
                        >
                            {`${paletteIndex + 1}.`}
                        </Typography>
                        <PaletteVisual
                            palette={['primary', 'secondary', 'tertiary'].reduce((acc, keyName, index) => ({
                                ...acc,
                                [keyName]: { 500: item[index] }
                            }), {})}
                        />
                    </animated.button>
                ))}
            </InfiniteScroll>
        </div>
    );
};

export const PalettesList = PalettesListComponent;
