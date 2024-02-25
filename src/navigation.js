import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: getPermalink('/'),
    },
    {
      text: 'À Propos',
      href: getPermalink('/propos'),
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
      href: getPermalink('/services'),
      links: [
        {
          text: 'Nos Services',
          href: getPermalink('/services/services'),
        },
        {
          text: 'Rénovations intérieures',
          href: getPermalink('/services/renos-int'),
        },
        {
          text: 'Rénovations Extérieures',
          href: getPermalink('/services/renos-ext'),
        },
        {
          text: 'Services Pour Condos',
          href: getPermalink('/condos'),
        },
        // {
        //   text: 'Coming Soon or Pre-Launch',
        //   href: getPermalink('/services/pre-launch'),
        // },
        // {
        //   text: 'Subscription',
        //   href: getPermalink('/services/subscription'),
        // },
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
      href: getPermalink('/contact'),
    },
    {
      text: 'EN',
      href: getPermalink('/en/home'),
    },
  ],
  actions: [{ text: 'Faisons Affaire!', href: '/contact', target: '' }],
};

export const footerData = {
  links: [
    {
      title: 'À Propos',
      links: [
        { text: 'K-CONSTRUCTIONS', href: 'propos' },
        { text: 'Mission', href: '#' },
        { text: 'Team', href: '#' },
        // { text: 'Enterprise', href: '#' },
        // { text: 'Customer stories', href: '#' },
        // { text: 'Pricing', href: '#' },
        // { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Intérieur', href: '/services/renos-int' },
        { text: 'Extérieur', href: '/services/renos-ext' },
        { text: 'Services', href: '/services/services' },
        // { text: 'Electron', href: '#' },
        // { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'RÉGIONS',
      links: [
        { text: 'Montréal', href: '/regions/montreal' },
        { text: 'Rive-sud', href: '/regions/rive-sud' },
        { text: 'Rive-Nord', href: '/regions/rive-nord' },
        { text: 'Montérégie', href: '/regions/monteregie' }
        // { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'EXPERTISE',
      links: [
        { text: 'Condos', href: '/condos' },
        { text: 'Résidentielle', href: '#' },
        { text: 'Commerciale', href: '#' }
        // { text: 'Press', href: '#' },
        // { text: 'Inclusion', href: '#' },
        // { text: 'Social Impact', href: '#' },
        // { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Termes', href: getPermalink('/terms') },
    { text: 'Politique de confidentialité', href: getPermalink('legal/privacy') },
    { text: 'RBQ: 5758-9996-01'}
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/kconstructionsinfo'  },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/kconstructionsinfo' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    Réalisé par <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://elragency.com/"> Agence ELR</a> · Tous droits réservés.
  `,
};
