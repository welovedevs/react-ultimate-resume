import React, { createContext, useCallback, useEffect, useRef, useState } from 'react';

import { createUseStyles } from 'react-jss';
import { config, useTransition } from 'react-spring';

import { Card } from '@wld/ui';

import { styles } from './profile_card_styles';
import { ProfileCardSide } from '../profile_card_side/profile_card_side';

const useStyles = createUseStyles(styles);

export const ProfileCardContext = createContext({});

const ProfileCardComponent = ({ data, sides, side: receivedSide, variant }) => {
    const classes = useStyles({ variant });
    const [side, setSide] = useState('front');

    const hasSideChanged = useRef(false);

    const handleMouseEnter = useCallback(() => setSide('back'), []);
    const handleMouseLeave = useCallback(() => setSide('front'), []);

    // Either 'front' or 'back'.
    useEffect(() => {
        if (receivedSide) {
            setSide(receivedSide);
        }
    }, [receivedSide]);

    useEffect(() => {
        if (hasSideChanged.current) {
            return;
        }
        hasSideChanged.current = true;
    }, [side]);

    const transitions = useTransition(side, item => `card_side_${item}`, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.default,
        immediate: !hasSideChanged.current
    });
    return (
        <Card
            customClasses={{ container: classes.container }}
            elevation={1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <ProfileCardContext.Provider value={{ side, setSide }}>
                {transitions.map(({ item, key, props }) => {
                    const SideComponent = sides[item] || (() => null);
                    return (
                        <ProfileCardSide key={key} style={props}>
                            <SideComponent data={data} variant={variant} />
                        </ProfileCardSide>
                    );
                })}
            </ProfileCardContext.Provider>
        </Card>
    );
};

export const ProfileCard = ProfileCardComponent;
