import Marquee from "./Marquee";

export default function Skills() {
  return (
    <section>
      <h2>SKILLS</h2>
      <Marquee
        shuffleItems={true}
        items={[
          'react', 'nextjs', 'javascript', 'typescript',
          'docker', 'redux', 'supabase',
          'react-query', 'nodejs', 'gulp', 'webpack', 'vitejs', 'handlebars',
          'stripe', 'openai', 'tailwindcss', 'mobx', 'mongodb', 'php',
          'jquery', 'couchdb', 'wordpress', 'microsoft-azure', 'aws', 'html-5', 'css-3',
          'bootstrap', 'git', 'npm', 'pnpm', 'sendgrid', 'sass',
          'sentry', 'express', 'bitbucket', 'jira', 'figma'
        ]} />
      <Marquee
        reverse={true}
        shuffleItems={true}
        items={[
          'react', 'nextjs', 'javascript', 'typescript',
          'docker', 'redux', 'supabase',
          'react-query', 'nodejs', 'gulp', 'webpack', 'vitejs', 'handlebars',
          'stripe', 'openai', 'tailwindcss', 'mobx', 'mongodb', 'php',
          'jquery', 'couchdb', 'wordpress', 'microsoft-azure', 'aws', 'html-5', 'css-3',
          'bootstrap', 'git', 'npm', 'pnpm', 'sendgrid', 'sass',
          'sentry', 'express', 'bitbucket', 'jira', 'figma'
        ]} />
    </section>
  )
}
