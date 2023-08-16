import { useIntl, defineMessages } from 'react-intl';

import { Typography } from '@welovedevs/ui';

export const footerTranslations = defineMessages({
    w3dSentence: {
        id: 'Footer.w3d.Sentence',
        defaultMessage: 'We find dream jobs for developers.'
    },
    developerCategory: {
        id: 'Footer.Category.Developer',
        defaultMessage: 'Developer'
    },
    recruiterCategory: {
        id: 'Footer.Category.Recruiter',
        defaultMessage: 'Recruiter'
    },
    moreCategory: {
        id: 'Footer.Category.More',
        defaultMessage: 'Go further'
    },
    createProfile: {
        id: 'Footer.Category.Developer.CreateProfile',
        defaultMessage: 'Create my developer profile'
    },
    juniorProfile: {
        id: 'Footer.Category.Developer.juniorProfile',
        defaultMessage: 'Candidats juniors'
    },
    experimentedProfile: {
        id: 'Footer.Category.Developer.experimentedProfile',
        defaultMessage: 'Candidats experimentés'
    },
    seniorProfile: {
        id: 'Footer.Category.Developer.seniorPorfile',
        defaultMessage: 'Candidats seniors'
    },
    seeJobOffers: {
        id: 'Footer.Category.Developer.SeeJobOffers',
        defaultMessage: 'See developers job offers'
    },
    technicalTests: {
        id: 'Footer.Category.Developer.TechnicalTests',
        defaultMessage: 'Technical tests and quiz'
    },
    joinCommunity: {
        id: 'Footer.Category.Developer.JoinCommunity',
        defaultMessage: 'Join our developer community'
    },
    training: {
        id: 'Footer.Category.Developer.Training',
        defaultMessage: 'Training and coaching for developers'
    },
    hireDeveloper: {
        id: 'Footer.Category.Recruiter.HireDeveloper',
        defaultMessage: 'Meet and hire developers'
    },
    createCompanyPage: {
        id: 'Footer.Category.Recruiter.createCompanyPage',
        defaultMessage: 'Create my company page'
    },
    postJobOffers: {
        id: 'Footer.Category.Recruiter.postJobOffers',
        defaultMessage: 'Post job offers'
    },
    testMyCandidates: {
        id: 'Footer.Category.Recruiter.testMyCandidates',
        defaultMessage: 'Test my developers'
    },
    recruiterTraining: {
        id: 'Footer.Category.Recruiter.recruiterTraining',
        defaultMessage: 'Training and coaching for recruiters'
    },
    blog: {
        id: 'Footer.Category.More.recruiterTraining',
        defaultMessage: 'Blog'
    },
    salaries: {
        id: 'Footer.Category.More.salaries',
        defaultMessage: 'Developer salaries report'
    },
    openSource: {
        id: 'Footer.Category.More.openSource',
        defaultMessage: 'Open Source'
    },
    privacy: {
        id: 'Footer.Category.More.privacy',
        defaultMessage: 'Privacy'
    },
    legal: {
        id: 'Footer.Category.More.legal',
        defaultMessage: 'Legal Notice'
    },
    helpdesk: {
        id: 'Footer.Category.More.helpdesk',
        defaultMessage: 'Helpdesk'
    },
    cookies: {
        id: 'Footer.Category.More.Cookies',
        defaultMessage: 'Gestion des cookies'
    }
});

const footer = {
    developer: ['seniorProfile', 'experimentedProfile', 'juniorProfile', 'seeJobOffers', 'technicalTests', 'training'],
    recruiter: [
        'hireDeveloper',
        'postJobOffers',
        'createCompanyPage',
        'testMyCandidates',
        'recruiterTraining',
        'legal'
    ],
    more: ['blog', 'salaries', 'openSource', 'privacy', 'helpdesk', 'cookies']
};

const Footer = () => {
    const { formatMessage } = useIntl();

    const links = {
        w3d: 'https://welovedevs.com',
        juniorProfile: '/portal-junior',
        experimentedProfile: '/portal-experimented',
        seniorProfile: '/portal-senior',
        createProfile: '/register_developer',
        seeJobOffers: '/jobs',
        technicalTests: '/tests',
        joinCommunity: 'https://discord.gg/QMhwJ5J',
        training: 'https://school.welovedevs.com/',
        hireDeveloper: '/register_recruiter',
        createCompanyPage: '/register_recruiter',
        postJobOffers: '/register_recruiter',
        testMyCandidates: 'https://welovedevs.com/fr/tests-techniques/',
        recruiterTraining: 'https://welovedevs.com/fr/recruteurs/formations/',
        blog: 'https://welovedevs.com/fr/blog/',
        salaries: 'https://welovedevs.com/fr/salaires',
        openSource: 'https://github.com/welovedevs/react-ultimate-resume',
        privacy: 'https://welovedevs.com/fr/data-policy',
        legal: 'https://welovedevs.com/fr/legal-notes/',
        helpdesk: 'https://help.welovedevs.com/fr/'
    };

    return (
        <footer className="text-white text-opacity-30">
            <div className=" w-full pb-10 p-3 flex justify-center md:flex-col bg-primary-500">
                <div className="flex flex-col text-sm text-white mt-5 md:mr-10 mr-5 ">
                    <p className="mb-3 text-primary-50">{formatMessage(footerTranslations.w3dSentence)}</p>
                    <div className="flex flex-col text-primary-50 mb-3">
                        <span className="mb-1/2">
                            <a href="mailto:hello@welovedevs.com">hello@welovedevs.com</a>
                        </span>
                        <span>
                            <a href="tel:+33175850252">+33 175850252</a>
                        </span>
                    </div>
                </div>
                {Object.entries(footer).map(([category, values], index) => {
                    // @ts-ignore
                    const categoryTranslation = formatMessage(footerTranslations[`${category}Category`]);
                    return (
                        <div key={`${category}${index}`} className="flex flex-col text-sm text-white mt-5 md:mr-10 m-5">
                            <Typography className="text-white font-bold text-xl">{categoryTranslation}</Typography>
                            <ul className="list-none p-0 m-0 mt-2">
                                {values.map((element, index2) => {
                                    // @ts-ignore
                                    const elementTranslation = formatMessage(footerTranslations[element]);

                                    if (!links[element]) {
                                        return (
                                            <li className="mb-2" key={`${elementTranslation}${index2}`}>
                                                <span className="hover:cursor-pointer">{elementTranslation}</span>
                                            </li>
                                        );
                                    }
                                    return (
                                        <li className="mb-2" key={`${elementTranslation}${index2}`}>
                                            {links[element] && links[element]?.startsWith('http') ? (
                                                <a
                                                    className="text-sm text-primary-50 cursor-pointer"
                                                    href={links[element] || '#'}
                                                >
                                                    {elementTranslation}
                                                </a>
                                            ) : (
                                                <a
                                                    className="text-sm text-primary-50 cursor-pointer"
                                                    href={links[element] || '#'}
                                                >
                                                    {elementTranslation}
                                                </a>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </footer>
    );
};

export default Footer;
