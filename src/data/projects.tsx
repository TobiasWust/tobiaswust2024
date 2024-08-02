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
  description: 'I built the statistics search for the cantone of Zurich. The search is accessible and can be used by everyone. I pixel-perfectly implemented the design and made sure that the search is fast and easy to use.',
  skills: ['handlebars', 'css-3', 'html-5', 'gulp', 'webpack', 'typescript', 'figma'],
  url: 'https://www.zh.ch/de/bildung/bildungssystem/zahlen-fakten.html'
},
];

export default projects;
