export type Project = {
  label: string;
  id: string;
  year: number;
  screenshot?: string;
  // 'top' keeps the whole image and only trims the bottom edge; default is Cloudinary's smart crop,
  // which zooms in and can cut off parts that matter (like a menu bar)
  screenshotCrop?: 'top';
  // further images after the screenshot, browsable with arrows in the project details;
  // same format as screenshot (Cloudinary id or a path in public/), the thumbnail only shows the first
  moreScreenshots?: string[];
  description: string;
  shortDescription: string;
  skills: string[];
  github?: string;
  url?: string;
  // client work or my own product / side project
  kind: 'client' | 'side';
  // outcome shown in the project details; only facts, no invented numbers
  result?: string;
  // outdated, too small or no longer relevant: kept here for the record, but not shown anywhere
  // and not counted for stats or achievements
  archived?: boolean;
};

export type Projects = Project[];

// all images of a project in display order, the first one is the thumbnail
export function screenshots(project: Project) {
  return project.screenshot ? [project.screenshot, ...(project.moreScreenshots ?? [])] : [];
}

export function screenshotCrop(project: Project) {
  return project.screenshotCrop === 'top'
    ? { type: 'fill' as const, gravity: 'north', source: true }
    : { type: 'auto' as const, source: true };
}

const allProjects: Projects = [
  {
    label: 'Teichmann & Wust — Belegablage',
    id: 'belegablage',
    kind: 'client',
    result: 'Measured on about 1,900 receipts filed by hand, the app picks the right category in 81–97 % of cases depending on the type, and in 98.7 % when it is at least 95 % sure. Testing at the garage starts in December 2026, daily use is planned from 2027.',
    year: 2026,
    // taken with made-up sample receipts, no real customer data
    screenshot: '/belegablage-eingang.jpg',
    moreScreenshots: ['/belegablage-pruefen.jpg', '/belegablage-einsortiert.jpg', '/belegablage-steuerberater.jpg'],
    shortDescription: 'Offline receipt sorting for a car repair shop',
    description:
      'For Teichmann & Wust Automobile, a family-run car repair shop with a towing service, I built a desktop app that sorts scanned receipts. It reads every scan from an inbox folder, recognises category, year and invoice number, even handwritten ones, shrinks the image and files it under the right name in the right folder. Text recognition and classification run fully offline on the office PC: PP-OCR models via ONNX Runtime and a classifier that learns from every confirmed receipt. Uncertain receipts are shown for a quick check, and the app also spots duplicate scans, gaps in the numbering and blurry or upside-down scans. Once a month it packs all receipts with an Excel list for the tax advisor. It runs on Windows and macOS with automatic updates, backups inside the receipt archive and error reports to Sentry that strip all personal data.',
    skills: ['electron', 'javascript', 'nodejs', 'sentry'],
  },
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
    label: 'GoatPocket',
    id: 'goatpocket',
    kind: 'side',
    result: 'Live as a free, open source PWA with a demo mode, in English and German.',
    year: 2026,
    screenshot: 'tobiaswust.de/goatpocket',
    moreScreenshots: ['tobiaswust.de/goatpocket-2'],
    shortDescription: 'GoatCounter Stats for Your Phone',
    description:
      'GoatPocket is a mobile dashboard for GoatCounter, the privacy-friendly web analytics. Big numbers, a chart you can scrub with your finger, and every row opens a breakdown, for example from a referrer to the exact search engines. It handles multiple sites and accounts and works with self-hosted GoatCounter instances. There is no backend: the browser talks straight to the GoatCounter API, and the token never leaves your device. Plain JavaScript without a build step, installable as a PWA, with light and dark mode.',
    skills: ['javascript', 'html-5', 'css-3', 'pwa'],
    github: 'https://github.com/TobiasWust/goatpocket',
    url: 'https://goatpocket.com',
  },
  {
    label: 'wust.dev games',
    id: 'wust-dev-games',
    kind: 'side',
    result: 'Live with six games, in English and German.',
    year: 2026,
    screenshot: '/games-wust-dev.jpg',
    moreScreenshots: ['tobiaswust.de/games-wust-dev-2'],
    shortDescription: 'Browser Games for in Between',
    description:
      'wust.dev games collects my small browser games in one place: free, without ads and without sign-up, and they also work offline. Right now there are six: Thermikdoku, a logic puzzle with paragliders, One More Slice, a cosy cake sliding puzzle with over 500 levels, GlideSweeper, Minesweeper in the sky without numbers, Shuttle Jam, a parking puzzle at the landing field, Thermalcenter 2, where you learn to centre thermals with two brake lines, and Morserunner 2, which teaches Morse code over 100 stations. You can search, filter by category and tag, keep favourites and sort by popularity, which comes from anonymous counters for game starts and hearts. The site is generated statically with a small Node.js build script and runs on Netlify, with one serverless function for the counters.',
    skills: ['javascript', 'nodejs', 'html-5', 'css-3'],
    url: 'https://littlelift.games/en/games/',
  },
  {
    label: 'Thermikdoku',
    id: 'thermikdoku',
    kind: 'side',
    result: 'Live as a free, ad-free PWA that also works offline.',
    year: 2026,
    screenshot: 'tobiaswust.de/thermikdoku',
    moreScreenshots: ['tobiaswust.de/thermikdoku-2', 'tobiaswust.de/thermikdoku-3'],
    shortDescription: 'Paragliding Logic Puzzle',
    description:
      'Thermikdoku is a logic puzzle with paragliders, made for phones: place exactly one glider in every row, every column and every colored thermal zone, and no two gliders may touch, not even diagonally. Every puzzle is generated procedurally, has exactly one solution and can be solved without guessing. A logic solver rates each puzzle into four difficulty levels and powers the hints, which explain the next step. On top there is a daily flight with a streak counter, cute hand-drawn characters, combos, confetti and synth sounds. The game is in German.',
    skills: ['javascript', 'html-5', 'css-3', 'pwa'],
    github: 'https://github.com/TobiasWust/thermikdoku',
    url: 'https://thermikdoku.de',
  },
  {
    label: 'repylo',
    id: 'repylo',
    kind: 'side',
    year: 2026,
    screenshot: 'tobiaswust.de/repylo',
    moreScreenshots: ['tobiaswust.de/repylo-3'],
    shortDescription: 'Colorful Workout Tracker',
    description:
      'repylo is a colorful, fast workout tracker that runs as a PWA. No account, no backend, no tracking: your data stays on your own devices and syncs end-to-end encrypted between them. It suggests what to train next and when to add weight, and shows your progress in clear stats.',
    skills: ['react', 'typescript', 'vite', 'pwa'],
    github: 'https://github.com/TobiasWust/repylo',
    url: 'https://repylo.com',
  },
  {
    label: 'FnLockBar',
    id: 'fnlockbar',
    kind: 'side',
    screenshot: 'tobiaswust.de/fnlockbar',
    screenshotCrop: 'top',
    moreScreenshots: ['tobiaswust.de/fnlockbar-2'],
    result: 'Free download on GitHub.',
    year: 2026,
    shortDescription: 'macOS Menu Bar App for the fn Key',
    description:
      'Ever wondered whether your F1–F12 keys are function keys or media keys right now? I built FnLockBar, a tiny macOS menu bar app that always shows the current mode and switches it with a click or a shortcut. It\'s written in Swift, without any dependencies.',
    skills: ['swift'],
    github: 'https://github.com/TobiasWust/FnLockBar',
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
    archived: true,
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
    archived: true,
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
    archived: true,
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
    archived: true,
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
    archived: true,
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
    archived: true,
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
    archived: true,
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
    archived: true,
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
    archived: true,
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
    archived: true,
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
    archived: true,
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

const projects = allProjects.filter((p) => !p.archived);

export default projects;
