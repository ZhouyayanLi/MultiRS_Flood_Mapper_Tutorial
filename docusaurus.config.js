// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MultiRS Flood Mapper',
  tagline: 'Mapping water extent on the cloud with multimodal remote sensing imagery',
  favicon: 'img/uihilab.ico',

  // Set the production url of your site here
  url: 'https://zhouyayanli.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/tutorials/floodmapper/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Zhouyayan Li / UIHILAB', // Usually your GitHub org/user name.
  projectName: 'MultiRS_Flood_Mapper', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
          docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),

          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/uihilab.ico',
      navbar: {
        title: 'Overview',
        logo: {
          alt: 'My Site Logo',
          src: 'img/uihilab.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
            },
          {
            href: 'https://sar1-iris.users.earthengine.app/view/multirs-flood-mapper',
            label: 'MultiRS Flood Mapper',
            position: 'left',
          },
          {
            href: 'https://hydroinformatics.uiowa.edu/',
            label: 'UIHI Lab',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/uihilab',
              },
            ],
          },
          {
            title: 'Reference to Journal Articles',
            items: [
              {
                label: 'https://doi.org/10.31223/X5909M',
                href: 'https://doi.org/10.31223/X5909M',
              },
              {
                label: 'https://doi.org/10.31223/X5WH5J',
                href: 'https://doi.org/10.31223/X5WH5J',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} University of Iowa, UIHI Lab. MIT License`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
