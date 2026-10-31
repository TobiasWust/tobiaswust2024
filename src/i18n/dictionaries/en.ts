// All site copy in English. de.ts must have exactly the same shape (TypeScript enforces it).
// *word* marks a highlighted word, rendered by `rich()` in src/i18n/rich.tsx.

type Texts = { label: string; description: string };
type ProjectTexts = { shortDescription: string; description: string; result?: string };

const en = {
  meta: {
    title: 'Freelance Fullstack Developer - Tobias Wust',
    description: 'Senior fullstack engineer from Germany with 15+ years of experience. React, Node.js and AI-assisted development; from business goal to shipped product.',
    jobTitle: 'Freelance Fullstack Developer',
    ogTagline: 'Freelance Fullstack Developer',
    ogStack: 'React · TypeScript · Node.js · 15+ years',
    ogLocale: 'en_US',
  },
  nav: {
    home: 'Tobias Wust - home',
    services: 'Services',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    hireMe: 'Hire me',
    switchLanguageLabel: 'Diese Seite auf Deutsch',
  },
  hero: {
    availability: 'Currently accepting new projects',
    eyebrow: 'Senior Fullstack Engineer',
    tagline: 'AI writes code. I make sure it\'s the right code: I turn your business goals into products that ship, faster with AI and with the judgment AI doesn\'t have.',
    adventureBefore: 'Fullstack expertise with a passion for ',
    adventureWord: 'adventure',
    adventureAfter: '.',
    seeMyWork: 'See my work',
    stats: {
      years: 'years of experience',
      projects: 'shipped projects',
      remote: 'Remote',
      remoteFrom: 'from Germany',
    },
    paraglider: 'A paraglider catching a thermal',
  },
  services: {
    heading: 'What I can do for you',
    relatedProjects: 'See related projects →',
    talk: 'Let\'s talk about your project →',
    items: [
      {
        title: 'Product & Technical Direction',
        text: 'I start with your business, not the code. I turn vague goals into a clear plan, make the architecture calls and direct the work, whether people or AI write the code.',
      },
      {
        title: 'AI-Powered Features',
        text: 'LLM features that solve real problems, like summaries, search, data extraction and assistants, built with costs, privacy and reliability in mind.',
      },
      {
        title: 'Fullstack Products',
        text: 'From database to deployment: Node.js APIs, Supabase and Next.js apps that are built to grow with your business.',
      },
      {
        title: 'Frontend Engineering',
        text: 'Fast, accessible React & TypeScript interfaces that turn complex workflows into something people enjoy using.',
      },
    ],
  },
  projects: {
    heading: 'Built with Passion',
    intro: 'Client work and side projects I built. Click one for details.',
    searchLabel: 'Search projects',
    searchPlaceholder: 'Search for a project or skill...',
    noResult: 'No projects found. Maybe I should build that one?',
    showMore: 'Show more',
    showLess: 'Show less',
    client: 'Client work',
    side: 'Side project',
    result: 'Result:',
    visitSite: 'Visit Site',
    viewOnGithub: 'View on GitHub',
    close: 'Close project',
  },
  why: {
    heading: 'Why senior experience matters more with AI',
    intro: 'AI made writing code cheap. Knowing *what* to build, and whether it\'s *right*, became more valuable than ever.',
    reasons: [
      {
        title: 'Directing the work',
        text: 'I break your goals down into clear specs and steer developers and AI tools toward them, so effort goes into what actually matters.',
      },
      {
        title: 'Understanding your business',
        text: '15+ years across renewable energy, the public sector and SaaS taught me to turn complex, even regulatory, requirements into software that works.',
      },
      {
        title: 'Quality you can trust',
        text: 'Every line, whether written by me or by AI, is reviewed, tested and secure before it reaches your users.',
      },
    ],
    practiceHeading: 'In practice at node.energy',
    practiceText: 'I build React interfaces for a renewable energy platform and use Claude Code, GitHub Copilot and AI chat assistants every day.',
    aiDoesHeading: 'AI speeds up',
    aiDoes: ['Features and UI', 'Tests and refactoring', 'Reviews and debugging'],
    iDoHeading: 'Stays my job',
    iDo: ['Understanding the requirements', 'Structuring the code', 'Reviewing every change'],
  },
  toolbox: {
    heading: 'Toolbox',
    intro: 'The tools I work with today. Click one to see the projects I built with it.',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend & Data',
      ai: 'AI',
      tooling: 'Cloud & Tooling',
    },
    project: 'project',
    projectsPlural: 'projects',
    daily: 'daily',
    show: 'show',
    also: 'Also experienced with:',
  },
  about: {
    heading: 'My Story',
    greeting: 'Hi, I\'m Tobias!',
    paragraphs: [
      'I\'ve been passionate about software development since I was 11, and I\'ve kept honing my skills and staying at the cutting edge of technology ever since. After earning a Bachelor of Science in Business Information Systems, I started my career in the public sector, where I spent four valuable years working with SAP/ABAP.',
      'Today, I\'m a *freelance developer* specializing in *web development*, particularly with *React, TypeScript, and Node.js*. I\'ve worked on a wide range of projects, from small business websites to large-scale applications, and I\'m always eager to take on new challenges and learn new technologies.',
      'Keeping up with the latest technologies has always been part of who I am, and today that means *AI*. I use it every day to work faster, and I\'ve built AI-powered products myself. But I\'ve learned that the real value lies in understanding your project and making the right calls, so you get high-quality, modern solutions tailored to your needs.',
      'Beyond coding, I\'m also a *professional paragliding pilot*, and I bring the same passion and precision to the skies as I do to my work.',
      'If you\'re looking for a dedicated developer to bring your web project to life, I\'d love to connect and explore how we can work together!',
    ],
    cv: 'Check out my CV',
  },
  contact: {
    heading: 'Get in touch',
    pitch: 'Have a project in mind, need an extra pair of hands on your team, or want a second opinion on your frontend architecture?',
    reply: 'Share the details and I\'ll get back to you *within 48 hours*.',
    waysHeading: 'Ways to work together',
    ways: [
      { title: 'Project-based', text: 'A clearly defined scope, delivered end-to-end.' },
      { title: 'Team extension', text: 'I join your team as a senior developer.' },
      { title: 'Fractional tech lead', text: 'Part-time technical direction, architecture and reviews.' },
      { title: 'AI workshop / audit', text: 'Adopting AI-assisted development or planning AI features.' },
    ],
    booking: 'Book a free 30-min intro call',
    linkedin: 'Connect on LinkedIn',
    github: 'Browse my GitHub',
    cv: 'Read my CV',
    name: 'Name',
    email: 'Email',
    message: 'Tell me about your project',
    send: 'Send message',
    sending: 'Sending…',
    thanks: 'Thank you for reaching out :)',
    error: 'Error:',
  },
  footer: {
    madeWith: 'Made with',
    by: 'by',
    source: 'Sourcecode available on',
    achievements: 'Achievements',
    imprint: 'Imprint',
    privacy: 'Privacy Policy',
    privacySettings: 'Privacy settings',
  },
  consent: {
    label: 'Privacy settings',
    text: 'May I use Google Analytics to see how visitors use this site? It sets cookies and sends data to Google. You can change your choice anytime under "Privacy settings" in the footer.',
    policy: 'Privacy policy',
    decline: 'Decline',
    accept: 'Accept',
  },
  achievementsPage: {
    heading: 'Achievements',
    intro: 'This website is filled with secrets. Can you find them all?',
    mobileNote: 'Sorry, some of them are not available on mobile or not a11y friendly :(',
    reset: 'Reset All Achievements',
    resetQuestion: 'Really Reset All Achievements?',
    confirm: 'Confirm',
    cancel: 'Cancel',
    resetDone: 'Achievements reset',
  },
  notFound: {
    heading: 'Not Found',
    text: 'Could not find requested resource',
    image: 'Sad 404 Puppy',
    home: 'Return Home',
  },
  legal: {
    imprint: 'Imprint',
    imprintLaw: 'Information according to § 5 DDG (German Digital Services Act)',
    contact: 'Contact:',
    imprintContact: 'Please use my contact form',
    mail: 'Mail:',
    vat: 'VAT ID:',
    // the legal texts are German; the English site says so
    germanOnly: 'This page is only available in German, as required by German law.',
  },
  // English is the source in src/data; only other languages fill these in
  achievementTexts: {} as Record<string, Texts>,
  projectTexts: {} as Record<string, ProjectTexts>,
};

export type Dictionary = typeof en;
export default en;
