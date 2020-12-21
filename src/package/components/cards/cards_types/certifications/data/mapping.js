import uuid from 'uuid/v4';

export const mapCertificationsFromJsonResume = (jsonResume) => ({
    certifications: jsonResume?.certificates?.map((certification, index) => ({
        ...certification,
        id: certification.id || uuid(),
        index
    }))
});

export const mapCertificationsToJsonResume = (data) => ({
    certificates: data?.certifications || []
});
