import { BasicCardDataType } from '../../data/mapping';
import { FormikHandlers, FormikHelpers } from 'formik/dist/types';
import React, { useContext } from 'react';
import { StaticDataContext } from '../../../../../../utils/context/contexts';

import { ListItem, TextField } from '@welovedevs/ui';
import { Select } from '../../../../../commons/select/select';

type Props<T> = {
    value: BasicCardDataType['globalJobTitle'];
    handleChange: FormikHandlers['handleChange'];
    setFieldValue: FormikHelpers<T>['setFieldValue'];
};
export const JobTitleField = <T extends any>({ handleChange, value, setFieldValue }: Props<T>) => {
    const { referenceData } = useContext(StaticDataContext);

    if (referenceData?.professions) {
        return (
            <>
                {/*
                //@ts-ignore */}
                <Select
                    value={value}
                    onChange={(newValue: string) => setFieldValue('globalJobTitle', newValue)}
                    textFieldProps={{
                        variant: 'flat',
                        fullWidth: true
                    }}
                >
                    {referenceData.professions.map((elemValue, index) => (
                        <ListItem key={`job_search_state${elemValue}_${index}`} {...({ value: elemValue } as any)}>
                            {elemValue}
                        </ListItem>
                    ))}
                </Select>
            </>
        );
    }
    return (
        <TextField
            onChange={handleChange('globalJobTitle')}
            name="globalJobTitle"
            value={value}
            variant="flat"
            fullWidth
        />
    );
};
