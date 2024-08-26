export type Achievement = {
  label: string
  description: string
  logo: string
  withProgress?: boolean
  maxProgress?: number
}

const achievements = [
  {
    label: 'Scroll Master',
    description: 'Scrolled to the bottom.',
    logo: 'string',
  },
  {
    label: 'Use Search',
    description: 'Typed something into searchbar.',
    logo: 'string',
  },
  {
    label: 'Project Shopper',
    description: 'Viewed every project.',
    logo: 'string',
    withProgress: true,
  },
  {
    label: 'Use Contact Form',
    description: 'Dropped me a message.',
    logo: 'string',
  },
  {
    label: 'Cheater',
    description: 'Tried Konami Code.',
    logo: 'string',
  },
  {
    label: 'Starfox',
    description: 'Did a barrel roll.',
    logo: 'string',
  },
  {
    label: 'Inspector Gadget',
    description: 'Used console function.',
    logo: 'string',
  },
  {
    label: 'Pixel Perfectionist',
    description: 'Zoomed In.',
    logo: 'string',
  },
  {
    label: 'Night Owl',
    description: 'Visited the site between midnight and 4 AM.',
    logo: 'string',
  },
  {
    label: 'Stay Awhile',
    description: 'Stayed on the Site for more than 10 minutes.',
    logo: 'string',
  },
  {
    label: 'Social Butterfly',
    description: 'Checked all Socials.',
    logo: 'string',
  },
  {
    label: 'Hexagon love',
    description: 'Hovered 200 Hexagons.',
    logo: 'string',
    withProgress: true,
    maxProgress: 200,
  },
  {
    label: 'Hexagon fanatic',
    description: 'Hovered 2000 Hexagons.',
    logo: 'string',
    withProgress: true,
    maxProgress: 2000,
  },
  {
    label: 'Code Connoisseur',
    description: 'Found a secret in the source code.',
    logo: 'string',
    withProgress: true,
    maxProgress: 2000,
  },
  {
    label: '404 Hunter',
    description: 'Found a 404 Page.',
    logo: 'string',
  },
  {
    label: 'Polymath',
    description: 'I am a number that is twice the sum of my digits. What number am I?',
    logo: 'string',
  },
  {
    label: 'Pixelhunter',
    description: 'Clicked a single pixel.',
    logo: 'string',
  },
  {
    label: 'Clicker',
    description: 'Clicked 20 times.',
    logo: 'string',
    withProgress: true,
    maxProgress: 20,
  },
  {
    label: 'Master Clicker',
    description: 'Clicked 500 times.',
    logo: 'string',
    withProgress: true,
    maxProgress: 500,
  },
  {
    label: 'Fullscreen Fanatic',
    description: 'Viewed the website in fullscreen mode.',
    logo: 'string',
  },
  {
    label: 'Secret Love',
    description: 'Found love.',
    logo: 'string',
  },
  {
    label: 'Santa Claus',
    description: 'Visited site on christmas.',
    logo: 'string',
  },
  {
    label: 'Happy Birthday',
    description: 'Visited site on my Birthday.',
    logo: 'string',
  }


]

export default achievements;
