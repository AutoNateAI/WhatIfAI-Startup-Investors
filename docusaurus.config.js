const config = {
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
        to: '/store',
        label: 'Store',
        position: 'left',
      },
    ],
  },
  baseUrl: '/your-repository-name/',
  organizationName: 'your-github-username',
  projectName: 'your-repository-name',
  trailingSlash: false,
};

module.exports = config; 