import React, { memo } from 'react';

import { useIntl } from 'react-intl';

import { ReactComponent as LongLogo } from '../../assets/icons/brands/welovedevs_long.svg';
import { ReactComponent as YoutubeLogo } from '../../assets/icons/brands/social/Icon__Youtube.svg';
import { ReactComponent as LinkedInLogo } from '../../assets/icons/brands/social/Icon__Linkedin.svg';
import { ReactComponent as TwitchLogo } from '../../assets/icons/brands/social/Icon__Twitch.svg';
import { ReactComponent as DiscordLogo } from '../../assets/icons/brands/social/Icon__Discord.svg';

import { footerTranslations } from './footer_translations';
// import { ReactComponent as FacebookLogo } from '../../assets/icons/brands/social/Icon__Facebook.svg';
// import { ReactComponent as InstagramLogo } from '../../assets/icons/brands/social/Icon__Instagram.svg';
// import { ReactComponent as GithubLogo } from '../../assets/icons/brands/social/Icon__Github.svg';
import { ReactComponent as TwitterLogo } from '../../assets/icons/brands/social/Icon__Twitter.svg';
import { useTheme } from 'react-jss';
import { getHexFromPaletteColor } from '../../utils/styles/styles_utils';

const footer = {
    developer: ['createProfile', 'seeJobOffers', 'technicalTests', 'joinCommunity', 'training'],
    recruiter: ['hireDeveloper', 'postJobOffers', 'createCompanyPage', 'testMyCandidates', 'recruiterTraining'],
    more: ['blog', 'salaries', 'openSource', 'privacy']
};

const FooterComponent = () => {
    const { formatMessage } = useIntl();
    const theme = useTheme();
    const mainColor = getHexFromPaletteColor(theme, 'primary');

    return (
        <div className={'w-full pb-20 px-7 mt-20 flex flex-col justify-center md:flex-row text-white'} style={{backgroundColor: mainColor}}>
            <div className={'flex flex-col text-sm text-white mt-10 mr-20 md:mr-10 lg:mr-20'}>
                <a href={formatMessage(footerTranslations.w3dLink)} target="_blank" rel="noreferrer noopener">
                    <LongLogo className={'w-[260px] md:w-[160px] lg:w-[260px] mb-2.5'} />
                </a>
                <p className={'mb-6 text-primary-50'}>{formatMessage(footerTranslations.w3dSentence)}</p>
                <div className={'flex flex-col text-primary-50 mb-6'}>
                    <span className={'mb-1'}>
                        <a href="mailto:hello@welovedevs.com">hello@welovedevs.com</a>
                    </span>
                    <span>
                        <a href="tel:+33175850252">+33 175850252</a>
                    </span>
                </div>
                <div className={'flex-1 flex flex-col-reverse mb-2.5'}>
                    <div className={'flex text-primary-50'}>
                        <a href={'https://www.youtube.com/channel/UCUZcVUeCtPbcsPGMU6icxUQ'}>
                            <YoutubeLogo className={'w-10'} />
                        </a>
                        <a href={'https://www.linkedin.com/company/welovedevs'}>
                            <LinkedInLogo className={'w-10'} />
                        </a>
                        <a href={'https://www.twitch.tv/welovedevs'}>
                            <TwitchLogo className={'w-10'} />
                        </a>
                        <a href={'https://discord.com/invite/Ep6A9Ew6uU'}>
                            <DiscordLogo className={'w-10'} />
                        </a>
                        <a href={'https://twitter.com/welovedevs'}>
                            <TwitterLogo className={'w-10'} />
                        </a>
                    </div>
                </div>
            </div>
            {Object.entries(footer).map(([category, values]) => (
                <div className={'text-white mt-10 mr-20 md:mr-10 lg:mr-20'}>
                    <h3 className={'font-bold mb-6'}>{formatMessage(footerTranslations[`${category}Category`])}</h3>
                    {values.map((element) => (
                        <ul>
                            <li className="mb-2.5">
                                <a
                                    className="text-sm text-primary-50"
                                    href={formatMessage(footerTranslations[`${element}Link`])}
                                >
                                    {formatMessage(footerTranslations[element])}
                                </a>
                            </li>
                        </ul>
                    ))}
                </div>
            ))}
        </div>
    );
};

export const Footer = memo(FooterComponent);
