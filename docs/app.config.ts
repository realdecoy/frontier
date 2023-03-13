export default defineAppConfig({
  github: {
    owner: 'realdecoy',
    repo: 'frontier',
    branch: 'main'
  },
  docus: {
    title: 'Frontier',
    description: '',
    image: '',
    url: 'https://realdecoy.com',
    socials: {
      github: 'realdecoy/frontier'
    },
    github: {
      dir: '',
      root: '',
      edit: true,
      releases: true,
      owner: 'realdecoy',
      repo: 'frontier',
      branch: 'main'
    },
    cover: {
      src: '/cover.jpg',
      alt: 'Tooling maded easy for developers'
    },
    aside: {
      level: 1
    },
    layout: {
      fluid: true
    },
    header: {
      logo: 'Logo',
    },
    footer: {
      iconLinks: [
        {
          label: 'Realdecoy',
          href: 'https://realdecoy.com',
          icon: 'IconNuxt'
        }
      ]
    }
  }
})
