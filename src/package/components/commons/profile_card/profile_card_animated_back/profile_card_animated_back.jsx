import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';

import { ProfileCardTitle } from '../profile_card_title/profile_card_title';
import { ProfileCardContent } from '../profile_card_content/profile_card_content';

import { CONTENT_CONTAINER_PROPS, CONTENT_PROPS, TITLE_PROPS } from './profile_card_animated_back_transition';

import { styles } from './profile_card_animated_back_styles';

const useStyles = createUseStyles(styles);

export const ProfileCardAnimatedBack = ({ title, children: content, classes: receivedClasses = {} }) => {
    const classes = useStyles();
    return (
        <>
            <ProfileCardTitle
                component={motion.div}
                variants={TITLE_PROPS}
                initial="default"
                animate="active"
                classes={{ typography: cn(classes.title, receivedClasses.title) }}
            >
                {title}
            </ProfileCardTitle>
            <ProfileCardContent
                classes={{
                    container: cn(classes.content, receivedClasses.content)
                }}
                component={motion.div}
                variants={CONTENT_CONTAINER_PROPS}
                initial="default"
                animate="active"
            >
                <motion.div
                    className={receivedClasses.contentAnimated}
                    variants={CONTENT_PROPS}
                    initial="default"
                    animate="active"
                >
                    {content}
                </motion.div>
            </ProfileCardContent>
        </>
    );
};
