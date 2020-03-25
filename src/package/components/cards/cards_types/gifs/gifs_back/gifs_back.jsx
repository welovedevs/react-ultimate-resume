import React, { memo, useCallback, useMemo, useRef, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import Slider from 'react-slick';
import { animated, useSpring, useTransition } from 'react-spring';

import { Typography } from '@wld/ui';

import { ReactComponent as ArrowIcon } from '../../../../../assets/icons/arrow-right.svg';

import { GifsSidesCommons } from '../gifs_sides_commons/gifs_sides_commons';

import { useCardVariant } from '../../../../hooks/profile_card_hooks/use_card_variant';

import { GIFS_BACK_TRANSITIONS_SPRING_PROPS } from './gifs_back_spring_props';

import { styles } from './gifs_back_styles';
import { existsAndNotEmpty } from '../../../utils/exists_and_not_empty';
import { NoHobby } from './no_hobby/no_hobby';

const useStyles = createUseStyles(styles);

const SETTINGS = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
};

const GifsBackComponent = ({ data, handleAddButtonClick }) => {
    const [variant] = useCardVariant();
    const classes = useStyles({ variant });
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasChanged = useRef();
    const handleBeforeChange = useCallback(
        (current, next) => {
            if (!hasChanged.current) {
                hasChanged.current = true;
            }
            setCurrentIndex(next);
        },
        [hasChanged.current]
    );

    const sliderReference = useRef();

    const pauseSlider = useCallback(() => sliderReference.current?.slickPause(), []);

    const resumeSlider = useCallback(() => sliderReference.current?.slickPlay(), []);

    return (
        <GifsSidesCommons
            underLayer={
                <div className={classes.slidesContainer}>
                    <Slider
                        {...SETTINGS}
                        ref={sliderReference}
                        beforeChange={handleBeforeChange}
                        prevArrow={
                            <Arrow
                                classes={classes}
                                arrowRole="prev"
                                buttonProps={{ className: classes.previousButton }}
                            />
                        }
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
        >
            <Content
                {...{ data, hasChanged, currentIndex, pauseSlider, resumeSlider, handleAddButtonClick, classes }}
            />
        </GifsSidesCommons>
    );
};

const Content = ({ data, pauseSlider, hasChanged, currentIndex, resumeSlider, handleAddButtonClick, classes }) => {
    const hasHobby = useMemo(() => existsAndNotEmpty(data?.interests), [data]);

    const transitions = useTransition(data.interests?.[currentIndex] ?? {}, item => `gif_name_${item.name}`, {
        ...GIFS_BACK_TRANSITIONS_SPRING_PROPS,
        immediate: !hasChanged.current
    });

    if (!hasHobby) {
        return <NoHobby {...{ handleAddButtonClick }} />;
    }
    return transitions.map(
        ({ item, key, props }) =>
            item?.name && (
                <TransitioningItem
                    item={item}
                    key={key}
                    props={props}
                    classes={classes}
                    pauseSlider={pauseSlider}
                    resumeSlider={resumeSlider}
                />
            )
    );
};

const DEFAULT_ARROW_SPRING_PROPS = Object.freeze({
    scale: 1
});

const PRESSED_ARROW_SPRING_PROPS = Object.freeze({
    scale: 0.9
});

const Arrow = ({ classes, onClick, arrowRole }) => {
    const [springProps, setSpringProps] = useSpring(() => DEFAULT_ARROW_SPRING_PROPS);
    const handleMouseDown = useCallback(() => setSpringProps(PRESSED_ARROW_SPRING_PROPS), [setSpringProps]);
    const handleMouseUp = useCallback(() => setSpringProps(DEFAULT_ARROW_SPRING_PROPS), [setSpringProps]);

    return (
        <animated.button
            onClick={onClick}
            className={cn(
                classes.arrow,
                arrowRole === 'next' && classes.nextArrow,
                arrowRole === 'prev' && cn(classes.reverseArrow, classes.prevArrow)
            )}
            type="button"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onFocus={handleMouseDown}
            onBlur={handleMouseUp}
            style={{
                transform: springProps.scale.to(value => `scale3d(${value}, ${value}, ${value})`)
            }}
        >
            <ArrowIcon />
        </animated.button>
    );
};

const SlideItem = ({ gifUrl, name, classes }) => {
    if (!gifUrl) {
        return <div className={classes.solidBackground} />;
    }
    return <img key={`gifs_back_carousel_image_${gifUrl}_${name}`} className={classes.image} src={gifUrl} alt={name} />;
};

const TransitioningItem = ({ item, props, pauseSlider, resumeSlider, classes }) => {
    if (!item?.gifUrl) {
        return (
            <animated.div
                className={classes.transitioningItemWithoutGif}
                style={props}
                onMouseEnter={pauseSlider}
                onMouseLeave={resumeSlider}
            >
                <Typography
                    customClasses={{
                        container: classes.slideNameWithoutGif
                    }}
                    color="light"
                    variant="h3"
                    component="h4"
                >
                    {item.name}
                </Typography>
            </animated.div>
        );
    }
    return (
        <Typography
            customClasses={{ container: classes.slideName }}
            component={animated.div}
            style={props}
            color="light"
            variant="h2"
        >
            {item.name}
        </Typography>
    );
};

export const GifsBack = memo(GifsBackComponent);
