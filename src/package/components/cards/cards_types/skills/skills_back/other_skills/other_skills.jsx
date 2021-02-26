import React, { useMemo } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles, useTheme } from 'react-jss';
import { motion } from 'framer-motion';

import { Typography } from '@welovedevs/ui/typography/typography';

import OtherSkillProgress from '../other_skill_progress/other_skill_progress';
import { getColorsFromCardVariant } from '../../../../../../utils/styles/styles_utils';

import { useCardVariant } from '../../../../../hooks/profile_card_hooks/use_card_variant';

import { styles } from './other_skills_styles';
import { DEFAULT_SPRING_TYPE as spring } from '../../../../../../utils/framer_motion/common_types/spring_type';

const useStyles = createUseStyles(styles);

const OtherSkills = ({ motionProps, othersSkills }) => {
    const [variant] = useCardVariant();
    const classes = useStyles({ variant });
    const theme = useTheme();

    const color = useMemo(() => getColorsFromCardVariant(theme, variant).color, [theme, variant]);

    return (
        <motion.div
            className={classes.otherSkillsContainer}
            {...motionProps}
            transition={spring}
        >
            <Typography variant="h3" component="h3" classes={{ container: classes.otherSkillsTitle }}>
                <FormattedMessage id="Skills.otherskills.title" defaultMessage="I also master" />
            </Typography>
            {othersSkills.map((skill) => (
                <OtherSkillProgress
                    key={`other_skill_${skill.name}`}
                    color={color}
                    value={skill.value}
                    name={skill.name}
                />
            ))}
        </motion.div>
    );
};

export default OtherSkills;
