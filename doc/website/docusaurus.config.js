// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'React Ultimate Resume',
    tagline: 'Our vision for a clean looking and awesome react-powered dev resume.',
    url: 'https://welovedevs.com/',
    baseUrl: process.env.BASE_PATH || '/',
    favicon: 'img/favicon.ico',
    organizationName: 'welovedevs', // Usually your GitHub org/user name.
    projectName: 'react-ultimate-resume', // Usually your repo name.
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/'
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/'
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
            navbar: {
                title: 'Docs',
                logo: {
                    alt: 'WeLoveDevs Logo',
                    src: 'https://welovedevs.com/wp-content/uploads/2019/12/logo-menu-welovedevs-220bad.svg'
                },
                items: [
                    {
                        href: 'https://welovedevs.com/inspiration',
                        label: 'Blog',
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
