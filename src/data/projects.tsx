import { Skills } from "./skills"

export type Project = {
  label: string
  id: string
  year: number
  screenshot?: string
  description: string
  skills: string[]
  github?: string
  url?: string
}

export type Projects = Project[]

const projects: Projects = [{
  label: 'SummarizeIt',
  id: 'summarizeit',
  screenshot: 'tobiaswust.de/summarizeIt',
  year: 2022,
  description: 'As the Lead Developer at Summarizeit, a SaaS company using AI to create summaries from videos, I was responsible for the development and implementation of various features including user management, payment processing, and the product itself. Utilizing modern technologies, I successfully managed and overcame various technical challenges to deliver a high-quality product.',
  skills: ['react', 'nextjs', 'react-query', 'tailwindcss', 'nodejs', 'supabase', 'openai', 'sendgrid', 'stripe', 'typescript'],
  url: 'https://summarizeit.io/',
},
{
  label: 'GamesWeAllOwn',
  id: 'gamesweallown',
  screenshot: 'tobiaswust.de/gamesweallown',
  year: 2023,
  description: 'gamesweallown.com is a website where you can see which games you and your friends own on steam. The website is built with Next.js and uses the Steam API to get the games.',
  skills: ['react', 'nextjs', 'react-query', 'tailwindcss'],
  github: 'https://github.com/TobiasWust/sharedgames',
  url: 'https://gamesweallown.com/'
},
{
  label: 'Accessible Search for government website',
  id: 'ktzhStats',
  screenshot: 'tobiaswust.de/ktzhStats',
  year: 2023,
  description: 'I built the statistics search for the Canton of Zurich. The search is accessible and can be used by everyone. I pixel-perfectly implemented the design and made sure that the search is fast and easy to use.',
  skills: ['handlebars', 'css-3', 'html-5', 'gulp', 'webpack', 'typescript', 'figma'],
  url: 'https://www.zh.ch/de/bildung/bildungssystem/zahlen-fakten.html'
},
{
  label: 'Divery.io',
  id: 'divery',
  screenshot: 'tobiaswust.de/divery',
  year: 2020,
  description: 'When I joined the Divery, the platform was built using jQuery, and as the sole developer on the team, I continued to work with jQuery for a while. Later, as the team grew and we added more developers, we migrated the platform to React.',
  skills: ['jquery', 'react', 'couchdb', 'docker'],
  url: 'https://divery.io/'
},
{
  label: 'hitcap',
  id: 'hitcap',
  screenshot: 'tobiaswust.de/hitcap',
  year: 2022,
  description: 'I helped to build a social media platform for gamers and a coaching platform for aspiring professionals. Both projects required a high level of skill and attention to detail, and I was able to successfully bring the designers vision to life using React and other technologies.',
  skills: ['react', 'typescript', 'docker', 'redux', 'nodejs', 'mongodb', 'mobx'],
},
{
  label: 'Horrorgame Mother',
  id: 'mother',
  screenshot: 'tobiaswust.de/mother',
  year: 2021,
  description: 'Mother is a horror game that I helped build in Unity. The game is a first-person horror game where you find yourself in a haunted house. It was a contribution to the Manasoup Game Jam where we formed a team and built the game within one weekend.',
  skills: ['unity', 'c-sharp'],
  url: 'https://chinyone.itch.io/motherhouseofhorror'
},
];

export default projects;
