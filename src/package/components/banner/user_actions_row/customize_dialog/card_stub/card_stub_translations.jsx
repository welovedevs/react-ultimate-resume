import React from 'react';

import { FormattedMessage } from 'react-intl';

export const CARD_STUB_TRANSLATIONS = Object.freeze({
    backgroundColor: (
        <FormattedMessage id="CardStub.CardVariantTooltip.FrontBackground" defaultMessage="Card's front background" />
    ),
    color: (
        <FormattedMessage
            id="CardStub.CardVariantTooltip.FrontColor"
            defaultMessage="Card's front texts & icons color"
        />
    ),
    backBackgroundColor: (
        <FormattedMessage
            id="CardStub.CardVariantTooltip.BackBackgroundColor"
            defaultMessage="Card's back background"
        />
    ),
    backColor: (
        <FormattedMessage id="CardStub.CardVariantTooltip.BackColor" defaultMessage="Card's back texts & icons color" />
    )
});
