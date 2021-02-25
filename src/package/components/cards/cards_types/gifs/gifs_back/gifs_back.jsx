import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import Slider from 'react-slick';

import { Typography } from '@welovedevs/ui';

import { ReactComponent as ArrowIcon } from '../../../../../assets/icons/arrow-right.svg';

import { GifsSidesCommons } from '../gifs_sides_commons/gifs_sides_commons';

import { useCardVariant } from '../../../../hooks/profile_card_hooks/use_card_variant';

import { GIFS_BACK_TRANSITIONS_PROPS } from './gifs_back_props';

import { styles } from './gifs_back_styles';
import { existsAndNotEmpty } from '../../../utils/exists_and_not_empty';
import { NoHobby } from './no_hobby/no_hobby';
import { AnimatePresence, motion } from 'framer-motion';
import { DEFAULT_SPRING_TYPE as spring } from '../../../../../utils/framer_motion/common_types/spring_type';

const useStyles = createUseStyles(styles);

const SETTINGS = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: false,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
};

const GifsBackComponent = ({ data, handleAddButtonClick }) => {
    const [variant] = useCardVariant();
    const classes = useStyles({ variant });
    const [previousIndex, setPreviousIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleBeforeChange = useCallback((current, next) => {
        setPreviousIndex(current);
        setCurrentIndex(next);
    }, []);

    const sliderReference = useRef();

    const pauseSlider = useCallback(() => sliderReference.current?.slickPause(), []);

    const resumeSlider = useCallback(() => sliderReference.current?.slickPlay(), []);

    return (
        <GifsSidesCommons
            classes={{ credits: classes.credits }}
            underLayer={
                <div className={classes.slidesContainer}>
                    <Slider
                        {...SETTINGS}
                        ref={sliderReference}
                        beforeChange={handleBeforeChange}
                        prevArrow={<Arrow classes={classes} arrowRole="prev" />}
                        nextArrow={
                            <Arrow classes={classes} arrowRole="next" buttonProps={{ className: classes.nextButton }} />
                        }
                    >
                        {(data.interests ?? []).map(({ gifUrl, name }) => (
                            <SlideItem key={`gif_${gifUrl}_${name}`} gifUrl={gifUrl} name={name} classes={classes} />
                        ))}
                    </Slider>
                </div>
            }
            gifUser={data.interests?.[currentIndex]?.gifUser}
        >
            <Content
                {...{ data, previousIndex, currentIndex, pauseSlider, resumeSlider, handleAddButtonClick, classes }}
            />
        </GifsSidesCommons>
    );
};

const Content = ({ data, pauseSlider, previousIndex, currentIndex, resumeSlider, handleAddButtonClick, classes }) => {
    const hasHobby = useMemo(() => existsAndNotEmpty(data?.interests), [data]);

    const item = data.interests?.[currentIndex];

    const animationState = useMemo(() => {
        if (previousIndex === currentIndex) {
            return { initial: 'center' };
        }
        if (previousIndex < currentIndex) {
            return {
                initial: 'toTheLeft',
                animate: 'center',
                exit: 'toTheRight'
            };
        }
        return {
            initial: 'toTheRight',
            animate: 'center',
            exit: 'toTheLeft'
        };
    }, [previousIndex, currentIndex]);

    if (!hasHobby) {
        return <NoHobby {...{ handleAddButtonClick }} />;
    }

    return (
        item?.name && (
            <TransitioningItem
                key={item.id || `${new Date().getTime()}`} // mandatory for AnimatePresence (we need to create a new component when item change)
                item={item}
                classes={classes}
                pauseSlider={pauseSlider}
                resumeSlider={resumeSlider}
                motionConfig={{
                    variants: GIFS_BACK_TRANSITIONS_PROPS,
                    ...animationState,
                    transition: spring
                }}
            />
        )
    );
};

const Arrow = ({ classes, onClick, arrowRole }) => (
    <motion.div
        onClick={onClick}
        className={cn(
            classes.arrow,
            arrowRole === 'next' && classes.nextArrow,
            arrowRole === 'prev' && cn(classes.reverseArrow, classes.prevArrow)
        )}
        type="button"
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
    >
        <ArrowIcon />
    </motion.div>
);

const SlideItem = ({ gifUrl, name, classes }) => {
    if (!gifUrl) {
        return <div className={classes.solidBackground} />;
    }
    return (
        <>
            <img key={`gifs_back_carousel_image_${gifUrl}_${name}`} className={classes.image} src={gifUrl} alt={name} />
        </>
    );
};

const TransitioningItem = ({ item, pauseSlider, resumeSlider, classes, motionConfig }) => {
    return (
        <AnimatePresence>
            <motion.div
                {...motionConfig}
                className={classes.transitioningItemWithoutGif}
                onMouseEnter={pauseSlider}
                onMouseLeave={resumeSlider}
            >
                {!item?.gifUrl ? (
                    <Typography
                        classes={{
                            container: classes.slideNameWithoutGif
                        }}
                        color="light"
                        variant="h3"
                        component="h4"
                    >
                        {item.name}
                    </Typography>
                ) : (
                    <Typography classes={{ container: classes.slideName }} color="light" variant="h2" {...motionConfig}>
                        {item.name}
                    </Typography>
                )}
            </motion.div>
        </AnimatePresence>
    );
};

export const GifsBack = memo(GifsBackComponent);
