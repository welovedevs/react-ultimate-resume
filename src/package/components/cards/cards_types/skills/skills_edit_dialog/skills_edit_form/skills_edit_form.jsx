import React, { useCallback } from 'react';

import { createUseStyles, useTheme } from 'react-jss';
import { useFormikContext } from 'formik';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@welovedevs/ui';
import uuid from 'uuid/v4';

import { styles } from './skills_edit_form_styles';
import { TechnologiesPicker } from '../../../../../commons/technologies/technologies_picker';
import { useTechnologies } from '../../../../../hooks/technologies/use_technologies';

const SkillsEditFormComponent = ({ helpers: { handleValueChange } }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);

    const { values, errors: validationErrors } = useFormikContext();

    const { technologies } = useTechnologies();

    const { skills: errors } = validationErrors;
    const addItem = useCallback(
        (name) =>
            handleValueChange(`skills[${values.skills.length}]`)({
                name,
                index: values.skills.length,
                value: 50,
                id: uuid()
            }),
        [values]
    );
    const deleteItem = useCallback(
        (name) =>
            handleValueChange('skills')(
                values.skills
                    .filter(({ name: skillName }) => skillName !== name)
                    .map((skill, index) => ({ ...skill, index }))
            ),
        [values.skills]
    );
    const onArrayChange = useCallback((array) => handleValueChange('skills')(array), [values.skills]);
    const onItemChange = useCallback((item) => handleValueChange(`skills[${item.index}]`)(item), []);

    return (
        <>
            {errors && (
                <Typography color="danger" component="p">
                    {errors}
                </Typography>
            )}
            <TechnologiesPicker
                technologies={technologies}
                selectedValues={values.skills}
                onAddItem={addItem}
                onArrayChange={onArrayChange}
                onArrayItemChange={onItemChange}
                onDeleteItem={deleteItem}
                isMobile={isMobile}
            />
        </>
    );
};

export const SkillsEditForm = SkillsEditFormComponent;
