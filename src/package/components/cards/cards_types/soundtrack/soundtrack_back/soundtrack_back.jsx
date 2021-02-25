import React, { memo, useCallback, useMemo, useState } from 'react';

import { createUseStyles, useTheme } from 'react-jss';
import { AnimatePresence, motion } from 'framer-motion';

import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { LoadingSpinner } from '../../../../commons/loading_spinner/loading_spinner';

import { getColorsFromCardVariant } from '../../../../../utils/styles/styles_utils';
import { useCardVariant } from '../../../../hooks/profile_card_hooks/use_card_variant';

import { styles } from './soundtrack_back_styles';
import { NoSoundTrack } from './no_soundtrack/no_soundtrack';
import { OPACITY_TRANSITIONS } from '../../../../../utils/framer_motion/common_transitions/opacity_transitions';

const useStyles = createUseStyles(styles);

const SoundtrackBackComponent = ({ data, handleAddButtonClick }) => {
    const classes = useStyles();

    return (
        <CenterContentContainer classes={{ container: classes.container }}>
            <Content {...{ data, handleAddButtonClick, classes }} />
        </CenterContentContainer>
    );
};
const Content = ({ data, handleAddButtonClick, classes }) => {
    const theme = useTheme();
    const [variant] = useCardVariant();

    const {
        components: {
            cards: { height, width }
        }
    } = theme;

    const [hasLoaded, setHasLoaded] = useState(false);

    const color = useMemo(() => getColorsFromCardVariant(theme, variant).color, [theme, variant]);

    const handleLoad = useCallback(() => setHasLoaded(true), []);

    if (!data?.embedUrl) {
        return <NoSoundTrack {...{ handleAddButtonClick }} />;
    }

    return (
        <>
            <span className={classes.loadingSpinnerContainer}>
                <AnimatePresence>
                    {!hasLoaded && (
                        <motion.span
                            className={classes.loadingSpinnerChild}
                            variants={OPACITY_TRANSITIONS}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <LoadingSpinner color={color} />
                        </motion.span>
                    )}
                </AnimatePresence>
            </span>
            <motion.iframe
                className={classes.iframe}
                title="Soundtrack"
                src={data.embedUrl}
                height={height}
                width={width}
                frameBorder="0"
                allow="encrypted-media"
                onLoad={handleLoad}
                animate={{ opacity: hasLoaded ? 1 : 0 }}
            />
        </>
    );
};

export const SoundtrackBack = memo(SoundtrackBackComponent);
