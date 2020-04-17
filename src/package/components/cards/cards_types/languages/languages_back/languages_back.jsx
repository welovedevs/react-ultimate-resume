import React, { memo, useMemo } from 'react';

import { createUseStyles, useTheme } from 'react-jss';
import { animated, useTransition } from 'react-spring';
import chroma from 'chroma-js';

import { ProfileCardAnimatedBack } from '../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back';
import { LanguageColumn } from './language_column/language_column';

import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';

import { useCardVariant } from '../../../../hooks/profile_card_hooks/use_card_variant';
import { LANGUAGES_COLUMN_TRANSITIONS_SPRING_PROPS } from './languages_back_spring_props';

import { styles } from './languages_back_styles';
import { existsAndNotEmpty } from '../../../utils/exists_and_not_empty';
import { NoLanguage } from './no_language/no_language';

const useStyles = createUseStyles(styles);

const LanguagesBackComponent = ({ data, handleAddButtonClick }) => {
    const classes = useStyles({ itemSize: data.languages?.length ?? 0 });

    return (
        <ProfileCardAnimatedBack
            title="Languages"
            customClasses={{
                content: classes.content,
                contentAnimated: classes.contentAnimated,
                title: classes.cardTitle
            }}
        >
            <Content {...{ data, handleAddButtonClick, classes }} />
        </ProfileCardAnimatedBack>
    );
};

const Content = ({ data, handleAddButtonClick, classes }) => {
    const theme = useTheme();
    const [variant] = useCardVariant();
    const transitions = useTransition(data.languages ?? [], ({ id }) => `language_column_${id}`, {
        ...LANGUAGES_COLUMN_TRANSITIONS_SPRING_PROPS,
        trail: (175 * 3) / (data?.languages ?? []).length
    });

    const { backColor, backBackgroundColor } = useMemo(
        () => ({
            backColor: getHexFromPaletteColor(theme, getColorsFromCardVariant(theme, variant).backColor),
            backBackgroundColor: getHexFromPaletteColor(
                theme,
                getColorsFromCardVariant(theme, variant).backBackgroundColor
            )
        }),
        [theme, variant]
    );

    const colorPalette = useMemo(
        () =>
            Array.from({ length: data.languages?.length ?? 0 }, (v, k) =>
                chroma.mix(backColor, backBackgroundColor, (2 * k) / 15).hex()
            ),
        [backColor, backBackgroundColor]
    );
    const hasLanguage = useMemo(() => existsAndNotEmpty(data?.languages), [data]);

    if (!hasLanguage) {
        return <NoLanguage handleAddButtonClick={handleAddButtonClick} />;
    }
    return (
        <div className={classes.columnsContainer}>
            {transitions.map(({ item, key, props }, index) => (
                <LanguageColumn
                    itemsSize={data.languages?.length ?? 0}
                    key={key}
                    component={animated.div}
                    item={item}
                    style={{
                        ...props,
                        backgroundColor: colorPalette[index],
                        color: backColor
                    }}
                    cardVariant={variant}
                >
                    <button className={classes.languageLettersButton} type="button">
                        {item.language?.substring(0, 2).toUpperCase()}
                    </button>
                </LanguageColumn>
            ))}
        </div>
    );
};

export const LanguagesBack = memo(LanguagesBackComponent);
