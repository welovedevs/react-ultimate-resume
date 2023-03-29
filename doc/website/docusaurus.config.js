// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'React Ultimate Resume',
    tagline: 'Awesome react component for your Developer CV',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://welovedevs.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/react-ultimate-resume',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'WeLoveDevs.com', // Usually your GitHub org/user name.
    projectName: 'react-ultimate-resume', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en']
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            })
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'Docs',
                logo: {
                    alt: 'WeLoveDevs Logo',
                    src: 'https://welovedevs.com/wp-content/uploads/2019/12/logo-menu-welovedevs-220bad.svg'
                },
                items: [
                    {
                        label: 'GitHub',
                        href: 'https://github.com/facebook/welovedevs',
                        position: 'right'
                    }
                ]
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/udbbbAq'
                            }
                        ]
                    },
                    {
                        title: 'Social',
                        items: [
                            {
                                label: 'Blog',
                                href: 'https://welovedevs.com/inspiration'
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/welovedevs'
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/welovedevs'
                            }
                        ]
                    }
                ],
                copyright: `Copyright © ${new Date().getFullYear()} WeLoveDevs.com. Built with Docusaurus.`
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme
            }
        })
};

module.exports = config;
