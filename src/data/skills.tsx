export type Skill = {
  label: string
  id: string
}

export type Skills = Skill[]

const skills: Skills = [
  { id: 'react', label: 'React' },
  { id: 'nextjs', label: 'Next.js' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'docker', label: 'Docker' },
  { id: 'redux', label: 'Redux' },
  { id: 'supabase', label: 'supabase' },
  { id: 'react-query', label: 'TanStack Query' },
  { id: 'nodejs', label: 'Node.js' },
  { id: 'gulp', label: 'gulp.js' },
  { id: 'webpack', label: 'webpack' },
  { id: 'vitejs', label: 'Vite' },
  { id: 'handlebars', label: 'Handlebars' },
  { id: 'stripe', label: 'Stripe' },
  { id: 'openai', label: 'OpenAi' },
  { id: 'tailwindcss', label: 'Tailwind CSS' },
  { id: 'mobx', label: 'MobX' },
  { id: 'mongodb', label: 'MongoDB' },
  { id: 'php', label: 'php' },
  { id: 'jquery', label: 'jQuery' },
  { id: 'couchdb', label: 'CouchDB' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'microsoft-azure', label: 'Azure' },
  { id: 'aws', label: 'aws' },
  { id: 'html-5', label: 'HTML' },
  { id: 'css-3', label: 'CSS' },
  { id: 'unity', label: 'unity' },
  { id: 'c-sharp', label: 'c-sharp' },
  { id: 'bootstrap', label: 'Bootstrap' },
  { id: 'git', label: 'Git' },
  { id: 'npm', label: 'npm' },
  { id: 'pnpm', label: 'pnpm' },
  { id: 'sendgrid', label: 'SendGrid' },
  { id: 'sass', label: 'Sass' },
  { id: 'sentry', label: 'Sentry' },
  { id: 'express', label: 'Express' },
  { id: 'bitbucket', label: 'Bitbucket' },
  { id: 'jira', label: 'Jira' },
  { id: 'figma', label: 'Figma' }
];

export default skills;
