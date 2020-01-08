import React from 'react';
import { FormattedMessage } from 'react-intl';

const RemoteWork = ({ remoteWork }) => {
    if (!remoteWork) {
        return null;
    }
    if (remoteWork === 'NEVER') {
        return <FormattedMessage id="Basics.Back.Location" defaultMessage="Not looking for remote work" />;
    }
    return <FormattedMessage id="Basics.Back.Location" defaultMessage="Looking for remote work" />;
};
export const BasicCardBack = ({ data }) => {
    const { currentCity, remoteWork, experienceYears, contractType, studiesLevel, codingYears, codingReason } = data;
    return (
        <div>
            <div>
                <FormattedMessage
                    id="Basics.Back.Location"
                    defaultMessage={'based in {currentCity}'}
                    values={{ currentCity }}
                />
                <div>
                    <RemoteWork remoteWork={remoteWork} />
                </div>
            </div>
            <div>
                <FormattedMessage
                    id="Basics.Back.Experience"
                    defaultMessage={'{experienceYears} years of experience'}
                    values={{ experienceYears }}
                />
                <FormattedMessage
                    id="Basics.Back.ContractType"
                    defaultMessage={'Looking for a {contractType} contract'}
                    values={{ contractType }}
                />
            </div>
            <div>
                <FormattedMessage
                    id="Basics.Back.StudiesLevel"
                    defaultMessage={'{studiesLevel} years of higher education'}
                    values={{ studiesLevel }}
                />
            </div>
            <div>
                <FormattedMessage
                    id="Basics.Back.CodingYears"
                    defaultMessage={'{codingYears} years coding'}
                    values={{ codingYears }}
                />
            </div>
            <div>{codingReason}</div>
        </div>
    );
};
