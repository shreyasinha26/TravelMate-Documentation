// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MyTravelMate',
  tagline: 'Your Travel Companion',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://shreyasinha26.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: 'TravelMate-Documentation',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'shreyasinha26', // Usually your GitHub org/user name.
  projectName: 'TravelMate-Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
 i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  }, 
  
  

  themeConfig: {
    navbar: {
      title: 'TravelBlogs',
      logo: {
        alt: 'TravelMate Logo',
        src: 'img/logo.svg', // Your logo
      },
 
      items: [
        {
          to: 'docs/getting-started',
          label: 'Docs',
          position: 'left',
        },

        {
          to: 'blog', // Link to the blog section in the navbar
          label: 'Blog',
          position: 'left',
        },

        {
          href: 'https://github.com/travelmate/travelmate-docs',
          label: 'SignUp',
          position: 'right',
        },
      ],

      
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About MyTravelMate',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
            {
              label: ' Reference',
              to: 'docs/info',
            },
            
            {
              label: 'Posts',
              to: 'docs/post',
            }
          ],
        },
      
      ],
      copyright: `Copyright © (Shreya Sinha) ${new Date().getFullYear()} MyTravelMate. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true, // Show estimated reading time on blog posts
          postsPerPage: 5, // Display 5 blog posts per page
          path: 'blog', // Path for the blog posts
          routeBasePath: 'blog', // Make sure the blog is available at /blog
        },

        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

export default config;
