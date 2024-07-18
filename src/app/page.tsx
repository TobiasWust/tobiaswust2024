import Image from "next/image";
import styles from "./page.module.scss";
import Marquee from "../components/marquee";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <section className={styles.about}>
        <h2>ABOUT</h2>
        <p>here will be something about me</p>
      </section>

      <section className={styles.skills}>
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

      <section className={styles.projects}>
        <h2>Projects</h2>
        here will be a list of projects with filters by stack
      </section>
    </main>
  );
}
