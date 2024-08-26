export type Achievement = {
  label: string
  id: string
  description: string
  logo: string
  withProgress?: boolean
  maxProgress?: number
}

const achievements = [
  {
    label: 'Scroll Master',
    id: 'scrollMaster',
    description: 'Scrolled to the bottom.',
    logo: 'string',
  },
  {
    label: 'Use Search',
    id: 'useSearch',
    description: 'Typed something into searchbar.',
    logo: 'string',
  },
  {
    label: 'Project Shopper',
    id: 'projectShopper',
    description: 'Viewed every project.',
    logo: 'string',
    withProgress: true,
  },
  {
    label: 'Use Contact Form',
    id: 'useContactForm',
    description: 'Dropped me a message.',
    logo: 'string',
  },
  {
    label: 'Cheater',
    id: 'cheater',
    description: 'Tried Konami Code.',
    logo: 'string',
  },
  {
    label: 'Starfox',
    id: 'starfox',
    description: 'Did a barrel roll.',
    logo: 'string',
  },
  {
    label: 'Inspector Gadget',
    id: 'inspectorGadget',
    description: 'Used console function.',
    logo: 'string',
  },
  {
    label: 'Pixel Perfectionist',
    id: 'pixelPerfectionist',
    description: 'Zoomed In.',
    logo: 'string',
  },
  {
    label: 'Night Owl',
    id: 'nightOwl',
    description: 'Visited the site between midnight and 4 AM.',
    logo: 'string',
  },
  {
    label: 'Stay Awhile',
    id: 'stayAwhile',
    description: 'Stayed on the Site for more than 10 minutes.',
    logo: 'string',
  },
  {
    label: 'Social Butterfly',
    id: 'socialButterfly',
    description: 'Checked all Socials.',
    logo: 'string',
  },
  {
    label: 'Hexagon love',
    id: 'hexagonLove',
    description: 'Hovered 200 Hexagons.',
    logo: 'string',
    withProgress: true,
    maxProgress: 200,
  },
  {
    label: 'Hexagon fanatic',
    id: 'hexagonFanatic',
    description: 'Hovered 2000 Hexagons.',
    logo: 'string',
    withProgress: true,
    maxProgress: 2000,
  },
  {
    label: 'Code Connoisseur',
    id: 'codeConnoisseur',
    description: 'Found a secret in the source code.',
    logo: 'string',
    withProgress: true,
    maxProgress: 2000,
  },
  {
    label: '404 Hunter',
    id: '404Hunter',
    description: 'Found a 404 Page.',
    logo: 'string',
  },
  {
    label: 'Polymath',
    id: 'polymath',
    description: 'I am a number that is twice the sum of my digits. What number am I?',
    logo: 'string',
  },
  {
    label: 'Pixelhunter',
    id: 'pixelhunter',
    description: 'Clicked a single pixel.',
    logo: 'string',
  },
  {
    label: 'Clicker',
    id: 'clicker',
    description: 'Clicked 20 times.',
    logo: 'string',
    withProgress: true,
    maxProgress: 20,
  },
  {
    label: 'Master Clicker',
    id: 'masterClicker',
    description: 'Clicked 500 times.',
    logo: 'string',
    withProgress: true,
    maxProgress: 500,
  },
  {
    label: 'Fullscreen Fanatic',
    id: 'fullscreenFanatic',
    description: 'Viewed the website in fullscreen mode.',
    logo: 'string',
  },
  {
    label: 'Secret Love',
    id: 'secretLove',
    description: 'Found love.',
    logo: 'string',
  },
  {
    label: 'Santa Claus',
    id: 'santaClaus',
    description: 'Visited site on christmas.',
    logo: 'string',
  },
  {
    label: 'Happy Birthday',
    id: 'happyBirthday',
    description: 'Visited site on my Birthday.',
    logo: 'string',
  }


]

export default achievements;
