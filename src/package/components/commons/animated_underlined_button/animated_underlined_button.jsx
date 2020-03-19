import React from 'react';

import { createUseStyles } from 'react-jss';
import { animated, useTransition } from 'react-spring';

import { useOpenerState } from '../../hooks/use_opener_state';

import { ANIMATED_UNDERLINED_BUTTON_TRANSITIONS_SPRING_PROPS } from './animated_underlined_button_spring_props';

import { styles } from './animated_underlined_button_styles';

const useStyles = createUseStyles(styles);

const AnimatedUnderlinedButtonComponent = ({ color = 'primary', onClick, children }) => {
    const classes = useStyles({ color });
    const [isUnderlineDisplayed, handlers] = useOpenerState({
        defaultHandlers: { onClick }
    });

    const underlineTransitions = useTransition(
        isUnderlineDisplayed,
        item => `${item ? 'visible' : 'hidden'}_underline`,
        ANIMATED_UNDERLINED_BUTTON_TRANSITIONS_SPRING_PROPS
    );

    return (
        <button type="button" className={classes.container} onClick={onClick} {...handlers}>
            {children}
            <div className={classes.underlineContainer}>
                {underlineTransitions.map(
                    ({ item, key, props }) =>
                        item && <animated.div key={key} className={classes.underline} style={props} />
                )}
            </div>
        </button>
    );
};

export const AnimatedUnderlinedButton = AnimatedUnderlinedButtonComponent;
