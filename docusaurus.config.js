// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
const { sortSidebarItems } = require("./sitebar-semver-sort");

const locales = ["en", "zh", "es", "fr", "de"];
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Unraid Docs",
  tagline: "Documentation for Unraid",
  favicon: "img/favicon.svg", // https://dev.to/masakudamatsu/favicon-nightmare-how-to-maintain-sanity-3al7

  // Set the production url of your site here
  url: "https://docs.unraid.net/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "unraid", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/unraid/docs/tree/main/",
          editLocalizedFiles: true,
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return sortSidebarItems(sidebarItems);
          },
        },
        /* blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/unraid/docs/tree/main/",
        }, */

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-CZENQ1ZPEH",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "JUYLFQHE7W",
        apiKey: "47111d6564a2e69ee21a1d3d2f786ef3",
        indexName: "unraid",
        contextualSearch: true,
        searchPagePath: 'search',
      },
      colorMode: { defaultMode: "dark", respectPrefersColorScheme: true },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      image: "img/meta-unraid.png",
      metadata: [
        {
          name: "theme-color",
          content: "#242526",
          media: "(prefers-color-scheme: dark)",
        }, // matches docusaurus theme rather than unraid specific color
        {
          name: "theme-color",
          content: "#ffffff",
          media: "(prefers-color-scheme: light)",
        },
        { name: "color-scheme", content: "dark light" },
        { name: "keywords", content: "Unraid, server, storage, NAS, Docker, virtualization, array, parity, data protection, file sharing, plugins, management, GUI, disk management, caching, SSD, disk encryption, security, RAID, network configuration, backups, media server, transcoding, monitoring, VMs, GPU passthrough, hardware compatibility" },
      ],
      navbar: {
        title: "Unraid Docs",
        logo: {
          alt: "My Site Logo",
          src: "img/un-mark-gradient.svg",
          style: {
            width: "30px",
          },
        },
        items: [
          {
            items: [
              {
                href: "https://unraid.net",
                label: "Unraid Home",
              },
              {
                href: "https://forums.unraid.net",
                label: "Forums",
              },
              { label: "Docs Github", href: "https://github.com/unraid/docs" },
            ],
            position: "right",
            label: "More",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Contribute on Github",
                href: "https://github.com/unraid/docs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Forums",
                href: "https://forums.unraid.net",
              },
              {
                label: "Discord",
                href: "https://discord.unraid.net/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Unraid Home",
                href: "https://unraid.net",
              },
              {
                label: "Unraid Connect",
                href: "https://connect.myunraid.net",
              },
              {
                label: "Newsletter",
                href: "https://newsletter.unraid.net",
              },
              {
                label: "Blog",
                href: "https://unraid.net/blog",
              },
            ],
          },
        ],
        logo: {
          alt: "Unraid Logo",
          src: "img/un-mark-gradient.svg",
          width: 100,
        },
        copyright: `<small>Copyright &copy; 2005-${new Date().getFullYear()} Lime Technology, Inc.<br>Unraid&reg; is a registered trademark of Lime Technology, Inc.</small>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['diff', 'json', 'bash'],
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
    }),
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // reminder: these have no effect in dev mode
          // see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects
          // file renamed in https://github.com/unraid/docs/commit/570a7e629bef1577d43e188495cb71916e7de360
          {
            to: "/legacy/FAQ/shrink-array/",
            from: "/legacy/FAQ/Shrink_array/",
          },
          // move Getting Started pages
          {
            to: "/unraid-os/getting-started/",
            from: "/unraid-os/manual/getting-started/",
          },
          {
            to: "/unraid-os/getting-started/manual-install-method/",
            from: "/unraid-os/manual/getting-started/manual-install-method/",
          },
          // redirect from 6.12.7 to 6.12.8
          {
            to: "/unraid-os/release-notes/6.12.8/",
            from: "/unraid-os/release-notes/6.12.7/",
          },
          // redirect from unraid-account faq page to the top level account page
          {
            to: "/account/",
            from: "/unraid-os/faq/unraid-account/",
          },
          // Overview redirect
          {
            to: "/unraid-os/overview/what-is-unraid/",
            from: "/unraid-os/manual/what-is-unraid/",
          },
          // Troubleshooting section redirect
          // skip, lost-root-password takes precedence
          /*
          {
            to: "/unraid-os/troubleshooting/",
            from: "/unraid-os/manual/troubleshooting/",
          },
          */
          // reset password redirect
          {
            to: "/unraid-os/manual/users/reset-password/",
            from: "/unraid-os/manual/troubleshooting/",
            // actually from: /unraid-os/manual/troubleshooting#lost-root-password
          },
          // VM reorg
          {
            to: "/unraid-os/manual/vm/vm-management/",
            from: "/unraid-os/manual/vm-management/",
          },
          // go links used by the OS
          {
            to: "/category/manual/",
            from: "/go/manual",
          },
          {
            to: "/unraid-os/manual/users/reset-password/",
            from: "/go/lost-root-password",
          },
          {
            to: "/unraid-os/manual/changing-the-flash-device/",
            from: "/go/changing-the-flash-device",
          },
          {
            to: "/unraid-os/manual/security/vpn/#configuring-vpn-tunneled-access-for-system",
            from: "/go/configuring-vpn-tunneled-access-for-system",
          },
          {
            to: "/unraid-os/manual/vm/vm-management/#determining-hvmiommu-hardware-support",
            from: "/go/determining-hvmiommu-hardware-support",
          },
          {
            to: "/unraid-os/manual/vm/vm-management/#system-preparation",
            from: "/go/vm-system-preparation",
          },
          // go links used for Forum Word Expansions
          {
            to: "/unraid-os/manual/storage-management/#checking-a-file-system",
            from: "/go/check-filesystem",
          },
          {
            to: "/unraid-os/troubleshooting/diagnostics-information/",
            from: "/go/diagnostics",
          },
          {
            to: "/unraid-os/manual/shares/disk-shares/",
            from: "/go/disk-shares",
          },
          {
            to: "/unraid-os/manual/storage-management#parity-swap",
            from: "/go/parity-swap",
          },
          {
            to: "/legacy/FAQ/shrink-array/",
            from: "/go/shrink-array",
          },
          {
            to: "/unraid-os/manual/shares/user-shares/#split-level",
            from: "/go/split-level",
          },
          {
            to: "/unraid-os/troubleshooting/diagnostics-information/#persistent-logs-syslog-server",
            from: "/go/syslog-server",
          },
          {
            to: "/unraid-os/manual/shares/user-shares/",
            from: "/go/user-shares",
          },
        ],
      },
    ],
  ],
};

module.exports = config;
