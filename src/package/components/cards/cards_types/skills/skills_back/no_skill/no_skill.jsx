import React from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Typography } from '@wld/ui';

import { styles } from './no_skill_styles';
import { NoDataButton } from '../../../../../commons/no_data_button/no_data_button';

const useStyles = createUseStyles(styles);

const NoSkillComponent = ({ handleAddButtonClick }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Typography style={{ color: 'inherit' }} variant="h4" component="h4">
                <FormattedMessage
                    id="Skills.noSkill.title"
                    defaultMessage="Ajoutez ici toutes les compétences que vous maitrisez !"
                />
            </Typography>
            <NoDataButton
                handleAddButtonClick={handleAddButtonClick}
                classes={{
                    container: classes.button
                }}
            >
                <FormattedMessage id="Skills.noSkill.buttonLabel" defaultMessage="Ajouter une compétence" />
            </NoDataButton>
        </div>
    );
};

export const NoSkill = NoSkillComponent;
