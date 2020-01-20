import React from 'react';

import { createUseStyles } from 'react-jss';
import { Typography } from '@wld/ui';

import { ProfileCardSectionTitle } from '../../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionSubtitle } from '../../../../../commons/profile_card/profile_card_section_subtitle/profile_card_section_subtitle';
import { ProfileCardSectionText } from '../../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { ProfileCardSection } from '../../../../../commons/profile_card/profile_card_section/profile_card_section';

import { ReactComponent as LinkIcon } from '../../../../../../assets/icons/link.svg';

import { styles } from './project_section_styles';

const useStyles = createUseStyles(styles);

const ProjectSectionContainer = ({ cardVariant }) => {
    const classes = useStyles();
    return (
        <ProfileCardSection cardVariant={cardVariant}>
            <ProfileCardSectionTitle>
                Analytics platform
            </ProfileCardSectionTitle>
            <ProfileCardSectionSubtitle>
                2019
            </ProfileCardSectionSubtitle>
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
            <Details classes={classes} />
        </ProfileCardSection>
    );
};

const Details = ({ classes }) => (
        <div className={classes.detail}>
            <LinkIcon className={classes.detailIcon} />
            <Typography customClasses={{ container: classes.detailTypography }} color="primary">
                Link
            </Typography>
        </div>
    );

export const ProjectSection = ProjectSectionContainer;
