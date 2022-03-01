import 'whatwg-fetch';
import { DeveloperProfile } from './components/profile';

import './styles/global.css';

import { DEFAULT_CARD_ORDER } from './components/cards/utils/cards_order';
import { useIsEditing } from './components/hooks/use_is_editing';
import { BouncingRoundButton } from './components/commons/bouncing_round_button/bouncing_round_button';
import { ProfileCard } from './components/commons/profile_card/profile_card';
import { ProfileCardAnimatedBack } from './components/commons/profile_card/profile_card_animated_back/profile_card_animated_back';
import { useCardIsEditing } from './components/hooks/profile_card_hooks/use_card_isEditing';
import { ProfileCardPaddedFront } from './components/commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from './components/commons/center_content_container/center_content_container';
import { ProfileCardFrontTypography } from './components/commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardActions } from './components/commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from './components/commons/profile_card/profile_card_button/profile_card_button';
import { useCardSide } from './components/hooks/profile_card_hooks/use_card_side';
import {
    createScreenWidthMediaQuery,
    getColorsFromCardVariant,
    getHexFromPaletteColor
} from './utils/styles/styles_utils';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ProfileCardFrontVector } from './components/commons/profile_card/profile_card_front_vector/profile_card_front_vector';
import { DEFAULT_THEME } from './utils/styles/theme/theme';
import { DeveloperProfileContext } from './utils/context/contexts';
import { useCardVariant } from './components/hooks/profile_card_hooks/use_card_variant';

import { ReactComponent as EditIcon } from './assets/icons/edit.svg';


export {
    EditIcon,
    DeveloperProfile,
    DEFAULT_CARD_ORDER,
    BouncingRoundButton,
    ProfileCard,
    ProfileCardAnimatedBack,
    ProfileCardPaddedFront,
    CenterContentContainer,
    DeveloperProfileContext,
    ProfileCardFrontTypography,
    ProfileCardActions,
    ProfileCardButton,
    ProfileCardFrontVector,
    DialogTitle,
    DEFAULT_THEME,
    useIsEditing,
    useCardVariant,
    useCardIsEditing,
    useCardSide,
    createScreenWidthMediaQuery,
    getHexFromPaletteColor,
    getColorsFromCardVariant

};
