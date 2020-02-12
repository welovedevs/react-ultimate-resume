import React, { useCallback, useRef, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import Slider from 'react-slick';
import { animated, config, useSpring, useTransition } from 'react-spring';

import { Typography } from '@wld/ui';

import { ReactComponent as ArrowIcon } from '../../../../../assets/icons/arrow-right.svg';

import { GifsSidesCommons } from '../gifs_sides_commons/gifs_sides_commons';

import { useCardVariant } from '../../../../commons/profile_card/profile_card_hooks/use_card_variant';

import { styles } from './gifs_back_styles';

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

const GifsBackComponent = ({ data }) => {
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

    const transitions = useTransition((data.interests?.[currentIndex] ?? {}).name, item => `gif_name_${item}`, {
        from: {
            opacity: 0,
            transform: 'translate3d(25%, 0, 0)'
        },
        enter: {
            opacity: 1,
            transform: 'translate3d(0%, 0, 0)'
        },
        leave: {
            opacity: 0,
            transform: 'translate3d(-25%, 0, 0)'
        },
        unique: true,
        config: config.slow,
        immediate: !hasChanged.current
    });

    return (
        <GifsSidesCommons
            underLayer={
                <div className={classes.slidesContainer}>
                    <Slider
                        {...SETTINGS}
                        beforeChange={handleBeforeChange}
                        prevArrow={(
                            <Arrow
                                classes={classes}
                                arrowRole="prev"
                                buttonProps={{ className: classes.previousButton }}
                            />
                          )}
                        nextArrow={
                            <Arrow classes={classes} arrowRole="next" buttonProps={{ className: classes.nextButton }} />
                        }
                    >
                        {(data.interests ?? []).map(({ gifUrl, name }) => (
                            <img className={classes.image} src={gifUrl} alt={name} />
                        ))}
                    </Slider>
                </div>
            }
        >
            {transitions.map(({ item, key, props }) => (
                <Typography
                    key={key}
                    component={animated.div}
                    style={props}
                    color="light"
                    variant="h2"
                    customClasses={{ container: classes.slideName }}
                >
                    {item}
                </Typography>
            ))}
        </GifsSidesCommons>
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
                transform: springProps.scale.interpolate(value => `scale3d(${value}, ${value}, ${value})`)
            }}
        >
            <ArrowIcon />
        </animated.button>
    );
};

export const GifsBack = GifsBackComponent;
