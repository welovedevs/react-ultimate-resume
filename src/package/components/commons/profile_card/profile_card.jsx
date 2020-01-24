import React, {
    createContext,
    createElement,
    useCallback,
    useEffect,
    useMemo,
    useReducer,
    useRef,
    useState
} from 'react';

import { createUseStyles } from 'react-jss';
import { config, useTransition } from 'react-spring';
import { useDebounce } from 'use-debounce';

import { Card, Tooltip } from '@wld/ui';

import { ProfileCardSide } from './profile_card_side/profile_card_side';
import { getProfileCardInitialState, PROFILE_CARD_REDUCER } from './profile_card_reducer';

import { ReactComponent as EditIcon } from '../../../assets/icons/edit.svg';

import { styles } from './profile_card_styles';
import { SET_SIDE } from './profile_card_actions_types';

const useStyles = createUseStyles(styles);

export const ProfileCardContext = createContext({});

const DEFAULT_TRANSITIONS_SPRING_PROPS = {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.default
};

const ProfileCardComponent = ({
                                  data,
                                  sides,
                                  variant,
                                  isTransitionUnique = true,
                                  isEditingProfile,
                                  editDialog,
                                  customTransitionsSpringProps
                              }) => {
    const classes = useStyles({ variant });
    const [isEditingCard, setIsEditingCard] = useState(false);
    const [state, dispatch] = useReducer(PROFILE_CARD_REDUCER, getProfileCardInitialState({ variant }));
    const { side, hasDialogOpened } = state;
    const [debouncedSide] = useDebounce(side, 200);

    const transitionsSpringProps = useMemo(() => {
        if (customTransitionsSpringProps) {
            if (typeof customTransitionsSpringProps === 'function') {
                return customTransitionsSpringProps(side);
            }
            return customTransitionsSpringProps;
        }
        return DEFAULT_TRANSITIONS_SPRING_PROPS;
    }, [customTransitionsSpringProps, side]);

    const hasSideChanged = useRef(false);

    const setSide = useCallback((newSide) => dispatch({
        type: SET_SIDE,
        side: newSide
    }), []);

    const handleMouseEnter = useCallback(() => setSide('back'), [dispatch]);

    const handleMouseLeave = useCallback(() => {
        if (hasDialogOpened) {
            return;
        }
        setSide('front');
    }, [hasDialogOpened, dispatch]);

    const enableEditingCard = useCallback(e => {
        e.preventDefault();
        e.stopPropagation();
        setIsEditingCard(true);
    }, []);

    useEffect(() => {
        if (hasSideChanged.current) {
            return;
        }
        hasSideChanged.current = true;
    }, [side]);

    const transitions = useTransition(debouncedSide, item => `card_side_${item}`, {
        ...transitionsSpringProps,
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

    const contextData = useMemo(() => ({ state, dispatch }), [state]);

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
                    <Tooltip title="Editer cette carte">
                        <button type="button" className={classes.editButton} onClick={enableEditingCard}>
                            <EditIcon className={classes.editIcon} />
                        </button>
                    </Tooltip>
                )}
                <ProfileCardContext.Provider value={contextData}>
                    {transitions.map(({ item, key, props }) => {
                        const SideComponent = sides[item] || (() => null);
                        return (
                            <ProfileCardSide key={key} style={props}>
                                <SideComponent data={data} />
                            </ProfileCardSide>
                        );
                    })}
                </ProfileCardContext.Provider>
            </Card>
        </>
    );
};

export const ProfileCard = ProfileCardComponent;
