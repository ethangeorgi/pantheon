import {createRequire} from 'module';

import {defineConfig} from '@lando/vitepress-theme-default-plus/config';

const require = createRequire(import.meta.url);

const {name, version} = require('../../package.json');
const landoPlugin = name.replace('@lando/', '');

export default defineConfig({
  title: 'Lando Pantheon Plugin',
  description: 'The offical Lando plugin for Pantheon.',
  landoDocs: 3,
  landoPlugin,
  version,
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['link', {rel: 'icon', href: '/pantheon/favicon.ico', size: 'any'}],
    ['link', {rel: 'icon', href: '/pantheon/favicon.svg', type: 'image/svg+xml'}],
  ],
  themeConfig: {
    multiVersionBuild: {
      satisfies: '>=1.2.0',
    },
    sidebar: sidebar(),
  },
});

function sidebar() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        {text: 'Introduction', link: '/'},
        {text: 'Installation', link: '/install'},
        {text: 'Getting Started', link: '/getting-started'},
        {text: 'Configuration', link: '/config'},
        {text: 'Tooling', link: '/tooling'},
        {text: 'Syncing', link: '/sync'},
        {text: 'Environment', link: '/environment'},
        {text: 'Libraries', link: '/libraries'},
      ],
    },
    {
      text: 'Contribution',
      collapsed: false,
      items: [
        {text: 'Development', link: '/development'},
        {text: 'Team', link: '/team'},
      ],
    },
    {
      text: 'Help & Support',
      collapsed: false,
      items: [
        {text: 'GitHub', link: 'https://github.com/lando/pantheon/issues/new/choose'},
        {text: 'Slack', link: 'https://www.launchpass.com/devwithlando'},
        {text: 'Contact Us', link: '/support'},
        {text: 'Examples', link: 'https://github.com/lando/pantheon/tree/main/examples'},
      ],
    },
    {text: 'Guides', link: '/guides', activeMatch: '/guides'},
  ];
};
