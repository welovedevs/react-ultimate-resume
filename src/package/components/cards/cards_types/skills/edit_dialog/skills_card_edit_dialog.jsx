import React, { useCallback, useMemo } from 'react';

import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';
import { useFormikContext } from 'formik';
import uuid from 'uuid/v4';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { TechnologiesPicker } from '../../../../commons/technologies/technologies_picker/technologies_picker';
import { TechnologiesOrderer } from '../../../../commons/technologies/technologies_ordered/technologies_orderer';
import SkillsPieChart from '../skills_back/skills_pie_chart/skills_pie_chart';

import { styles } from './skills_card_edit_dialog_styles';

const useStyles = createUseStyles(styles);

const SkillsCardEditDialogComponent = ({ open, onClose, data, onEdit }) => {
    const classes = useStyles();
    return (
        <EditDialog
            fullScreen
            classes={{
                paper: classes.paper
            }}
            open={open}
            onClose={onClose}
            data={data}
            onEdit={onEdit}
            dialogClasses={{ dialog: { root: classes.dialogRoot, paper: classes.dialogPaper } }}
            title={<FormattedMessage id="Skills.editDialog.title" defaultMessage="What are your main skills?" />}
        >
            {helpers => <Content helpers={helpers} />}
        </EditDialog>
    );
};

const Content = ({ helpers: { handleValueChange } }) => {
    const classes = useStyles();
    const { values } = useFormikContext();

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

export const SkillsCardEditDialog = SkillsCardEditDialogComponent;
