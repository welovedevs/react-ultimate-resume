import { defineMessages } from 'react-intl';

export const currenciesSelectTranslations = defineMessages({
    euro: {
        id: 'Developer.Currencies.Select.Euro',
        defaultMessage: 'Euro'
    },
    gbp: {
        id: 'Developer.Currencies.Select.GBP',
        defaultMessage: 'GBP'
    },
    usd: {
        id: 'Developer.Currencies.Select.USD',
        defaultMessage: 'USD'
    }
});

export const currenciesDisplayTranslationsBefore = defineMessages({
    euro: {
        id: 'Developer.Currencies.DisplayBefore.Euro',
        defaultMessage: ' '
    },
    gbp: {
        id: 'Developer.Currencies.DisplayBefore.GBP',
        defaultMessage: '£'
    },
    usd: {
        id: 'Developer.Currencies.DisplayBefore.USD',
        defaultMessage: '$'
    }
});

export const currenciesDisplayTranslationsAfter = defineMessages({
    euro: {
        id: 'Developer.Currencies.DisplayAfter.Euro',
        defaultMessage: '€'
    },
    gbp: {
        id: 'Developer.Currencies.DisplayAfter.GBP',
        defaultMessage: ' '
    },
    usd: {
        id: 'Developer.Currencies.DisplayAfter.USD',
        defaultMessage: ' '
    }
});
