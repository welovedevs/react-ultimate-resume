import { defineMessages } from 'react-intl';

export const translations = defineMessages({
    companyName: {
        id: 'Experiences.editDialog.companyName.title',
        defaultMessage: 'Company name'
    },
    companyNamePlaceholder: {
        id: 'Experiences.editDialog.companyName.placeholder',
        defaultMessage: 'Example : WeLoveDevs.com (optional)'
    },
    stillEmployed: {
        id: 'Experiences.editDialog.stillEmployed',
        defaultMessage: 'Still employed'
    },
    jobTitle: {
        id: 'Experiences.editDialog.jobTitle.title',
        defaultMessage: 'Position'
    },
    jobTitlePlaceholder: {
        id: 'Experiences.editDialog.jobTitle.placeholder',
        defaultMessage: 'Fill in the position title'
    },
    descriptionTitle: {
        id: 'Experiences.editDialog.description.title',
        defaultMessage: 'Job description'
    },
    descriptionPlaceholder: {
        id: 'Experiences.editDialog.description.placeholder',
        defaultMessage:
            'Your skills and technologies practiced for this job. What contract were you working on? With how many people? (30 chars. min)'
    },
    startDate: {
        id: 'Experiences.editDialog.start',
        defaultMessage: 'Start : '
    },
    endDate: {
        id: 'Experiences.editDialog.end',
        defaultMessage: 'End : '
    },
    jobTitleNoCompanyBothDates: {
        id: 'Experiences.editDialog.jobTitleNoCompanyBothDates',
        defaultMessage: '{jobTitle} from {start} to {end}'
    },
    jobTitleNoCompanyNoEnd: {
        id: 'Experiences.editDialog.jobTitleNoCompanyNoEnd',
        defaultMessage: '{jobTitle} since {start}'
    },
    jobTitleCompanyBothDates: {
        id: 'Experiences.editDialog.jobTitleCompanyBothDates',
        defaultMessage: '{jobTitle} at {companyName} from {start} to {end}'
    },
    jobTitleCompanyNoEnd: {
        id: 'Experiences.editDialog.jobTitleCompanyNoEnd',
        defaultMessage: '{jobTitle} at {companyName} from {start}'
    },
    jobPlace: {
        id: 'Experiences.editDialog.jobPlace.title',
        defaultMessage: 'Job location'
    },
    jobPlacePlaceholder: {
        id: 'Experiences.editDialog.jobPlace.placeholder',
        defaultMessage: 'Where is/was it located?'
    }
});
