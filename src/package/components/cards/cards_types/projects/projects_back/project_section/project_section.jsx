import React from 'react';

import { createUseStyles } from 'react-jss';
import { Typography } from '@wld/ui';

import { ProfileCardSectionTitle } from '../../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionSubtitle } from '../../../../../commons/profile_card/profile_card_section_subtitle/profile_card_section_subtitle';
import { ProfileCardSectionText } from '../../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { ProfileCardSection } from '../../../../../commons/profile_card/profile_card_section/profile_card_section';
import { SeeProjectDetail } from '../../see_project_detail/see_project_detail';

import { ReactComponent as LinkIcon } from '../../../../../../assets/icons/link.svg';
import { ReactComponent as EyeIcon } from '../../../../../../assets/icons/eye.svg';

import { styles } from './project_section_styles';

const useStyles = createUseStyles(styles);

const DETAILS = {
    link: {
        icon: LinkIcon,
        value: 'Link'
    },
    seeProject: {
        icon: EyeIcon,
        value: <SeeProjectDetail />
    }
};

const ProjectSectionContainer = ({ projectId, cardVariant }) => {
    const classes = useStyles();
    return (
        <ProfileCardSection cardVariant={cardVariant}>
            <ProfileCardSectionTitle>Analytics platform</ProfileCardSectionTitle>
            <ProfileCardSectionSubtitle>2019</ProfileCardSectionSubtitle>
            <ProfileCardSectionText customClasses={{ container: classes.sectionText }}>
                Ruby on Rails backend
                <br />
                String interpolation via recursion
                <br />
                Bulma CSS frontend
                <br />
                Dependency free JS config
                <br />
                Just another bullshit here
            </ProfileCardSectionText>
            <Details classes={classes} projectId={projectId} />
        </ProfileCardSection>
    );
};

const Details = ({ projectId, classes }) => (
    <div className={classes.details}>
        {Object.entries(DETAILS).map(([id, { icon: Icon, value }]) => (
            <div key={`project_${projectId}_detail_${id}`} className={classes.detail}>
                <Icon className={classes.detailIcon} />
                <Typography customClasses={{ container: classes.detailTypography }} color="primary">
                    {value}
                </Typography>
            </div>
        ))}
    </div>
);

export const ProjectSection = ProjectSectionContainer;
