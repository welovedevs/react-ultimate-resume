import { defineMessages } from 'react-intl';

export const currenciesSelectTranslations = defineMessages({
    usd: {
        id: 'Developer.Currencies.Select.USD',
        defaultMessage: '$ (USD)'
    },
    eur: {
        id: 'Developer.Currencies.Select.EUR',
        defaultMessage: '€ (EUR)'
    },
    jpy: {
        id: 'Developer.Currencies.Select.JPY',
        defaultMessage: '¥ (JPY)'
    },
    gbp: {
        id: 'Developer.Currencies.Select.GBP',
        defaultMessage: '£ (GBP)'
    }
});

export const currenciesDisplayTranslationsBefore = defineMessages({
    usd: {
        id: 'Developer.Currencies.DisplayBefore.USD',
        defaultMessage: '$'
    },
    eur: {
        id: 'Developer.Currencies.DisplayBefore.EUR',
        defaultMessage: '€'
    },
    jpy: {
        id: 'Developer.Currencies.DisplayBefore.JPY',
        defaultMessage: '¥'
    },
    gbp: {
        id: 'Developer.Currencies.DisplayBefore.GBP',
        defaultMessage: '£'
    }
});

export const currenciesDisplayTranslationsAfter = defineMessages({
    usd: {
        id: 'Developer.Currencies.DisplayAfter.USD',
        defaultMessage: ' USD'
    },
    eur: {
        id: 'Developer.Currencies.DisplayAfter.EUR',
        defaultMessage: ' EUR'
    },
    jpy: {
        id: 'Developer.Currencies.DisplayAfter.JPY',
        defaultMessage: ' JPY'
    },
    gbp: {
        id: 'Developer.Currencies.DisplayAfter.GBP',
        defaultMessage: ' GBP'
    }
});
