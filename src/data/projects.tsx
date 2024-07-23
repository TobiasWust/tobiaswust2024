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
  screenshot: 'https://picsum.photos/500/300',
  year: 2022,
  description: 'As the Lead Developer at Summarizeit, a SaaS company using AI to create summaries from videos, I was responsible for the development and implementation of various features including user management, payment processing, and the product itself. Utilizing modern technologies, I successfully managed and overcame various technical challenges to deliver a high-quality product.',
  skills: ['react', 'nextjs', 'react-query', 'tailwindcss', 'nodejs', 'supabase', 'openai', 'sendgrid', 'stripe'],
  url: 'https://summarizeit.io/',
},
{
  label: 'GamesWeAllOwn',
  id: 'gamesweallown',
  screenshot: 'https://picsum.photos/500/300',
  year: 2023,
  description: 'very cool website',
  skills: ['react', 'nextjs', 'react-query', 'tailwindcss'],
  github: 'https://github.com/TobiasWust/sharedgames',
  url: 'https://gamesweallown.com/'
},
{
  label: 'tobiaswust.de2024',
  id: 'tobiaswust2024',
  screenshot: 'https://picsum.photos/500/300',
  year: 2023,
  description: 'very cool website',
  skills: ['react', 'nextjs', 'react-query', 'tailwindcss', 'react', 'nextjs', 'react-query', 'tailwindcss'],
  github: 'https://github.com/TobiasWust/sharedgames',
  url: 'https://gamesweallown.com/'
},
{
  label: 'tobiaswust.de2024',
  id: 'tobiaswust2024',
  screenshot: 'https://picsum.photos/500/300',
  year: 2023,
  description: 'very cool website',
  skills: ['react', 'nextjs', 'react-query', 'tailwindcss', 'react', 'nextjs', 'react-query', 'tailwindcss'],
  github: 'https://github.com/TobiasWust/sharedgames',
  url: 'https://gamesweallown.com/'
},
{
  label: 'tobiaswust.de2024',
  id: 'tobiaswust2024',
  screenshot: 'https://picsum.photos/500/300',
  year: 2023,
  description: 'very cool website',
  skills: ['react'],
  github: 'https://github.com/TobiasWust/sharedgames',
  url: 'https://gamesweallown.com/'
}

];

export default projects;
