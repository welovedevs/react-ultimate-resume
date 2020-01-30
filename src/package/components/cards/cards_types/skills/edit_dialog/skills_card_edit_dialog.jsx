import React, { useCallback, useMemo } from 'react';

import { FormattedMessage } from 'react-intl';
import { useFormikContext } from 'formik';
import * as uuid from 'uuid/v4';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { createUseStyles } from 'react-jss';
import { styles } from './skills_card_edit_dialog_styles';
import { TechnologiesPicker } from '../../../../commons/technologies/technologies_picker/technologies_picker';
import { TechnologiesOrderer } from '../../../../commons/technologies/technologies_ordered/technologies_orderer';
import SkillsPieChart from '../skills_back/skills_pie_chart/skills_pie_chart';

const useStyles = createUseStyles(styles);

const SkillsCardEditDialogContent = ({ helpers: { handleValueChange } }) => {
    const classes = useStyles();
    const { values, errors, handleChange } = useFormikContext();
    const { embedUrl } = values;

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
            handleValueChange(`skills`)(
                values.skills.filter(({ id: skillId }) => skillId !== id).map((skill, index) => ({ ...skill, index }))
            ),
        [values.skills]
    );
    const onArrayChange = useCallback(array => handleValueChange('skills')(array), [values.skills]);
    const onItemChange = useCallback(item => {
        return handleValueChange(`skills[${item.index}]`)(item);
    }, []);

    const pieData = useMemo(() => values.skills?.slice(0, 3), [values]);
    return (
        <div className={classes.container}>
            <TechnologiesPicker
                className={classes.picker}
                selectedItems={values.skills}
                onAdd={addItem}
                onDelete={deleteItem}
            />
            <div className={classes.rightColumn}>
                <TechnologiesOrderer
                    className={classes.orderer}
                    items={values.skills}
                    onDelete={deleteItem}
                    onChange={onArrayChange}
                    onItemChange={onItemChange}
                />
                <SkillsPieChart variant={2} data={pieData} width={280} />
            </div>
        </div>
    );
};
export const SkillsCardEditDialog = ({ data, onEdit, onClose }) => {
    const classes = useStyles();

    return (
        <EditDialog
            data={data}
            onEdit={onEdit}
            onClose={onClose}
            open
            dialogClasses={{ dialog: { root: classes.dialogRoot, paper: classes.dialogPaper } }}
            title={<FormattedMessage id="Skills.editDialog.title" defaultMessage="What are your main skills?" />}
        >
            {helpers => <SkillsCardEditDialogContent helpers={helpers} />}
        </EditDialog>
    );
};
