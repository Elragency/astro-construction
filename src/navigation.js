import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: getPermalink('/'),
    },
    {
      text: 'À Propos',
      href: getPermalink('/kconstructions'),
    },
    
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
        {
          text: 'Service Commercial',
          href: getPermalink('/commercial'),
        },
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
  actions: [{ text: 'Appeler Immédiatement', href: 'tel:4388625985', target: '' }],
};

export const footerData = {
  links: [
    {
      title: 'À Propos',
      links: [
        { text: 'K-CONSTRUCTIONS', href: '/kconstructions' },
        { text: 'Mission', href: '/kconstructions' },
        { text: 'Team', href: '/kconstructions' },
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
        { text: 'Commerciale', href: '/commercial' }
        // { text: 'Press', href: '#' },
        // { text: 'Inclusion', href: '#' },
        // { text: 'Social Impact', href: '#' },
        // { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Termes', href: getPermalink('/legal/terms') },
    { text: 'Politique de confidentialité', href: getPermalink('/legal/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', target: '_blank', href: 'https://www.instagram.com/kconstructionsinfo'  },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/kconstructionsinfo', target: '_blank' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/kconstructions', target: '_blank' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    Réalisé par <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://elragency.com/"> Agence ELR</a> · Tous droits réservés.
    <br> RBQ: 5812-0130-01
  `,
};
