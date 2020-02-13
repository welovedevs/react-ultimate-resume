import React from 'react';

import { FormattedMessage } from 'react-intl';

export const PALETTE_KEY_TRANSLATIONS = Object.freeze({
   primary: (
       <FormattedMessage
           id="PaletteVisual.Key.Primary"
           defaultMessage="Primaire"
       />
   ),
    secondary: (
        <FormattedMessage
            id="PaletteVisual.Key.Secondary"
            defaultMessage="Secondaire"
        />
    ),
    tertiary: (
        <FormattedMessage
            id="PaletteVisual.Key.Tertiary"
            defaultMessage="Tertiaire"
        />
    )
});
