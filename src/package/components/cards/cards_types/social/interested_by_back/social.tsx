import React from 'react';

import { useTheme } from 'react-jss';
import { useCardVariant } from '../../../../hooks/profile_card_hooks/use_card_variant';
import { getColorsFromCardVariant, getHexFromPaletteColor } from '../../../../../utils/styles/styles_utils';
import { CardSideProps } from '../../../types/card_props';
import { SocialCardData } from '../data/mapping';
import { ReactComponent as Twitter } from '../../../../../assets/icons/brands/twitter.svg';
import { ReactComponent as Linkedin } from '../../../../../assets/icons/brands/linkedin.svg';
import { ReactComponent as Codingame } from '../../../../../assets/icons/brands/codingame-1.svg';
import { ReactComponent as PhoneIcon } from '../../../../../assets/icons/phone.svg';
import { ReactComponent as EmailIcon } from '../../../../../assets/icons/email.svg';
import { ReactComponent as Planet } from '../../../../../assets/icons/planet.svg';
import { FormattedMessage } from 'react-intl';
import { Typography } from '@welovedevs/ui';
import { ProfileCardAnimatedBack } from '../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back';
import { useOptions } from '../../../../hooks/use_options';

export const SocialCardContent: React.FC<CardSideProps<SocialCardData>> = ({ data }) => {
    const [variant] = useCardVariant();
    const theme = useTheme();
    const colorsFromCardVariant = getColorsFromCardVariant(theme, variant);
    const textColor = getHexFromPaletteColor(theme, colorsFromCardVariant.backColor);
    const [showContactInformations] = useOptions('showContactInfos', false);

    const { twitter, linkedin, codingame, ...others } = data.profiles;

    const twitterUsername = twitter?.username?.replace(/@/g, '');
    return (
        <ProfileCardAnimatedBack title={<FormattedMessage id="Social.card.title" defaultMessage="Contact me" />}>
            {showContactInformations && data.phone && (
                <a href={`phone:${data.phone}`} target="_blank" rel="noreferrer noopener">
                    <Typography
                        component="div"
                        className={`mb-4 flex items-center hover:underline hover:decoration-2`}
                        style={{ color: textColor }}
                    >
                        <PhoneIcon
                            className={`mr-3 w-[24px] h-[24px]`}
                            style={{ color: textColor, fill: 'currentColor' }}
                        />
                        {data.phone}
                    </Typography>
                </a>
            )}
            {showContactInformations && data.email && (
                <a href={`mailto:${data.email}`} target="_blank" rel="noreferrer noopener">
                    <Typography
                        component="div"
                        className={`mb-4 flex items-center hover:underline hover:decoration-2`}
                        style={{ color: textColor }}
                    >
                        <EmailIcon
                            className={`mr-3  w-[24px] h-[24px]`}
                            style={{ color: textColor, fill: 'currentColor' }}
                        />
                        {data.email}
                    </Typography>
                </a>
            )}
            {twitterUsername && (
                <a href={`https://twitter.com/${twitterUsername}`} target="_blank" rel="noreferrer noopener">
                    <Typography
                        component="div"
                        className={`mb-4 flex items-center hover:underline hover:decoration-2`}
                        style={{ color: textColor }}
                    >
                        <Twitter className="mr-3 fill-[#1d9bf0] w-[24px] h-[24px]" />
                        <FormattedMessage
                            id="Social.card.twitter.title"
                            defaultMessage="My twitter (@{value})"
                            values={{ value: twitterUsername }}
                        />
                    </Typography>
                </a>
            )}
            {linkedin?.url && (
                <a href={linkedin?.url} target="_blank" rel="noreferrer noopener">
                    <Typography
                        component="div"
                        className={`mb-4 flex items-center hover:underline hover:decoration-2`}
                        style={{ color: textColor }}
                    >
                        <Linkedin className="mr-3 fill-[#0a66c2] w-[24px] h-[24px]" />
                        <FormattedMessage id="Social.card.linkedin.title" defaultMessage="My Linkedin profile" />
                    </Typography>
                </a>
            )}
            {codingame?.username && (
                <a
                    href={`https://www.codingame.com/profile/${codingame.username}`}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Typography
                        component="div"
                        className={`mb-4 flex items-center hover:underline hover:decoration-2`}
                        style={{ color: textColor }}
                    >
                        <Codingame className="mr-3 w-[24px] h-[24px] rounded-md" />
                        <FormattedMessage id="Social.card.linkedin.title" defaultMessage="My codingame profile" />
                    </Typography>
                </a>
            )}
            {Object.entries(others)
                .filter(([, item]) => item)
                .map(([, { url, network }]) => (
                    <a href={url} target="_blank" rel="noreferrer noopener">
                        <Typography
                            component="div"
                            className={`mb-4 flex items-center hover:underline hover:decoration-2`}
                            style={{ color: textColor }}
                        >
                            <Planet
                                className={`mr-3 w-[24px] h-[24px] rounded-md`}
                                style={{ color: textColor, stroke: 'currentColor' }}
                            />
                            {network}
                        </Typography>
                    </a>
                ))}
        </ProfileCardAnimatedBack>
    );
};
