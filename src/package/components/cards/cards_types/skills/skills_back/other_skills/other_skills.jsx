import React, { useMemo } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles, useTheme } from 'react-jss';
import { animated } from 'react-spring';

import { Typography } from '@wld/ui/typography/typography';

import OtherSkillProgress from '../other_skill_progress/other_skill_progress';
import { getColorsFromCardVariant } from '../../../../../../utils/styles/styles_utils';

import { useCardVariant } from '../../../../../hooks/profile_card_hooks/use_card_variant';

import { styles } from './other_skills_styles';

const useStyles = createUseStyles(styles);

const OtherSkills = ({ style, othersSkills, springTranslationProps: { yt } }) => {
    const [variant] = useCardVariant();
    const classes = useStyles({ variant });
    const theme = useTheme();

    const color = useMemo(() => getColorsFromCardVariant(theme, variant).color, [theme, variant]);

    return (
        <animated.div
            className={classes.otherSkillsContainer}
            style={{
                opacity: style.opacity,
                transform: yt.to(value => `translate3d(0, ${value}px,0)`)
            }}
        >
            <Typography variant="h3" component="h3" customClasses={{ container: classes.otherSkillsTitle }}>
                <FormattedMessage id="Skills.otherskills.title" defaultMessage="I also master" />
            </Typography>
            {othersSkills.map(skill => (
                <OtherSkillProgress
                    key={`other_skill_${skill.name}`}
                    color={color}
                    value={skill.value}
                    name={skill.name}
                />
            ))}
        </animated.div>
    );
};

export default OtherSkills;
