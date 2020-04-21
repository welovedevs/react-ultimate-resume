import React from 'react';

import { createUseStyles } from 'react-jss';
import { animated, useSpring } from 'react-spring';

import { EditContactInfosButton } from './edit_contact_infos_button/edit_contact_infos_button';
import { ContactInfoRow } from './contact_info_row/contact_info_row';

import { DIVIDER_SPRING_PROPS } from './contact_infos_spring_props';
import { CONTACT_INFOS_DATA } from './contact_infos_data';

import { useIsEditing } from '../../../../hooks/use_is_editing';

import { styles } from './contact_infos_styles';

const useStyles = createUseStyles(styles);

export const ContactInfos = ({ contactInformations }) => {
    // eslint-disable-next-line no-unused-vars
    const classes = useStyles();
    const [isEditing] = useIsEditing();

    return (
        <>
            <Divider classes={classes} />
            {!isEditing && <ContactInfosRows contactInformations={contactInformations} classes={classes} />}
            {isEditing && <EditContactInfosButton contactInformations={contactInformations} />}
        </>
    );
};

const Divider = ({ classes }) => {
    const springProps = useSpring(DIVIDER_SPRING_PROPS);
    return (
        <div className={classes.dividerContainer}>
            <animated.div
                className={classes.divider}
                style={{
                    opacity: springProps.opacity,
                    transform: springProps.translation.interpolate((value) => `translate3d(${value}%, 0, 0)`)
                }}
            />
        </div>
    );
};

const ContactInfosRows = ({ contactInformations, classes }) => {
    if (!contactInformations) {
        return null;
    }
    return (
        <div className={classes.contactInfosRows}>
            {Object.entries(contactInformations)
                .filter(([contactInformationId]) => !CONTACT_INFOS_DATA[contactInformationId]?.onlyDialog)
                .map(([contactInformationId, value]) => (
                    <ContactInfoRow
                        key={`contact_information_row_${contactInformationId}`}
                        value={value}
                        {...['icon', 'translation'].reduce(
                            (acc, key) => ({
                                ...acc,
                                [key]: CONTACT_INFOS_DATA?.[contactInformationId]?.[key]
                            }),
                            {}
                        )}
                    />
                ))}
        </div>
    );
};
