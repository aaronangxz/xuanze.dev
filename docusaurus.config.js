// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'xuanze.dev',
    tagline: 'fmt.Println("Hello world.")',
    url: 'https://xuanze.dev',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'aaronangxz', // Usually your GitHub org/user name.
    projectName: 'XZ-LeetCode-Journal', // Usually your repo name.
    trailingSlash: false,
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: undefined,
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/aaronangxz/XZ-LeetCode-Journal/blob/sol-deploy/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                gtag: {
                    trackingID: 'G-KP4W6YDH11',
                    anonymizeIP: true,
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'xuanze.dev',
            logo: {
                alt: 'My Site Logo',
               src: 'img/favicon.ico',
            },
            items: [{
                    type: 'doc',
                    docId: 'leetcode',
                    position: 'left',
                    label: 'LeetCode',
                },
                {
                    type: 'doc',
                    docId: 'notes',
                    position: 'left',
                    label: 'Notes',
                },
                { to: '/projects', label: 'Projects', position: 'left' },
                { to: '/blog', label: 'Blog', position: 'left' },
                { to: '/about', label: 'About', position: 'right' },
                {
                    href: 'https://github.com/aaronangxz',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'LeetCode',
                        to: '/docs/leetcode',
                    }, 
                    {
                        label: 'Notes',
                        to: '/docs/notes',
                    },{
                        label: 'Projects',
                        to: '/projects',
                    },],
                },
                {
                    title: 'Socials',
                    items: [{
                        label: 'GitHub',
                        href: 'https://github.com/aaronangxz',
                        },
                        {
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/in/aaronangxz/',
                        },
                        {
                            label: 'LeetCode',
                            href: 'https://leetcode.com/angxze/',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'View on IPFS (with Brave Browser)',
                            href: 'ipfs://bafybeignxfhnmpqblheb5uje6bghgy6pupb7e4i6qlhu7fazn7nesneh5y/',
                        },
                        {
                            label: 'View on Web',
                            href: 'https://aaronangxz.github.io/XZ-LeetCode-Journal/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} XZ. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;