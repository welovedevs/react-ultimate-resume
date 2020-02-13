import React, { useCallback } from 'react';

import { createUseStyles } from 'react-jss';
import { useFormikContext } from 'formik';
import { Typography } from '@wld/ui';
import uuid from 'uuid/v4';

import { AllTechnologiesPicker } from '../../../../../commons/technologies/all_technologies_picker/all_technologies_picker';

import { SelectedTechnologies } from '../../../../../commons/technologies/selected_technologies/selected_technologies';

import { styles } from './skills_edit_form_styles';

const useStyles = createUseStyles(styles);

const SkillsEditFormComponent = ({ helpers: { handleValueChange } }) => {
    const classes = useStyles();
    const { values, errors: validationErrors } = useFormikContext();

    const { skills: errors } = validationErrors;
    const addItem = useCallback(
        name =>
            handleValueChange(`skills[${values.skills.length}]`)({
                name,
                index: values.skills.length,
                value: 50,
                id: uuid()
            }),
        [values]
    );
    const deleteItem = useCallback(
        id =>
            handleValueChange('skills')(
                values.skills.filter(({ id: skillId }) => skillId !== id).map((skill, index) => ({ ...skill, index }))
            ),
        [values.skills]
    );
    const onArrayChange = useCallback(array => handleValueChange('skills')(array), [values.skills]);
    const onItemChange = useCallback(item => handleValueChange(`skills[${item.index}]`)(item), []);

    const globalError = typeof errors === 'string' && errors;

    return (
        <div className={classes.container}>
            <AllTechnologiesPicker
                selectedItems={values.skills}
                onAdd={addItem}
                onDelete={deleteItem}
                classes={{
                    container: classes.allTechnologies,
                    technologiesList: classes.technologiesList
                }}
            />
            <div className={classes.divider} />
            <div className={classes.column}>
                {globalError && (
                    <Typography color="danger" component="p">
                        {errors}
                    </Typography>
                )}
                <SelectedTechnologies
                    className={classes.selectedTechnologies}
                    items={values.skills}
                    onDelete={deleteItem}
                    onChange={onArrayChange}
                    onItemChange={onItemChange}
                />
            </div>
        </div>
    );
};

export const SkillsEditForm = SkillsEditFormComponent;
