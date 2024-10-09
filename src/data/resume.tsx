import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Sujal Shah',
  initials: 'SS',
  url: 'https://sujal.vercel.app',
  description:
    'Passionate Software Engineer with 3+ years of experience crafting innovative web solutions. Specializing in web development and always eager to embrace new technologies.',
  summary:
    "As a passionate software engineer, I specialize in crafting exceptional and innovative digital experiences. My expertise lies in building robust, accessible, and human-centered products that make a real impact. Currently, I'm leveraging my skills to create cutting-edge solutions at [ZURU](https://zuru.tech), where I continue to push the boundaries of what's possible in tech.",
  avatarUrl: '/me.png',
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
      logoUrl: '/zuru.png',
      start: 'January 2022',
      end: 'Present',
      description:
        'Leading development of innovative web applications using cutting-edge technologies. Architecting and implementing scalable solutions with React, Next.js, and TypeScript. Collaborating closely with cross-functional teams to deliver high-performance, user-centric products. Mentoring junior developers and contributing to best practices and code standards. Continuously optimizing application performance and user experience.',
    },
    {
      company: 'Walmart',
      href: 'https://www.walmart.com',
      badges: [],
      location: 'Remote',
      title: 'Freelance contractor',
      logoUrl: '/walmart.png',
      start: 'May 2021',
      end: 'Present',
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
      logoUrl: '/gujarat-university.png',
      start: '2020',
      end: '2022',
    },
    {
      school: 'Gujarat University',
      href: 'https://www.gujaratuniversity.ac.in',
      degree:
        'Bachelor of Computer Applications & Information Technology (Bsc CA & IT)',
      logoUrl: '/gujarat-university.png',
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
        'A Next.js application that uses Google Maps API 📍 to detect whether a location is on water 🌊 or land ⛰️.',
      technologies: [
        'Next.js',
        'Typescript',
        'TailwindCSS',
        'Shadcn UI',
        'Google Maps API',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://google-map-detect-water.vercel.app',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/SujalXplores/google-map-detect-water',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: '/google-map-water-detection-demo.mp4',
    },
    {
      title: 'Magic UI',
      href: 'https://magicui.design',
      dates: 'June 2023 - Present',
      active: true,
      description:
        'Designed, developed and sold animated UI components for developers.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Stripe',
        'Shadcn UI',
        'Magic UI',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://magicui.design',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/magicuidesign/magicui',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: 'https://cdn.magicui.design/bento-grid.mp4',
    },
    {
      title: 'llm.report',
      href: 'https://llm.report',
      dates: 'April 2023 - September 2023',
      active: true,
      description:
        'Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Shadcn UI',
        'Magic UI',
        'Stripe',
        'Cloudflare Workers',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://llm.report',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: '',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: 'https://cdn.llm.report/openai-demo.mp4',
    },
    {
      title: 'Automatic Chat',
      href: 'https://automatic.chat',
      dates: 'April 2023 - March 2024',
      active: true,
      description:
        'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Shadcn UI',
        'Magic UI',
        'Stripe',
        'Cloudflare Workers',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://automatic.chat',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4',
    },
  ],
} as const;
