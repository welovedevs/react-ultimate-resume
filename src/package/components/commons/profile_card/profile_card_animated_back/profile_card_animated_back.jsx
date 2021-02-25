import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';

import { ProfileCardTitle } from '../profile_card_title/profile_card_title';
import { ProfileCardContent } from '../profile_card_content/profile_card_content';

import { CONTENT_PROPS, TITLE_PROPS } from './profile_card_animated_back_transition';

import { styles } from './profile_card_animated_back_styles';
import { DEFAULT_SPRING_TYPE as spring } from '../../../../utils/framer_motion/common_types/spring_type';

const useStyles = createUseStyles(styles);

export const ProfileCardAnimatedBack = ({ title, children: content, classes: receivedClasses = {} }) => {
    const classes = useStyles();
    return (
        <>
            <ProfileCardTitle
                component={motion.div}
                motionSettings={{ variants: TITLE_PROPS, initial: 'default', animate: 'active', transition: spring }}
                classes={{ typography: cn(classes.title, receivedClasses.title) }}
            >
                {title}
            </ProfileCardTitle>
            <ProfileCardContent
                classes={{
                    container: cn(classes.content, receivedClasses.content)
                }}
                component={motion.div}
                motionSettings={{ variants: CONTENT_PROPS, initial: 'default', animate: 'active', transition: spring }}
            >
                <div className={receivedClasses.contentAnimated}>{content}</div>
            </ProfileCardContent>
        </>
    );
};
