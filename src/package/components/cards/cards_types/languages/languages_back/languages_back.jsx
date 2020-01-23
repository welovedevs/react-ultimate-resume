import React, { useMemo } from 'react';

import { createUseStyles, useTheme } from 'react-jss';
import { animated, useTransition } from 'react-spring';
import chroma from 'chroma-js';

import { ProfileCardAnimatedBack } from '../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back';
import { LanguageColumn } from './language_column/language_column';

import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';

import { styles } from './languages_back_styles';

const useStyles = createUseStyles(styles);

const LANGUAGES = {
    fr: {
        value: 100
    },
    en: {
        value: 70
    },
    sp: {
        value: 40
    }
};

const LanguagesBackComponent = ({ variant }) => {
    const classes = useStyles();
    const theme = useTheme();
    const languagesEntries = useMemo(() => LANGUAGES && Object.entries(LANGUAGES), [LANGUAGES]);
    const transitions = useTransition(languagesEntries, ([id]) => `language_column_${id}`, ({
        from: {
            transform: 'translate3d(0, 50%, 0)'
        },
        enter: {
            transform: 'translate3d(0, 0, 0)'
        },
        trail: 175
    }));

    const {
        backColor,
        backBackgroundColor
    } = useMemo(() => ({
            backColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).backColor),
            backBackgroundColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).backBackgroundColor)
        }),
    [theme, variant]);

    const colorPalette = useMemo(
        () => Array.from({ length: languagesEntries.length },
            (v, k) => chroma.mix(backColor, backBackgroundColor, (2 * k) / 10).hex()),
        [backColor, backBackgroundColor]
    );

    return (
        <ProfileCardAnimatedBack title="Languages" customClasses={{ content: classes.content, contentAnimated: classes.contentAnimated }}>
            <div className={classes.columnsContainer}>
                {transitions.map(({ item, key, props }, index) => (
                    <LanguageColumn
                        key={key}
                        component={animated.div}
                        value={item[1].value}
                        style={{
                            ...props,
                            backgroundColor: colorPalette[index],
                            color: backColor
                        }}
                        cardVariant={variant}
                    >
                        {item[0].toUpperCase()}
                    </LanguageColumn>
                ))}
            </div>
        </ProfileCardAnimatedBack>
    );
};

export const LanguagesBack = LanguagesBackComponent;
