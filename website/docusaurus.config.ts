import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'UI Library Docs',
  favicon: 'img/favicon.ico',

  url: 'https://www.ui-library.hbsng.com',
  baseUrl: '/',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'throw',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'UI Library',
      logo: {
        alt: 'UI Library Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'docs/getting-started', label: 'Getting started', position: 'left'},
        {to: 'docs/category/components', label: 'Components', position: 'left'},
        {to: 'docs/category/hooks', label: 'Hooks', position: 'left'},
        {
          href: 'https://github.com/HenrikBuesing/ui-library',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: '/docs/getting-started',
            },
            {
              label: 'Components',
              to: '/docs/category/components',
            },
            {
              label: 'Hooks',
              to: '/docs/category/hooks',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/HenrikBuesing/ui-library',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UI Library`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: ['docusaurus-plugin-sass']
};

export default config;
