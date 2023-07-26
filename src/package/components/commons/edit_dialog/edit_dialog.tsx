import React, { useCallback } from 'react';

import cn from 'classnames';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '@mui/styles';
import makeStyles from '@mui/styles/makeStyles';

import { Formik, useFormikContext } from 'formik';

import useMediaQuery from '@mui/material/useMediaQuery';
import { Button, Tooltip, Typography } from '@welovedevs/ui';

import { Dialog, DialogActions, DialogContent, DialogProps } from '@mui/material';

import { DialogTitle } from '../dialog/dialog_title/dialog_title';

import { styles } from './edit_dialog_styles';

import Yup from 'yup';
import { DialogContentRenderFunction } from './edit_dialog_types';
import { ReactComponent as Warning } from '../../../assets/icons/warn.svg';

const useStyles = makeStyles(styles as any);

interface Props<T> {
    fullScreen?: boolean;
    data: T;
    onEdit: (newValue: T) => void;
    title?: React.ReactNode;
    validationSchema?: Yup.Schema<any>;
    isEditing?: boolean;
    classes?: {
        paper?: string;
        content?: string;
        actions?: string;
    };
    disableEnforceFocus?: boolean;
    onClose: DialogProps['onClose'];
    open: boolean;
    children: (renderFunctions: DialogContentRenderFunction<T>) => React.ReactNode;
}

export const EditDialog = <T extends { [key: string]: any }>({
    open,
    onClose,
    fullScreen = false,
    data,
    onEdit,
    children,
    title = '✏️',
    validationSchema,
    isEditing,
    classes: receivedClasses = {},
    disableEnforceFocus = false
}: Props<T>) => {
    const classes = useStyles();
    const theme: any = useTheme();
    const isMobile = useMediaQuery(`(max-width: ${theme.screenSizes.small}px)`);

    return (
        <Dialog
            fullScreen={fullScreen || isMobile}
            classes={{
                root: classes.root,
                paper: cn(classes.paper, receivedClasses.paper, fullScreen && classes.fullScreen)
            }}
            open={open}
            onClose={onClose}
            disableEnforceFocus={disableEnforceFocus}
        >
            <Formik<T>
                validateOnChange={false}
                initialValues={data}
                onSubmit={(newValues) => onEdit(newValues)}
                validationSchema={validationSchema}
            >
                <TitleContent<T>
                    title={title}
                    fullScreen={fullScreen}
                    isMobile={isMobile}
                    onClose={onClose}
                    classes={classes}
                    receivedClasses={receivedClasses}
                    isEditing={isEditing}
                >
                    {children}
                </TitleContent>
            </Formik>
        </Dialog>
    );
};

type Created<T> = {
    title: React.ReactNode;
    fullScreen: boolean;
    isMobile: boolean;
    onClose: DialogProps['onClose'];
    classes: any;
    receivedClasses: Props<any>['classes'];
    isEditing?: boolean;
    children: (renderFunctions: DialogContentRenderFunction<T>) => React.ReactNode;
};
const TitleContent = <T extends { [key: string]: any }>({
    title,
    fullScreen,
    isMobile,
    onClose,
    children,
    classes,
    receivedClasses,
    isEditing
}: Created<T>) => {
    const { handleSubmit, setFieldValue, values } = useFormikContext<T>();
    return (
        <>
            <div className={classes.titleContainer}>
                <DialogTitle>{title}</DialogTitle>
                {fullScreen && !isMobile && (
                    <Actions
                        fullScreen
                        onClose={onClose}
                        handleSubmit={handleSubmit}
                        classes={classes}
                        receivedClasses={receivedClasses}
                        isEditing={isEditing}
                    />
                )}
            </div>
            <Content
                onClose={onClose}
                handleSubmit={handleSubmit}
                setFieldValue={setFieldValue as any}
                values={values}
                fullScreen={fullScreen}
                isMobile={isMobile}
                classes={classes}
                receivedClasses={receivedClasses}
                isEditing={isEditing}
            >
                {children}
            </Content>
        </>
    );
};

interface ContentProps<T extends { [key: string]: any }> {
    onClose: DialogProps['onClose'];
    handleSubmit: () => void;
    setFieldValue: (fieldName: keyof T, value: any) => void;
    values: T;
    children: (renderFunctions: DialogContentRenderFunction<T>) => React.ReactNode;
    fullScreen?: boolean;
    isMobile?: boolean;
    classes: any;
    receivedClasses: Props<T>['classes'];
    isEditing?: boolean;
}

const Content = <T extends { [key: string]: any }>({
    children,
    onClose,
    handleSubmit,
    setFieldValue,
    values,
    fullScreen,
    isMobile,
    classes,
    receivedClasses,
    isEditing
}: ContentProps<T>) => {
    const handleValueChange = useCallback(
        (name: keyof T) => (value: any) => {
            console.debug(`[Edit Dialog] Setting field ${name} to value.`, { value });
            return setFieldValue(name, value);
        },
        [setFieldValue]
    );
    const toggleValue = useCallback((name) => () => setFieldValue(name, !values[name]), [setFieldValue, values]);

    return (
        <>
            <DialogContent
                classes={{
                    root: cn(classes.content, receivedClasses?.content)
                }}
            >
                {children({ handleValueChange, toggleValue, fullScreen, isMobile })}
            </DialogContent>
            {(!fullScreen || isMobile) && (
                <Actions
                    onClose={onClose}
                    handleSubmit={handleSubmit}
                    classes={classes}
                    receivedClasses={receivedClasses}
                    isEditing={isEditing}
                />
            )}
        </>
    );
};

interface ActionProps<T> {
    onClose: DialogProps['onClose'];
    handleSubmit: ContentProps<T>['handleSubmit'];
    fullScreen?: boolean;
    isMobile?: boolean;
    classes: any;
    receivedClasses: Props<T>['classes'];
    isEditing?: boolean;
}

const Actions = <T extends { [key: string]: any }>({
    onClose,
    handleSubmit,
    fullScreen,
    classes,
    receivedClasses,
    isEditing
}: ActionProps<T>) => {
    const { errors } = useFormikContext();
    let hasErrors = !!Object.entries(errors).length;
    console.log({ errors });
    return (
        <DialogActions
            classes={{
                root: cn(classes.actions, receivedClasses?.actions)
            }}
        >
            <Tooltip
                title={
                    <FormattedMessage id="EditDialog.close.tooltip" defaultMessage="Any modification won't be saved!" />
                }
            >
                <Button size="small" onClick={onClose as any}>
                    <FormattedMessage id="Main.lang.close" defaultMessage="Close" />
                </Button>
            </Tooltip>
            {isEditing && (
                <Button
                    variant={fullScreen ? 'contained' : 'text'}
                    type="submit"
                    size="small"
                    color={hasErrors ? 'danger' : 'primary'}
                    onClick={handleSubmit}
                    classes={{ typography: 'flex flex-col' }}
                >
                    <span className="flex items-center">
                        {hasErrors && <Warning className="fill-current w-2 h-2 mr-1" />}
                        <FormattedMessage id="Main.lang.save" defaultMessage="Save" />
                    </span>
                    {hasErrors && (
                        <Typography variant="body3" color={'danger'}>
                            <FormattedMessage
                                id="EditDialog.save.hasErrors"
                                defaultMessage="(Erreurs dans le formulaire)"
                            />
                        </Typography>
                    )}
                </Button>
            )}
        </DialogActions>
    );
};
