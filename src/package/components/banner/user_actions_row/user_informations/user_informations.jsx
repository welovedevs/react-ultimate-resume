import React, { useContext, useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { get } from 'lodash';

import { Typography } from '@welovedevs/ui';

import { Avatar } from '../../../commons/avatar/avatar';
import { Column } from '../../../commons/column/column';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';

import { CONTACT_INFOS_DATA } from './contact_infos/contact_infos_data';

import { styles } from './user_informations_styles';
import { useAdditionalNodes } from '../../../hooks/use_additional_nodes';
import { ContactInfos } from './contact_infos/contact_infos';
import { useOptions } from '../../../hooks/use_options';
import { useIsEditing } from '../../../hooks/use_is_editing';

const useStyles = createUseStyles(styles);

export const UserInformations = () => {
    const { data } = useContext(DeveloperProfileContext);
    const [additionalNodes] = useAdditionalNodes('banner.userInformations', null);
    const [isEditing] = useIsEditing();
    const [showContactInformations] = useOptions('showContactInfos', false);
    console.log({ showContactInformations });
    const contactInformations = useMemo(
        () =>
            Object.entries(CONTACT_INFOS_DATA).reduce(
                (acc, [key, { path }]) => ({
                    ...acc,
                    [key]: get(data, path)
                }),
                {}
            ),
        [data]
    );

    const hasContactInformations = useMemo(() => Object.values(contactInformations).some((value) => Boolean(value)), [
        contactInformations
    ]);

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Avatar src={data.basics?.picture} />
            <Column customClasses={{ container: classes.textColumn }}>
                <Typography
                    customClasses={{
                        container: classes.name
                    }}
                    variant="h3"
                    component="h3"
                >
                    {data.basics?.name}
                </Typography>
                <Typography
                    customClasses={{
                        container: classes.description
                    }}
                    component="h4"
                >
                    {data.basics?.summary}
                </Typography>
                {showContactInformations && (isEditing || hasContactInformations) && (
                    <ContactInfos contactInformations={contactInformations} />
                )}
                {additionalNodes}
            </Column>
        </div>
    );
};
