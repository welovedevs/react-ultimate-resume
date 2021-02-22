import React, { useCallback, useState } from 'react';

import injectSheet from 'react-jss';
import { motion } from 'framer-motion';

import { Button } from '@welovedevs/ui';

import { ReactComponent as ArrowRight } from '../../../../assets/icons/arrow-right.svg';

import { styles } from './profile_card_button_styles';
import { useCardVariant } from '../../../hooks/profile_card_hooks/use_card_variant';
import { DEFAULT_SPRING_TYPE as spring } from '../../../../utils/framer_motion/common_types/spring_type';

const DEFAULT_MOTION_PROPS = 0;
const ACTIVE_MOTION_PROPS = 6;

const ProfileCardButtonComponent = injectSheet(styles)(({ overrideColor, classes, children, ...other }) => {
    const [motionProps, setMotionProps] = useState(() => DEFAULT_MOTION_PROPS);
    const setDefaultMotionProps = useCallback(() => setMotionProps(() => DEFAULT_MOTION_PROPS), []);
    const setActiveMotionProps = useCallback(() => setMotionProps(() => ACTIVE_MOTION_PROPS), []);
    console.log(motionProps);
    return (
        <div className={classes.container}>
            <Button
                classes={{ container: classes.button, typography: classes.typography }}
                size="small"
                variant="text"
                onMouseEnter={setActiveMotionProps}
                onMouseLeave={setDefaultMotionProps}
                onFocus={setActiveMotionProps}
                onBlur={setDefaultMotionProps}
                {...other}
            >
                {children}
            </Button>
            <motion.span
                className={classes.arrowContainer}
                animate={{
                    x: `${motionProps}px`
                }}
                transition={spring}
            >
                <ArrowRight className={classes.arrow} />
            </motion.span>
        </div>
    );
});

const InjectVariantProfileCardButton = (props) => {
    const [variant] = useCardVariant();
    return <ProfileCardButtonComponent {...props} variant={variant} />;
};

export const ProfileCardButton = InjectVariantProfileCardButton;
