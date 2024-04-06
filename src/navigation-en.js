import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/en/home'),
    },
    {
      text: 'About',
      href: getPermalink('/en/enkconstructions'),
    },
    // {
    //   text: 'À Propos',
    //   links: [
    //     {
    //       text: 'Notre histoire',
    //       href: getPermalink('/homes/propos'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/homes/mobile-app'),
    //     },
    //     {
    //       text: 'Personal',
    //       href: getPermalink('/homes/personal'),
    //     },
    //   ],
    // },
    // {
    {
      text: 'Services',
      href: getPermalink('/en/services'),
      links: [
        {
          text: 'Our Services',
          href: getPermalink('/en/services/services'),
        },
        {
          text: 'Interior Renovations',
          href: getPermalink('/en/services/renos-int'),
        },
        {
          text: 'Exterior Renovations',
          href: getPermalink('/en/services/renos-ext'),
        },
        {
          text: 'Services For Condos',
          href: getPermalink('/en/condos'),
        },
        {
          text: 'Commercial Service',
          href: getPermalink('/en/commercial'),
        },
      ],
    },

    
    
    {
      text: 'Blog',
      href: getBlogPermalink(),
        // {
        //   text: 'Blog List',
          
        // },
        // {
        //   text: 'Article',
        //   href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        // },
        // {
        //   text: 'Article (with MDX)',
        //   href: getPermalink('markdown-elements-demo-post', 'post'),
        // },
        // {
        //   text: 'Category Page',
        //   href: getPermalink('tutorials', 'category'),
        // },
        // {
        //   text: 'Tag Page',
        //   href: getPermalink('astro', 'tag'),
        // },
    },
    {
      text: 'Contact',
      href: getPermalink('/en/contact'),
    },
    
    {
      text: 'FR',
      href: getPermalink('/'),
    },
  ],
  actions: [{ text: "Emergency Call!", href: 'tel:4388625985', target: '' }],
};

export const footerData = {
  links: [
    {
      title: 'About',
      links: [
        { text: 'K-CONSTRUCTIONS', href: '/en/enkconstructions' },
        { text: 'Mission', href: '/en/enkconstructions' },
        { text: 'Team', href: '/en/enkconstructions' },
        // { text: 'Enterprise', href: '#' },
        // { text: 'Customer stories', href: '#' },
        // { text: 'Pricing', href: '#' },
        // { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Interior', href: '/en/services/renos-int' },
        { text: 'Exterior', href: '/en/services/renos-ext' },
        { text: 'Services', href: '/en/services/services' },
        { text: 'Condos', href: '/en/condos' },
        { text: 'Commercial', href: '/en/commercial' },
        // { text: 'Electron', href: '#' },
        // { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'REGIONS',
      links: [
        { text: 'Montréal', href: '/regions/montreal' },
        { text: 'Rive-sud', href: '/regions/rive-sud' },
        { text: 'Rive-Nord', href: '/regions/rive-nord' },
        { text: 'Montérégie', href: '/regions/monteregie' }
      ],
    },
    {
      title: 'EXPERTISE',
      links: [
        { text: 'Condos', href: '/condos' },
        { text: 'Residential', href: '#' },
        { text: 'Commercial', href: '#' }
        // { text: 'Press', href: '#' },
        // { text: 'Inclusion', href: '#' },
        // { text: 'Social Impact', href: '#' },
        // { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/legal/terms') },
    { text: 'Privacy', href: getPermalink('/legal/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/kconstructionsinfo'  },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/kconstructionsinfo' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/kconstructions', target: '_blank' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    Réalisé par <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://elragency.com/"> ELR Agency</a> · All Rights Reserved.
    <br> RBQ: 5812-0130-01
  `,
};

