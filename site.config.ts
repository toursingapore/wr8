import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '9cb8229e7d3d4021a13704bf69ccf61f',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'wr8 Demo',
  domain: 'demo.wr8.in',
  author: 'Mighil',
  seotitle: 'Demo Site Created with wr8',

  // open graph metadata (optional)
  description: 'This is a demo website created with wr8.',

  // social usernames (optional)
  twitter: 'jotzilla',
  github: 'verfasor',
  linkedin: 'mighil',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://wr8.in/page-icon.png',
  defaultPageCover: 'https://wr8.in/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [   
    {
      title: 'Blog',
      pageId: '1297c780227f4ee3b1f97b27fdfdf06c'
    },    
    {
      title: 'About',
      pageId: 'ccee8c56edd1416388ff2797bdbfe0a0'
    },
    {
      title: 'Contact',
      pageId: '4ef3ea8602b34383bdf5477a9c9899d9'
    }
  ]
})
