import React, { useMemo } from 'react';

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

const ProjectSectionContainer = ({ project, cardVariant }) => {
    const classes = useStyles();

    const descriptionChunks = useMemo(
        () =>
            project.description
                ?.split('\n')
                .map((descriptionChunk, index) => (
                    <p key={`project_description_chunk_${project.id}_${index}`}>{descriptionChunk}</p>
                )),
        [project.description]
    );

    const formattedDate = useMemo(() => project.date?.year(), [project.date]);
    return (
        <ProfileCardSection cardVariant={cardVariant}>
            <ProfileCardSectionTitle>{project.name}</ProfileCardSectionTitle>
            <ProfileCardSectionSubtitle>{formattedDate}</ProfileCardSectionSubtitle>
            <ProfileCardSectionText customClasses={{ container: classes.sectionText }}>
                {descriptionChunks}
            </ProfileCardSectionText>
            <Details classes={classes} project={project} />
        </ProfileCardSection>
    );
};

const Details = ({ project, classes }) => (
    <div className={classes.details}>
        <div className={classes.detail}>
            <LinkIcon className={classes.detailIcon} />
            <Typography customClasses={{ container: classes.detailTypography }} color="primary">
                Link
            </Typography>
        </div>
        <div className={classes.detail}>
            <EyeIcon className={classes.detailIcon} />
            <Typography customClasses={{ container: classes.detailTypography }} color="primary">
                <SeeProjectDetail project={project} />
            </Typography>
        </div>
    </div>
);

export const ProjectSection = ProjectSectionContainer;
