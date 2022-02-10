import React, { useCallback, useMemo } from 'react';

import { FormattedMessage, IntlFormatters, useIntl } from 'react-intl';
import { useFormikContext } from 'formik';

import { Button, TextField, Typography } from '@welovedevs/ui';

// @ts-ignore
import uuid from 'uuid/v4';

import { EditDialog } from '../../../../commons/edit_dialog/edit_dialog';
import { EditDialogField } from '../../../../commons/edit_dialog_field/edit_dialog_field';
import translations from './intested_by_translations';
import { SocialCardData } from '../data/mapping';
import { DialogProps } from '@material-ui/core';
import { ReactComponent as Twitter } from '../../../../../assets/icons/brands/twitter.svg';
import { ReactComponent as Linkedin } from '../../../../../assets/icons/brands/linkedin.svg';
import { ReactComponent as Codingame } from '../../../../../assets/icons/brands/codingame-1.svg';
import { ReactComponent as Github } from '../../../../../assets/icons/brands/github.svg';
import Yup from 'yup';
import { ErrorsDisplay } from '../../../../commons/errors/errors_display';
import { AddButton } from '../../../../commons/add_button/add_button';
import { ReactComponent as DeleteIcon } from '../../../../../assets/icons/trash.svg';
export const SocialEditDialog: React.FC<
    {
        data: SocialCardData;
        onEdit: (newData: SocialCardData) => void;
        isEditing: boolean;
        validationSchema: (formatMessage: IntlFormatters['formatMessage']) => Yup.Schema<any>;
    } & DialogProps
> = ({ open, onClose, data, onEdit, validationSchema, isEditing }) => {
    const { formatMessage } = useIntl();
    const validationSchemaToPass = useMemo(() => validationSchema(formatMessage), [validationSchema]);

    return (
        <EditDialog
            open={open}
            onClose={onClose}
            data={data}
            isEditing={isEditing}
            onEdit={onEdit}
            validationSchema={validationSchemaToPass}
            title={(<FormattedMessage id="Social.editDialog.title" defaultMessage="How can we find you ? " />) as any}
        >
            {(helpers: any) => <Content />}
        </EditDialog>
    );
};

const Content = () => {
    const { values, errors, handleChange, setFieldValue } = useFormikContext<SocialCardData>();
    const { twitter, linkedin, codingame, github, ...others } = values.profiles;
    const { formatMessage } = useIntl();

    let nextCustomField = `custom_${Object.values(others || []).length}`;

    const initField = useCallback(
        (fieldName: string) => {
            if (values?.profiles?.[fieldName]?.id) {
                return;
            }
            const id = uuid();
            setFieldValue(`profiles.${fieldName}.network`, id);
            setFieldValue(`profiles.${fieldName}.network`, fieldName);
        },
        [values?.profiles, setFieldValue]
    );

    return (
        <>
            <EditDialogField classes={{ container: 'my-3' }}>
                <div className="flex items-center sm:flex-col sm:items-start">
                    <Typography className="flex items-center min-w-[150px] sm:mb-2">
                        <Twitter className="mr-2 fill-[#1d9bf0] w-[24px] h-[24px]" /> Twitter
                    </Typography>
                    <div className="w-full ml-2 sm:ml-0 ">
                        <TextField
                            variant="flat"
                            fullWidth
                            placeholder={formatMessage(translations.twitter)}
                            value={twitter?.username}
                            onChange={(e) => {
                                initField('twitter');
                                handleChange(e);
                            }}
                            name={`profiles.twitter.username`}
                        />
                        <ErrorsDisplay errors={errors} path={'profiles.twitter.username'} />
                    </div>
                </div>
            </EditDialogField>
            <EditDialogField classes={{ container: 'my-3' }}>
                <div className="flex items-center sm:flex-col sm:items-start">
                    <Typography className="flex items-center min-w-[150px] sm:mb-2">
                        <Linkedin className="mr-2 fill-[#0a66c2]  w-[24px] h-[24px]" /> Linkedin
                    </Typography>
                    <div className="w-full ml-2 sm:ml-0">
                        <TextField
                            variant="flat"
                            fullWidth
                            placeholder={formatMessage(translations.linkedin)}
                            value={linkedin?.url}
                            onChange={(e) => {
                                initField('linkedin');
                                handleChange(e);
                            }}
                            name="profiles.linkedin.url"
                        />
                        <ErrorsDisplay errors={errors} path={'profiles.linkedin.url'} />
                    </div>
                </div>
            </EditDialogField>
            <EditDialogField classes={{ container: 'my-3' }}>
                <div className="flex items-center sm:flex-col sm:items-start">
                    <Typography className="flex items-center  min-w-[150px] sm:mb-2">
                        <Codingame className="mr-2  w-[24px] h-[24px] rounded-ml" /> CodinGame
                    </Typography>
                    <div className="w-full ml-2 sm:ml-0">
                        <TextField
                            variant="flat"
                            fullWidth
                            placeholder={formatMessage(translations.codinggame)}
                            value={codingame?.username}
                            onChange={(e) => {
                                initField('codingame');

                                handleChange(e);
                            }}
                            name="profiles.codingame.username"
                        />
                        <ErrorsDisplay errors={errors} path={'profiles.codingame.username'} />
                    </div>
                </div>
            </EditDialogField>
            <EditDialogField classes={{ container: 'my-3' }}>
                <div className="flex items-center sm:flex-col sm:items-start">
                    <Typography className="flex items-center  min-w-[150px]  sm:mb-2">
                        <Github className="mr-2  w-[24px] h-[24px] rounded-ml" /> GitHub
                    </Typography>
                    <div className="w-full ml-2 sm:ml-0 ">
                        <TextField
                            variant="flat"
                            fullWidth
                            placeholder={formatMessage(translations.github)}
                            value={github?.username}
                            onChange={(e) => {
                                initField('github');

                                handleChange(e);
                            }}
                            name="profiles.github.username"
                        />
                        <ErrorsDisplay errors={errors} path={'profiles.github.username'} />
                    </div>
                </div>
            </EditDialogField>
            {Object.entries(others)
                .filter(([, item]) => item)
                .map(([id, { network }]) => (
                    <EditDialogField
                        classes={{ container: 'my-3' }}
                        title={
                            <div className="flex items-center">
                                <FormattedMessage id="Social.editDialog.custom.title" defaultMessage="Custom" />
                            </div>
                        }
                    >
                        <div className="flex items-center w-full">
                            <div className="flex items-center w-full sm:flex-col">
                                <div className="mr-1 w-full sm:mb-1">
                                    <TextField
                                        variant="flat"
                                        fullWidth
                                        placeholder={formatMessage(translations.custom)}
                                        value={values?.profiles?.[id]?.network}
                                        onChange={handleChange}
                                        classes={{ input: 'sm:p-0 sm:px-1' }}
                                        name={`profiles.${id}.network`}
                                    />
                                    <ErrorsDisplay errors={errors} path={`profiles.${id}.network`} />
                                </div>
                                <div className="mr-1 w-full">
                                    <TextField
                                        variant="flat"
                                        fullWidth
                                        placeholder={formatMessage(translations.customUrl)}
                                        value={values?.profiles?.[id]?.url}
                                        onChange={handleChange}
                                        classes={{ input: 'sm:p-0 sm:px-1' }}
                                        name={`profiles.${id}.url`}
                                    />
                                    <ErrorsDisplay errors={errors} path={`profiles.${id}.url`} />
                                </div>
                            </div>
                            <Button
                                onClick={() => setFieldValue(`profiles.${id}`, null)}
                                color="danger"
                                variant={'contained'}
                                size="small"
                            >
                                <DeleteIcon />
                            </Button>
                        </div>
                    </EditDialogField>
                ))}
            <AddButton
                onClick={() => {
                    setFieldValue(`profiles.${nextCustomField}.id`, nextCustomField);
                }}
            />
        </>
    );
};
