import React from 'react';

import { useIntl } from 'react-intl';

import { ListItem } from '@wld/ui';

import { Select } from '../../../../../commons/select/select';

import { JOB_SEARCH_STATE } from '../../../../../../utils/enums/job_serachstate/job_search_state';

import { translations } from '../../../../../../utils/enums/job_serachstate/job_search_state_translations';

const JobSearchStateFieldComponent = ({ value, handleChange }) => {
    const { formatMessage } = useIntl();
    return (
        <Select
            value={value}
            onChange={handleChange('searchState')}
            textFieldProps={{
                variant: 'flat',
                fullWidth: true
            }}
        >
            {JOB_SEARCH_STATE.map((elemValue, index) => (
                <ListItem key={`job_search_state${elemValue}_${index}`} value={elemValue}>
                    {formatMessage(translations[elemValue])}
                </ListItem>
            ))}
        </Select>
    );
};

export const JobSearchStateField = JobSearchStateFieldComponent;
