export type Project = {
  label: string;
  id: string;
  year: number;
  screenshot?: string;
  description: string;
  shortDescription: string;
  skills: string[];
  github?: string;
  url?: string;
  // client work or my own product / side project
  kind: 'client' | 'side';
  // outcome shown in the project details; only facts, no invented numbers
  result?: string;
};

export type Projects = Project[];

const projects: Projects = [
  {
    label: 'node.energy — opti.node',
    id: 'node-energy-opti-node',
    kind: 'client',
    result: 'Live in production: the interfaces I built are used for energy and revenue monitoring, generator and operator management, and customer onboarding.',
    year: 2026,
    screenshot: 'tobiaswust.de/optinode',
    shortDescription: 'Frontend development for renewable energy operations',
    description:
      'I contributed as a Senior Frontend Developer to opti.node, node.energy’s platform for renewable energy operations. I developed React interfaces across energy and revenue monitoring, generator and operator management, direct-marketing workflows, and customer onboarding. The work included data verification and reporting tools, translating complex operational and regulatory requirements into clear, practical user experiences.',
    skills: ['react', 'typescript', 'react-query'],
    url: 'https://www.node.energy',
  },
  {
    label: 'KataKeeper',
    id: 'katakeeper',
    kind: 'side',
    result: 'Live at katakeeper.com as an installable PWA that works fully offline.',
    screenshot: 'tobiaswust.de/katakeeper',
    year: 2026,
    shortDescription: 'Spaced repetition training for kata and movement',
    description:
      'As a martial artist I kept forgetting kata I hadn\'t drilled in a while, and Anki-style flashcards don\'t fit physical movement. KataKeeper is a local-first, installable PWA that treats each kata, form, or flow like a spaced-repetition card, but instead of just asking "when should I see this again?" it also asks "how much do I need to physically train today?" — capping sessions by time or count, and rating recall qualitatively instead of easy/hard. Everything works fully offline in IndexedDB, with an optional relay for syncing between devices without any accounts.',
    skills: ['react', 'typescript', 'vite', 'supabase', 'pwa'],
    url: 'https://katakeeper.com',
  },
  {
    label: 'TriggerMate',
    id: 'triggermate',
    kind: 'side',
    result: 'Published on the Visual Studio Marketplace.',
    screenshot: 'tobiaswust.de/triggermate',
    year: 2025,
    shortDescription:
      'VSCode Extension that Automates tasks based on file updates',
    description:
      'TriggerMate is a VSCode extension that automates tasks based on file updates. It watches important files like package.json or poetry.lock and notifies you when they change, allowing you to run predefined commands with a single click. This helps developers stay on top of dependency updates and streamline their workflow effortlessly.',
    skills: ['microsoft-azure', 'typescript'],
    github: 'https://github.com/TobiasWust/triggerMate',
    url: 'https://marketplace.visualstudio.com/items?itemName=TobiasWust.triggerMate',
  },
  {
    label: 'CartBlocker',
    id: 'cartblocker',
    kind: 'side',
    result: 'Published on the Chrome Web Store.',
    screenshot: 'tobiaswust.de/cartblocker',
    year: 2024,
    shortDescription: 'Chrome Extension for Intentional Spending',
    description:
      'CartBlocker helps you stay in control of your purchases by blocking "buy," "cart," and "purchase" buttons on websites. Whether you’re browsing out of boredom or feeling tempted by promotions, CartBlocker removes the impulse triggers, helping you save money and focus on what you truly need. With customizable modes, CartBlocker makes it easy to pause or activate at any time.',
    skills: ['react', 'vite', 'typescript'],
    github: 'https://github.com/TobiasWust/cartBlocker',
    url: 'https://chromewebstore.google.com/detail/cartblocker/dhpfplaaijookojpeaeefbhcidblnmec',
  },
  {
    label: 'HostHopper',
    id: 'hosthopper',
    kind: 'side',
    result: 'Published on the Chrome Web Store.',
    screenshot: 'tobiaswust.de/hosthopper',
    year: 2024,
    shortDescription: 'Chrome Extension for Developers',
    description:
      'I built a Chrome Extension that helps developers to quickly switch between different hosts. The extension is built with React and uses the Chrome Extension API to store the hosts.',
    skills: ['react', 'vite', 'typescript'],
    github: 'https://github.com/TobiasWust/hostHopper',
    url: 'https://chromewebstore.google.com/detail/hosthopper/jhjeecgkolbcgkecjhbdiecdmbicpdjl',
  },
  {
    label: 'Gleitschirmjobs',
    id: 'gleitschirmjobs',
    kind: 'side',
    result: 'Live at gleitschirmjobs.de, serving the German paragliding community.',
    screenshot: 'tobiaswust.de/gleitschirmjobs',
    year: 2024,
    shortDescription: 'Jobboard for Paragliding',
    description:
      'As a paragliding pilot, I wanted to create a job board for the german paragliding community. The website is built with Next.js and uses the Supabase database to store the jobs.',
    skills: [
      'react',
      'nextjs',
      'nodejs',
      'typescript',
      'tailwindcss',
      'supabase',
    ],
    url: 'https://www.gleitschirmjobs.de',
  },
  {
    label: 'Wust.dev 2024',
    id: 'wustdev2024',
    kind: 'side',
    screenshot: 'tobiaswust.de/tobiaswust2024',
    year: 2024,
    shortDescription: 'Portfolio website',
    description:
      'After almost ten years with my old website I wanted to create something fast and modern. Full with animations and achievements.',
    skills: ['react', 'nextjs', 'nodejs', 'typescript'],
    url: 'https://wust.dev',
  },
  {
    label: 'Governmental Statistics',
    id: 'ktzhStats',
    kind: 'client',
    result: 'Live on zh.ch as the official, accessible statistics search of the Canton of Zurich.',
    screenshot: 'tobiaswust.de/ktzhStats',
    year: 2023,
    shortDescription: 'Accessible Search',
    description:
      'I built the statistics search for the Canton of Zurich. The search is accessible and can be used by everyone. I pixel-perfectly implemented the design and made sure that the search is fast and easy to use.',
    skills: [
      'handlebars',
      'css-3',
      'html-5',
      'gulp',
      'webpack',
      'typescript',
      'figma',
    ],
    url: 'https://www.zh.ch/de/bildung/bildungssystem/zahlen-fakten.html',
  },
  {
    label: 'GamesWeAllOwn',
    id: 'gamesweallown',
    kind: 'side',
    screenshot: 'tobiaswust.de/gamesweallown',
    year: 2023,
    shortDescription: 'Steam API integration',
    description:
      'gamesweallown.com is a website where you can see which games you and your friends own on steam. The website is built with Next.js and uses the Steam API to get the games.',
    skills: ['react', 'nextjs', 'react-query', 'tailwindcss'],
    github: 'https://github.com/TobiasWust/sharedgames',
    url: 'https://gamesweallown.com/',
  },
  {
    label: 'SummarizeIt.io',
    id: 'summarizeit',
    kind: 'client',
    result: 'Shipped user management, payment processing and the AI summarization product itself as Lead Developer.',
    screenshot: 'tobiaswust.de/summarizeIt',
    year: 2022,
    shortDescription: 'AI powered video summarization',
    description:
      'As the Lead Developer at Summarizeit, a SaaS company using AI to create summaries from videos, I was responsible for the development and implementation features like user management, payment processing, and the product itself.',
    skills: [
      'react',
      'nextjs',
      'react-query',
      'tailwindcss',
      'nodejs',
      'supabase',
      'openai',
      'sendgrid',
      'stripe',
      'typescript',
    ],
  },
  {
    label: 'hitcap.gg',
    id: 'hitcap',
    kind: 'client',
    result: 'Delivered two platforms, a social network for gamers and a coaching platform, true to the designers\' vision.',
    screenshot: 'tobiaswust.de/hitcap',
    year: 2022,
    shortDescription: 'Social Media Platform',
    description:
      'I helped to build a social media platform for gamers and a coaching platform for aspiring professionals. Both projects required a high level of skill and attention to detail, and I was able to successfully bring the designers vision to life using React and other technologies.',
    skills: [
      'react',
      'typescript',
      'docker',
      'redux',
      'nodejs',
      'mongodb',
      'mobx',
    ],
  },
  {
    label: 'Divery.io',
    id: 'divery',
    kind: 'client',
    result: 'Migrated the platform from jQuery to React as the team grew.',
    screenshot: 'tobiaswust.de/divery',
    year: 2020,
    shortDescription: 'Divecenter ERP',
    description:
      'When I joined the Divery, the platform was built using jQuery, and as the sole developer on the team, I continued to work with jQuery for a while. Later, as the team grew and we added more developers, we migrated the platform to React.',
    skills: ['jquery', 'react', 'couchdb', 'docker'],
    url: 'https://divery.io/',
  },
  {
    label: 'Mother',
    id: 'mother',
    kind: 'side',
    screenshot: 'tobiaswust.de/mother',
    year: 2021,
    shortDescription: 'Horror Game',
    description:
      'Mother is a horror game that I helped build in Unity. The game is a first-person horror game where you find yourself in a haunted house. It was a contribution to the Manasoup Game Jam where we formed a team and built the game within one weekend.',
    skills: ['unity', 'c-sharp'],
    url: 'https://chinyone.itch.io/motherhouseofhorror',
  },
  {
    label: 'Funkhelfer.de',
    id: 'funkhelfer',
    kind: 'side',
    screenshot: 'tobiaswust.de/funkhelfer',
    year: 2020,
    shortDescription: 'Radio Frequency Finder',
    description:
      'funkhelfer.de is a webapp to find the right frequency for your radio. It was built with plain HTML, CSS, and JavaScript. The website is responsive and works on all devices. It used to be a cordova app, but now it is a pure webapp.',
    skills: ['html-5', 'css-3', 'javascript'],
    url: 'https://funkhelfer.de/',
    github: 'https://github.com/TobiasWust/Funkhelfer',
  },
  {
    label: 'Serwema Product Search',
    id: 'serwema',
    kind: 'client',
    result: 'Live on serwema.de: the client manages its products in WordPress, and customers can search them.',
    screenshot: 'tobiaswust.de/serwema',
    year: 2020,
    shortDescription: 'Custom Wordpress Plugin',
    description:
      'I helped build a custom wordpress plugin, that allows simple administration of available products for my client and a simple search for their customers.',
    skills: ['html-5', 'css-3', 'javascript', 'react', 'jquery', 'wordpress'],
    url: 'https://serwema.de/maschinen_kategorien/abwaelzfraesen-gebrauchte-maschinen-ueberholt/',
  },
  {
    label: 'Game Snowbody',
    id: 'snowbody',
    kind: 'side',
    screenshot: 'tobiaswust.de/snowbody',
    year: 2020,
    shortDescription: '2D Shooter',
    description:
      'Snowbody is a game that I built in Unity. The game is a 2D shooter where you play as a snowman and have to defend yourself against evil Bunnys.',
    skills: ['unity', 'c-sharp'],
    url: 'https://wust.itch.io/snowbody',
    github: 'https://github.com/TobiasWust/snowbodygame',
  },
  {
    label: 'Stupidnes',
    id: 'stupidnes',
    kind: 'side',
    screenshot: 'tobiaswust.de/stupidnes',
    year: 2019,
    shortDescription: 'NES Emulator',
    description:
      'A NES Emulator but any time you press a button something stupid happens.',
    skills: ['javascript', 'html-5'],
    url: 'https://stupidnes.wust.io',
    github: 'https://github.com/TobiasWust/stupidnes',
  },
  {
    label: 'Thermalcenter',
    id: 'thermalcenter',
    kind: 'side',
    screenshot: 'tobiaswust.de/thermalcenter',
    year: 2018,
    shortDescription: '2D Flight Simulator',
    description:
      'A minified paragliding simulator for mobile that teaches good thermaling.',
    skills: ['javascript', 'phaser'],
    url: 'https://thermal.wust.io',
    github: 'https://github.com/TobiasWust/thermalcenter',
  },
  {
    label: 'Game Morserunner',
    id: 'morserunner',
    kind: 'side',
    screenshot: 'tobiaswust.de/morserunner',
    year: 2017,
    shortDescription: 'Educational 2D Runner',
    description:
      'Morserunner is a game that teaches you morsecode while playing. It used to be in the google play store with cordova, but now its only available online.',
    skills: ['javascript', 'phaser'],
    url: 'https://wust.itch.io/morserunner',
  },
  {
    label: 'tobiaswust.de 2017',
    id: 'tobiaswust2017',
    kind: 'side',
    screenshot: 'tobiaswust.de/tobiaswust2017',
    year: 2017,
    shortDescription: 'Developer Website',
    description:
      'My old Website. I personally really liked the design with the huge photo.',
    skills: ['javascript', 'vue'],
    // url: 'https://tobiaswust2017.wust.io',
  },
];

export default projects;
