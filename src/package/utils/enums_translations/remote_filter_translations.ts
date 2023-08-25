import { defineMessages, MessageDescriptor } from 'react-intl';
import { RemoteFrequenciesV2keys } from '../../types/enums/remote/remote_utils';

export const remoteSelectTranslations: {
    [key in RemoteFrequenciesV2keys | 'others']: MessageDescriptor;
} = defineMessages({
    no: {
        id: 'Developer.RemoteFrequency.Select.no',
        defaultMessage: 'No'
    },
    hybrid: {
        id: 'Developer.RemoteFrequency.Select.hybrid',
        defaultMessage: 'Yes, partially'
    },
    fullTime: {
        id: 'Developer.RemoteFrequency.Select.fullTime',
        defaultMessage: 'Yes, Full time'
    },
    others: {
        id: 'Developer.RemoteFrequency.Select.Other',
        defaultMessage: 'Other'
    }
});

export const remoteDisplayTranslations: {
    [key in RemoteFrequenciesV2keys | 'others']: MessageDescriptor;
} = defineMessages({
    no: {
        id: 'Developer.RemoteFrequency.Display.no',
        defaultMessage: "I don't want to remote work"
    },
    hybrid: {
        id: 'Developer.RemoteFrequency.Display.hybrid',
        defaultMessage:
            "I'd like to remote work {daysPerWeek,plural, =0 { } =1 {(1 day per week)} other {(# days per week)}}"
    },
    fullTime: {
        id: 'Developer.RemoteFrequency.Display.fullTime',
        defaultMessage: 'I want to work remotely'
    },
    others: {
        id: 'Developer.RemoteFrequency.Display.other',
        defaultMessage: 'Autres'
    }
});
