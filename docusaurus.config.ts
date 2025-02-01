import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'WhatIfAI?',
  tagline: 'Your comprehensive guide to startup investing',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://autonateai.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/WhatIfAI-Startup-Investors/',

  // GitHub pages deployment config.
  organizationName: 'AutoNateAI', // Your GitHub org/user name.
  projectName: 'WhatIfAI-Startup-Investors', // Your repository name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/AutoNateAI/WhatIfAI-Startup-Investors/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/AutoNateAI/WhatIfAI-Startup-Investors/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'WhatIfAI',
      logo: {
        alt: 'WhatIfAI Logo',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg',
        width: 120,
        height: 60,
      },
      items: [
        {
          to: '/docs/intro',
          label: 'Guides',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          to: '/store',
          label: 'Store',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Guide',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AutoNateAI/WhatIfAI-Startup-Investors',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Store',
              to: '/store',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WhatIfAI. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
