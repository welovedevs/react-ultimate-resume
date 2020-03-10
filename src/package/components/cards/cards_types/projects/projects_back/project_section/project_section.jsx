import React, { useCallback, useMemo } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';
import { Typography } from '@wld/ui';

import { ProfileCardSectionTitle } from '../../../../../commons/profile_card/profile_card_section_title/profile_card_section_title';
import { ProfileCardSectionSubtitle } from '../../../../../commons/profile_card/profile_card_section_subtitle/profile_card_section_subtitle';
import { ProfileCardSectionText } from '../../../../../commons/profile_card/profile_card_section_text/profile_card_section_text';
import { ProfileCardSection } from '../../../../../commons/profile_card/profile_card_section/profile_card_section';
import { SeeProjectDetail } from '../../see_project_detail/see_project_detail';
import { AnimatedUnderlinedButton } from '../../../../../commons/animated_underlined_button/animated_underlined_button';
import { ConfirmDialog } from '../../../../../commons/confirm_dialog/confirm_dialog';

import { ReactComponent as LinkIcon } from '../../../../../../assets/icons/link.svg';
import { ReactComponent as RemoveIcon } from '../../../../../../assets/icons/remove_circle.svg';

import { useIsEditing } from '../../../../../hooks/use_is_editing';
import { useCallbackOpen } from '../../../../../hooks/use_callback_open';

import { styles } from './project_section_styles';

const useStyles = createUseStyles(styles);

const ProjectSectionContainer = ({ project, cardVariant, onDelete, index }) => {
    const classes = useStyles();

    const descriptionChunks = useMemo(
        () =>
            project.description
                ?.split('\n')
                .map((descriptionChunk, chunkIndex) => (
                    <p key={`project_description_chunk_${project.id}_${chunkIndex}`}>{descriptionChunk}</p>
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
            <Details classes={classes} project={project} onDelete={onDelete} index={index} />
        </ProfileCardSection>
    );
};

const Details = ({ project, index, onDelete, classes }) => {
    const [isEditing] = useIsEditing();
    return (
        <div className={classes.details}>
            {project.link && (
                <div className={classes.detail}>
                    <AnimatedUnderlinedButton>
                        <a className={classes.link} href={project.link}>
                            <LinkIcon className={classes.detailIcon}/>
                            <Typography customClasses={{ container: classes.detailTypography }} color="primary">
                                <FormattedMessage id="Project.section.link" defaultMessage="Link"/>
                            </Typography>
                        </a>
                    </AnimatedUnderlinedButton>
                </div>
            )}
            <div className={classes.detail}>
                <SeeProjectDetail project={project}/>
            </div>
            {isEditing && (
                <RemoveProjectDetail index={index} onDelete={onDelete} classes={classes} />
            )}
        </div>
    );
};

const RemoveProjectDetail = ({ index, onDelete, classes }) => {
    const [openDialog, setDialogOpened, setDialogClosed] = useCallbackOpen();

    const handleConfirm = useCallback(() => onDelete(index), [onDelete, index]);

    return (
        <>
            <ConfirmDialog
                open={openDialog}
                onClose={setDialogClosed}
                onConfirm={handleConfirm}
            />
            <div className={classes.detail}>
                <AnimatedUnderlinedButton onClick={setDialogOpened}>
                    <RemoveIcon className={classes.detailDeleteIcon}/>
                    <Typography customClasses={{ container: classes.detailTypography }} color="primary">
                        <FormattedMessage id="Main.lang.delete" defaultMessage="Delete"/>
                    </Typography>
                </AnimatedUnderlinedButton>
            </div>
        </>
    );
};

export const ProjectSection = ProjectSectionContainer;
