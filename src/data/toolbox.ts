// skill ids from skills.tsx, grouped for the Toolbox section
export const toolboxGroups: { key: 'frontend' | 'backend' | 'ai' | 'tooling'; skills: string[] }[] = [
  {
    key: 'frontend',
    skills: ['react', 'nextjs', 'typescript', 'tailwindcss', 'react-query', 'vite'],
  },
  {
    key: 'backend',
    skills: ['nodejs', 'supabase', 'mongodb', 'stripe', 'docker'],
  },
  {
    key: 'ai',
    skills: ['claude-icon', 'openai', 'github-copilot'],
  },
  {
    key: 'tooling',
    skills: ['aws', 'microsoft-azure', 'git', 'figma', 'sentry'],
  },
];

// tools I use every day but that don't show up as project skills
export const dailyTools = ['claude-icon', 'github-copilot'];
