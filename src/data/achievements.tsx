import projects from "./projects"

export type Achievement = {
  label: string
  id: string
  description: string
  withProgress?: boolean
  maxProgress?: number
  getMaxProgress?: () => void
  getProgress?: () => void
  counterName?: string
  secret?: boolean
}

const achievements: Achievement[] = [
  {
    label: 'Scroll Master',
    id: 'scrollMaster',
    description: 'Scrolled to the bottom.',
    secret: true,
  },
  {
    label: 'Project Shopper',
    id: 'projectShopper',
    description: 'Viewed every project.',
    withProgress: true,
    maxProgress: projects.length,
    counterName: 'projectsOpened'

  },
  {
    label: 'Use Contact Form',
    id: 'useContactForm',
    description: 'Dropped me a message.',
    secret: true,
  },
  {
    label: 'Starfox',
    id: 'starfox',
    description: 'Did a barrel roll.',
  },
  {
    label: 'Inspector Gadget',
    id: 'inspectorGadget',
    description: 'Used console function.',
  },
  {
    label: 'Night Owl',
    id: 'nightOwl',
    description: 'Visited the site between midnight and 4 AM.',
  },
  {
    label: 'Stay Awhile',
    id: 'stayAwhile',
    description: 'Stayed on the Site for more than 10 minutes.',
  },
  {
    label: 'Social Butterfly',
    id: 'socialButterfly',
    description: 'Checked all Socials.',
    secret: true,
    maxProgress: 3,
    withProgress: true,
    counterName: 'socialsClicked'
  },
  {
    label: 'Hexagon Hunter',
    id: 'hexagonHunter',
    description: 'Hovered 500 Hexagons.',
    withProgress: true,
    maxProgress: 500,
    counterName: 'hexagonsHovered'
  },
  {
    label: 'Hexagon Hero',
    id: 'hexagonHero',
    description: 'Hovered 5000 Hexagons.',
    secret: true,
    withProgress: true,
    maxProgress: 5000,
    counterName: 'hexagonsHovered'
  },
  // {
  //   label: '404 Hunter',
  //   id: '404Hunter',
  //   description: 'Found a 404 Page.',
  //   logo: 'string',
  //   secret: true,
  // },
  {
    label: 'Polymath',
    id: 'polymath',
    description: 'I am a number that is twice the sum of my digits. What number am I?',
  },
  {
    label: 'Cheater',
    id: 'cheater',
    description: 'Entered Konami Code.',
    secret: true
  },
  {
    label: 'The Orange Path',
    id: 'tunic',
    description: 'Followed the orange path.',
  },
  {
    label: 'Morserunner',
    id: 'morserunner',
    description: 'Played Morserunner Lvl 7.',
  },
  {
    label: 'Fullscreen Fanatic',
    id: 'fullscreenFanatic',
    description: 'Viewed the website in fullscreen mode.',
    secret: true,
  },
  {
    label: 'Secret Love',
    id: 'secretLove',
    description: 'Found love.',
  },
  {
    label: 'Santa Claus',
    id: 'santaClaus',
    description: 'Visited site on christmas.',
  },
  {
    label: 'Happy Birthday',
    id: 'happyBirthday',
    description: 'Visited site on my Birthday.',
    secret: true,
  },
  {
    label: 'Fanboy',
    id: 'fanboy',
    description: 'Visited site 5 times.',
    withProgress: true,
    maxProgress: 5,
    counterName: 'visits'
  },
  {
    label: 'Stalker',
    id: 'stalker',
    description: 'Visited site 30 times.',
    withProgress: true,
    maxProgress: 30,
    counterName: 'visits'
  },
  {
    label: 'Networker',
    id: 'networker',
    description: 'Found a codeword on LinkedIn.',
  },
  {
    label: 'To reset or not to reset',
    id: 'reset',
    description: 'Used reset button but said no.',
    secret: true
  },
]

export default achievements;
