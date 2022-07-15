import React, { useCallback } from 'react';

import makeStyles from '@mui/styles/makeStyles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Typography } from '@welovedevs/ui';
import { useFormikContext } from 'formik';
import { styles } from './project_dialog_content_date_styles';

import { YearMonth } from '../../../../../commons/year_month/year_month';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import { translations } from './project_dialog_content_date.translations';

const useStyles = makeStyles(styles);

const ProjectDialogContentDateComponent = ({ date, isEditing }) => {
    const classes = useStyles({ isEditing });
    return (
        <div className={classes.container}>
            <Content date={date} isEditing={isEditing} classes={classes} />
        </div>
    );
};

const Content = ({ date, isEditing, classes }) => {
    if (isEditing) {
        return <EditingContent title={date} classes={classes} />;
    }
    return <DefaultContent title={date} classes={classes} />;
};

const DefaultContent = ({ date, classes }) => (
    <Typography variant="h2" component="h3" classes={{ container: classes.typography }}>
        {date && date.format('LL')}
    </Typography>
);

const EditingContent = ({ classes }) => {
    const { setFieldValue, values, errors } = useFormikContext();

    const handleStartDate = useCallback(
        (value) => {
            console.log('new date', value)
            setFieldValue('date', value);
        },
        [JSON.stringify(values)]
    );
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <YearMonth
                    textfieldProps={{
                        fullWidth: true
                    }}
                    className={classes.datePicker}
                    variant="flat"
                    value={values.date}
                    onChange={handleStartDate}
                    title={translations.projectDate}
                />
            </LocalizationProvider>
            {errors?.date && (
                <Typography color="danger" variant="helper" component="p">
                    {errors.date}
                </Typography>
            )}
        </>
    );
};

export const ProjectDialogContentDate = ProjectDialogContentDateComponent;
