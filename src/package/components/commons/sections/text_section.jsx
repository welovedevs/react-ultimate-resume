import { createUseStyles } from 'react-jss';
import React from 'react';
import styles from './text_section_styles';

const useStyles = createUseStyles(styles);
export const TextSection = ({ icon, children }) => {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            {icon && <div className={classes.icon}>{icon}</div>}
            <div className={classes.sectionContent}>{children}</div>
        </div>
    );
};
