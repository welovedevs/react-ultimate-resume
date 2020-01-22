import React, { useCallback, useRef, useState } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import Slider from 'react-slick';
import { animated, useSpring, useTransition, config } from 'react-spring';

import { Typography } from '@wld/ui';

import { ReactComponent as ArrowIcon } from '../../../../../assets/icons/arrow-right.svg';

import { GifsSidesCommons } from '../gifs_sides_commons/gifs_sides_commons';

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

const SLIDES = [
    {
        url: 'https://media.giphy.com/media/d8WjGORtSEWqc/giphy.gif',
        alt: 'Old people holding the holy burrito',
        name: 'Burritos'
    },
    {
        url: 'https://media.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy.gif',
        alt: 'Fluffy Doggy Head',
        name: 'Dogs'
    },
    {
        url: 'https://media.giphy.com/media/EehnUUCH2JcwU/giphy.gif',
        alt: 'Tendresse',
        name: 'Tendresse'
    },
    {
        url: 'https://media.giphy.com/media/xTiTnIuKP1BLsMTerS/giphy.gif',
        alt: 'Something',
        name: 'Something'
    }
];

const GifsBackComponent = ({ variant }) => {
    const classes = useStyles({ cardVariant: variant });
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasChanged = useRef();
    const handleBeforeChange = useCallback((current, next) => {
        if (!hasChanged.current) {
            hasChanged.current = true;
        }
        setCurrentIndex(next);
    }, [hasChanged.current]);

    const transitions = useTransition((SLIDES[currentIndex] || {}).name, item => `gif_name_${item}`, ({
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
    }));

    return (
      <GifsSidesCommons
          underLayer={(
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
                    nextArrow={(
                        <Arrow
                            classes={classes}
                            arrowRole="next"
                            buttonProps={{ className: classes.nextButton }}
                            reverse
                        />
                    )}
                >
                    {SLIDES.map(({ url, alt }) => (
                        <img className={classes.image} src={url} alt={alt} />
                    ))}
                </Slider>
              </div>
      )}
      >
          {transitions.map(({ item, key, props }) => (
              <Typography key={key} component={animated.div} style={props} color="light" variant="h2" customClasses={{ container: classes.slideName }}>
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

const Arrow = ({
    classes,
    onClick,
    arrowRole
}) => {
    const [springProps, setSpringProps] = useSpring(() => DEFAULT_ARROW_SPRING_PROPS);
    const handleMouseDown = useCallback(() => setSpringProps(PRESSED_ARROW_SPRING_PROPS), [setSpringProps]);
    const handleMouseUp = useCallback(() => setSpringProps(DEFAULT_ARROW_SPRING_PROPS), [setSpringProps]);

    return (
        <animated.button
            onClick={onClick}
            className={cn(classes.arrow, arrowRole === 'next' && classes.nextArrow, arrowRole === 'prev' && cn(classes.reverseArrow, classes.prevArrow))}
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
