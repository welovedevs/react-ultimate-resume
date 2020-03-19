import React, { useContext } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { Typography } from '@wld/ui';

import { ProjectDialog } from '../project_dialog/project_dialog';
import { AnimatedUnderlinedButton } from '../../../../commons/animated_underlined_button/animated_underlined_button';

import { ReactComponent as EyeIcon } from '../../../../../assets/icons/eye.svg';

import { useCallbackOpen } from '../../../../hooks/use_callback_open';

import { styles } from './see_project_detail_styles';
import { DeveloperProfileContext } from '../../../../../utils/context/contexts';

const useStyles = createUseStyles(styles);

const SeeProjectDetailComponent = ({ color, project }) => {
    const classes = useStyles();
    const { isEditing } = useContext(DeveloperProfileContext);

    const [openDialog, setDialogOpened, setDialogClosed] = useCallbackOpen();
    return (
        <>
            <ProjectDialog
                isEditing={isEditing}
                data={project}
                open={openDialog}
                onClose={setDialogClosed}
                handleProfileCardHasDialogOpened
            />
            <AnimatedUnderlinedButton color={color} onClick={setDialogOpened}>
                <EyeIcon className={classes.icon} />
                <Typography customClasses={{ container: classes.detailTypography }} color="primary">
                    <FormattedMessage id="Projects.details.seemore" defaultMessage="See more" />
                </Typography>
            </AnimatedUnderlinedButton>
        </>
    );
};

export const SeeProjectDetail = SeeProjectDetailComponent;
