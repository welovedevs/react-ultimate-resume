import { defineMessages } from 'react-intl';

export const translations = defineMessages({
    issuerName: {
        id: 'Certifications.editDialog.issuerName.title',
        defaultMessage: 'Issuer name'
    },
    issuerNamePlaceholder: {
        id: 'Certifications.editDialog.issuerName.placeholder',
        defaultMessage: 'e.g. OpenClassrooms'
    },
    name: {
        id: 'Certifications.editDialog.name.title',
        defaultMessage: 'Certification name'
    },
    namePlaceholder: {
        id: 'Certifications.editDialog.name.placeholder',
        defaultMessage: 'e.g. Certified Kubernetes Administrator'
    },
    date: {
        id: 'Certifications.editDialog.date.title',
        defaultMessage: 'Graduation year'
    },
    datePlaceholder: {
        id: 'Certifications.editDialog.date.placeholder',
        defaultMessage: 'Level : License, PhD...'
    },
    url: {
        id: 'Certifications.editDialog.url.title',
        defaultMessage: 'Link to the certification'
    },
    urlPlaceholder: {
        id: 'Certifications.editDialog.url.placeholder',
        defaultMessage: 'e.g. https://example.com/my-certification.png'
    }
});
