import { HomeIcon, NotebookIcon, TrophyIcon } from 'lucide-react';

import { Icons } from '@/components/icons';

// calculate experience in years dynamically
const experience = new Date().getFullYear() - 2021;

export const DATA = {
  name: 'Sujal Shah',
  initials: 'SS',
  url: 'https://sujal.vercel.app',
  description: `Innovative Software Engineer with ${experience}+ years crafting cutting-edge web solutions. Passionate about pushing technological boundaries.`,
  summary:
    "As a passionate software engineer, I specialize in crafting exceptional and innovative digital experiences. My expertise lies in building robust, accessible, and human-centered products that make a real impact. Currently, I'm leveraging my skills to create cutting-edge solutions at [ZURU](https://zuru.tech), where I continue to push the boundaries of what's possible in tech.",
  avatarUrl: '/images/me.png',
  skills: [
    'React',
    'Next.js',
    'JavaScript',
    'Typescript',
    'Node.js',
    'TailwindCSS',
    'Git',
    'A11y',
    'Web Performance',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
    { href: '/hackathons', icon: TrophyIcon, label: 'Hackathons' },
  ],
  contact: {
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/SujalXplores',
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sujal-shah-26127620b',
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/sujal_shah10',
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: 'Send Email',
        url: 'mailto:sujal.shah.dev@gmail.com',
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: 'ZURU',
      badges: [],
      href: 'https://zuru.tech',
      location: 'On-site',
      title: 'Software Engineer - 2',
      logoUrl: '/images/zuru.png',
      start: 'January 2022',
      end: 'Present',
      description:
        'Spearheading development of cutting-edge web applications using React, Next.js, and TypeScript. Designing scalable solutions and collaborating with cross-functional teams to deliver high-performance, user-centric products. Mentoring junior developers, establishing best practices, and continuously optimizing application performance and user experience.',
    },
    {
      company: 'Walmart',
      href: 'https://www.walmart.com',
      badges: [],
      location: 'Remote',
      title: 'Freelance contractor',
      logoUrl: '/images/walmart.png',
      start: 'May 2021',
      end: 'October 2024',
      description:
        'Spearheaded development of the Compass UI, an innovative in-store map navigation system. Leveraged React.js and TypeScript to build a responsive and intuitive interface. Implemented complex canvas-based features using Fabric.js, enabling interactive store layouts and real-time path-finding. Collaborated with UX designers to enhance user experience and improve in-store navigation efficiency. Optimized performance for smooth rendering of large-scale store maps across various devices.',
    },
  ],
  education: [
    {
      school: 'Gujarat University',
      href: 'https://www.gujaratuniversity.ac.in',
      degree:
        'Master of Computer Applications & Information Technology (Msc CA & IT)',
      logoUrl: '/images/gujarat-university.png',
      start: '2020',
      end: '2022',
    },
    {
      school: 'Gujarat University',
      href: 'https://www.gujaratuniversity.ac.in',
      degree:
        'Bachelor of Computer Applications & Information Technology (Bsc CA & IT)',
      logoUrl: '/images/gujarat-university.png',
      start: '2017',
      end: '2020',
    },
  ],
  projects: [
    {
      title: 'Google Map Water Detection',
      href: 'https://google-map-detect-water.vercel.app',
      dates: 'Jan 2024 - Feb 2024',
      active: true,
      description:
        'Next.js app using Google Maps API to detect if a location is on water or land. Users can explore terrain types by selecting map points.',
      technologies: [
        'Next.js',
        'Typescript',
        'TailwindCSS',
        'Shadcn UI',
        'Google Maps API',
      ],
      links: [
        {
          id: 0,
          type: 'Website',
          href: 'https://google-map-detect-water.vercel.app',
          icon: <Icons.globe className="size-3" />,
        },
        {
          id: 1,
          type: 'Source',
          href: 'https://github.com/SujalXplores/google-map-detect-water',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: '/videos/google-map-water-detection-demo.mp4',
    },
    {
      title: 'AI Artistry Studio',
      href: 'https://ai-artistry-five.vercel.app',
      dates: 'September 2024 - Present',
      active: true,
      description:
        'Developed an AI-powered image generation platform using DALL-E 3. Users can create unique artworks by inputting text prompts, showcasing the intersection of AI and creativity.',
      technologies: [
        'Next.js',
        'Typescript',
        'Shadcn UI',
        'Dall-E 3',
        'OpenAI API',
      ],
      links: [
        {
          id: 0,
          type: 'Website',
          href: 'https://ai-artistry-five.vercel.app',
          icon: <Icons.globe className="size-3" />,
        },
        {
          id: 1,
          type: 'Source',
          href: 'https://github.com/SujalXplores/dall-e-3-next-js-template',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/images/ai-artistry.png',
      video: '',
    },
    // {
    //   title: 'llm.report',
    //   href: 'https://llm.report',
    //   dates: 'April 2023 - September 2023',
    //   active: true,
    //   description:
    //     'Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.',
    //   technologies: [
    //     'Next.js',
    //     'Typescript',
    //     'PostgreSQL',
    //     'Prisma',
    //     'TailwindCSS',
    //     'Shadcn UI',
    //     'Magic UI',
    //     'Stripe',
    //     'Cloudflare Workers',
    //   ],
    //   links: [
    //     {
    //       type: 'Website',
    //       href: 'https://llm.report',
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: 'Source',
    //       href: '',
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: '',
    //   video: 'https://cdn.llm.report/openai-demo.mp4',
    // },
    // {
    //   title: 'Automatic Chat',
    //   href: 'https://automatic.chat',
    //   dates: 'April 2023 - March 2024',
    //   active: true,
    //   description:
    //     'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
    //   technologies: [
    //     'Next.js',
    //     'Typescript',
    //     'PostgreSQL',
    //     'Prisma',
    //     'TailwindCSS',
    //     'Shadcn UI',
    //     'Magic UI',
    //     'Stripe',
    //     'Cloudflare Workers',
    //   ],
    //   links: [
    //     {
    //       type: 'Website',
    //       href: 'https://automatic.chat',
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: '',
    //   video:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4',
    // },
  ],
} as const;

export const HACKATHONS = [
  {
    id: 0,
    title: 'Blazing Fast URL Shortener',
    dates: 'January 31st - February 3rd, 2025',
    location: 'Remote',
    description:
      'Won 3rd place for developing a high-performance URL shortener using Rust and Next.js. The solution features clean architecture, efficient storage with Sled embedded database, modern UI with Tailwind CSS, and robust security including URL encryption and input validation.',
    image: '/svgs/hackathons/rust.svg',
    links: [
      {
        title: 'Website',
        icon: <Icons.globe className="h-4 w-4" />,
        href: 'https://blazing-fast-url-shortner.vercel.app',
      },
      {
        title: 'Source',
        icon: <Icons.github className="h-4 w-4" />,
        href: 'https://github.com/SujalXplores/blazing-fast-url-shortner',
      },
    ],
    win: '3rd Place Winner 🥉',
  },
  {
    id: 1,
    title: 'Peerlist Hackathon',
    dates: 'December 17th - 21st, 2024',
    location: 'Remote',
    description:
      'Developed v0.diy, an open-source alternative to v0.dev, that helps developers generate UI components and layouts for web projects using AI. The tool streamlines the frontend development process by converting text descriptions into ready-to-use React components.',
    image: '/svgs/hackathons/peerlist.svg',
    links: [
      {
        title: 'Peerlist',
        icon: <Icons.globe className="h-4 w-4" />,
        href: 'https://peerlist.io/sujalshah/project/v0-opensource-alternative',
      },
      {
        title: 'Source',
        icon: <Icons.github className="h-4 w-4" />,
        href: 'https://github.com/SujalXplores/v0.diy',
      },
    ],
  },
  {
    id: 2,
    title: 'Neuro Nostalgia',
    dates: 'December 13th - 16th, 2024',
    location: 'Remote',
    description:
      'Won 1st place for developing an AI-powered tool that transforms modern websites into authentic 90s-style designs. The solution preserves core functionality while implementing automated layout transformations and period-appropriate styling to recreate the nostalgic 90s web aesthetic.',
    image: '/svgs/hackathons/neuro-nostalgia.svg',
    links: [
      {
        title: 'Source',
        icon: <Icons.github className="h-4 w-4" />,
        href: 'https://github.com/sanjaysah101/neuro-nostalgia',
      },
    ],
    win: '1st Place Winner 🏆',
  },
  {
    id: 3,
    title: 'Google Chrome Built-in AI Challenge',
    dates: 'October 1st - December 4th, 2024',
    location: 'Remote',
    description:
      'Developed a Chrome extension that leverages AI to enhance user experience by providing real-time translations, summaries, and more directly within the browser.',
    image: '/svgs/hackathons/chrome.svg',
    links: [
      {
        title: 'Devpost',
        icon: <Icons.globe className="h-4 w-4" />,
        href: 'https://devpost.com/software/ansopedia-8uvh4m',
      },
      {
        title: 'Source',
        icon: <Icons.github className="h-4 w-4" />,
        href: 'https://github.com/ansopedia/creator-studio',
      },
    ],
  },
] as const;
