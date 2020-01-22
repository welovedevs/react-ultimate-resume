import React, { createContext, createElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { createUseStyles } from 'react-jss';
import { config, useTransition } from 'react-spring';
import { useDebounce } from 'use-debounce';

import { Card, Typography } from '@wld/ui';

import { styles } from './profile_card_styles';
import { ProfileCardSide } from './profile_card_side/profile_card_side';

const useStyles = createUseStyles(styles);

export const ProfileCardContext = createContext({});

const ProfileCardComponent = ({
    data,
    sides,
    side: receivedSide,
    variant,
    isTransitionUnique = true,
    isEditingProfile,
    editDialog,
    customTransitions
}) => {
    const classes = useStyles({ variant });
    const [side, setSide] = useState('front');
    const [isEditingCard, setIsEditingCard] = useState(false);
    const [debouncedSide] = useDebounce(side, 200);

    const hasSideChanged = useRef(false);

    const handleMouseEnter = useCallback(() => setSide('back'), []);
    const handleMouseLeave = useCallback(() => setSide('front'), []);

    const enableEditingCard = useCallback(e => {
        e.preventDefault();
        e.stopPropagation();
        console.log('ca clique non?');

        setIsEditingCard(true);
    }, []);

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

    const transitions = useTransition(debouncedSide, item => `card_side_${item}`, customTransitions || {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.default,
        unique: isTransitionUnique,
        immediate: !hasSideChanged.current
    });

    const EditDialogComponent = useMemo(() => {
        if (!editDialog) {
            return null;
        }
        return createElement(editDialog.component, {
            onEdit: (...parameters) => {
                setIsEditingCard(false);
                editDialog.onEdit(...parameters);
            },
            validationSchema: editDialog.validationSchema,
            data,
            onClose: () => setIsEditingCard(false)
        });
    }, [editDialog]);

    return (
        <>
            {isEditingCard && EditDialogComponent}
            <Card
                customClasses={{ container: classes.container }}
                elevation={1}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {isEditingProfile && (
                    <button className={classes.editButton} onClick={enableEditingCard}>
                        <Typography>Modifier</Typography>
                    </button>
                )}
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
        </>
    );
};

export const ProfileCard = ProfileCardComponent;
