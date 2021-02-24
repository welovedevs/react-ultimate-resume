import React from 'react';

import injectSheet from 'react-jss';
import { motion } from 'framer-motion';

import { Button } from '@welovedevs/ui';

import { ReactComponent as ArrowRight } from '../../../../assets/icons/arrow-right.svg';

import { styles } from './profile_card_button_styles';
import { useCardVariant } from '../../../hooks/profile_card_hooks/use_card_variant';
import { DEFAULT_SPRING_TYPE as spring } from '../../../../utils/framer_motion/common_types/spring_type';

const ProfileCardButtonComponent = injectSheet(styles)(({ overrideColor, classes, children, ...other }) => (
    <motion.div className={classes.container} whileHover="hover">
        <Button
            classes={{ container: classes.button, typography: classes.typography }}
            size="small"
            variant="text"
            {...other}
        >
            {children}
        </Button>
        <motion.span variants={{ hover: { x: 6 } }} className={classes.arrowContainer} transition={spring}>
            <ArrowRight className={classes.arrow} />
        </motion.span>
    </motion.div>
));

const InjectVariantProfileCardButton = (props) => {
    const [variant] = useCardVariant();
    return <ProfileCardButtonComponent {...props} variant={variant} />;
};

export const ProfileCardButton = InjectVariantProfileCardButton;
