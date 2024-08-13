import { Skills } from "./skills"

export type Project = {
  label: string
  id: string
  year: number
  screenshot?: string
  description: string
  shortDescription: string
  skills: string[]
  github?: string
  url?: string
}

export type Projects = Project[]

const projects: Projects = [
  {
    label: 'Wust.dev 2024',
    id: 'wustdev2024',
    screenshot: 'tobiaswust.de/summarizeIt',
    year: 2024,
    shortDescription: 'Portfolio website',
    description: 'After almost ten years with my old website I wanted to create something fast and modern. This is what I came up with.',
    skills: ['react', 'nextjs', 'nodejs', 'typescript'],
    url: 'https://summarizeit.io/',
  },
  {
    label: 'SummarizeIt.io',
    id: 'summarizeit',
    screenshot: 'tobiaswust.de/summarizeIt',
    year: 2022,
    shortDescription: 'AI powered video summarization',
    description: 'As the Lead Developer at Summarizeit, a SaaS company using AI to create summaries from videos, I was responsible for the development and implementation features like user management, payment processing, and the product itself.',
    skills: ['react', 'nextjs', 'react-query', 'tailwindcss', 'nodejs', 'supabase', 'openai', 'sendgrid', 'stripe', 'typescript'],
    url: 'https://summarizeit.io/',
  },
  {
    label: 'GamesWeAllOwn',
    id: 'gamesweallown',
    screenshot: 'tobiaswust.de/gamesweallown',
    year: 2023,
    shortDescription: 'Steam API integration',
    description: 'gamesweallown.com is a website where you can see which games you and your friends own on steam. The website is built with Next.js and uses the Steam API to get the games.',
    skills: ['react', 'nextjs', 'react-query', 'tailwindcss'],
    github: 'https://github.com/TobiasWust/sharedgames',
    url: 'https://gamesweallown.com/'
  },
  {
    label: 'Governmental Statistics',
    id: 'ktzhStats',
    screenshot: 'tobiaswust.de/ktzhStats',
    year: 2023,
    shortDescription: 'Accessible Search',
    description: 'I built the statistics search for the Canton of Zurich. The search is accessible and can be used by everyone. I pixel-perfectly implemented the design and made sure that the search is fast and easy to use.',
    skills: ['handlebars', 'css-3', 'html-5', 'gulp', 'webpack', 'typescript', 'figma'],
    url: 'https://www.zh.ch/de/bildung/bildungssystem/zahlen-fakten.html'
  },
  {
    label: 'Divery.io',
    id: 'divery',
    screenshot: 'tobiaswust.de/divery',
    year: 2020,
    shortDescription: 'Divecenter ERP',
    description: 'When I joined the Divery, the platform was built using jQuery, and as the sole developer on the team, I continued to work with jQuery for a while. Later, as the team grew and we added more developers, we migrated the platform to React.',
    skills: ['jquery', 'react', 'couchdb', 'docker'],
    url: 'https://divery.io/'
  },
  {
    label: 'hitcap.gg',
    id: 'hitcap',
    screenshot: 'tobiaswust.de/hitcap',
    year: 2022,
    shortDescription: 'Social Media Platform',
    description: 'I helped to build a social media platform for gamers and a coaching platform for aspiring professionals. Both projects required a high level of skill and attention to detail, and I was able to successfully bring the designers vision to life using React and other technologies.',
    skills: ['react', 'typescript', 'docker', 'redux', 'nodejs', 'mongodb', 'mobx'],
  },
  {
    label: 'Mother',
    id: 'mother',
    screenshot: 'tobiaswust.de/mother',
    year: 2021,
    shortDescription: 'Horror Game',
    description: 'Mother is a horror game that I helped build in Unity. The game is a first-person horror game where you find yourself in a haunted house. It was a contribution to the Manasoup Game Jam where we formed a team and built the game within one weekend.',
    skills: ['unity', 'c-sharp'],
    url: 'https://chinyone.itch.io/motherhouseofhorror'
  },
  {
    label: 'Funkhelfer.de',
    id: 'funkhelfer',
    screenshot: 'tobiaswust.de/funkhelfer',
    year: 2020,
    shortDescription: 'Radio Frequency Finder',
    description: 'funkhelfer.de is a webapp to find the right frequency for your radio. It was built with plain HTML, CSS, and JavaScript. The website is responsive and works on all devices. It used to be a cordova app, but now it is a pure webapp.',
    skills: ['html-5', 'css-3', 'javascript'],
    url: 'https://funkhelfer.de/',
    github: 'https://github.com/TobiasWust/Funkhelfer',
  },
  {
    label: 'Serwema Product Search',
    id: 'serwema',
    screenshot: 'tobiaswust.de/serwema',
    year: 2020,
    shortDescription: 'Custom Wordpress Plugin',
    description: 'I helped build a custom wordpress plugin, that allows simple administration of available products for my client and a simple search for their customers.',
    skills: ['html-5', 'css-3', 'javascript', 'react', 'jquery', 'wordpress'],
    url: 'https://serwema.de/maschinen_kategorien/abwaelzfraesen-gebrauchte-maschinen-ueberholt/',
  },
  {
    label: 'Game Snowbody',
    id: 'snowbody',
    screenshot: 'tobiaswust.de/snowbody',
    year: 2020,
    shortDescription: '2D Shooter',
    description: "Snowbody is a game that I built in Unity. The game is a 2D shooter where you play as a snowman and have to defend yourself against evil Bunnys.",
    skills: ['unity', 'c-sharp'],
    url: 'https://wust.itch.io/snowbody',
    github: 'https://github.com/TobiasWust/snowbodygame',
  },
];

export default projects;
