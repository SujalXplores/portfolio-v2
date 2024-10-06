'use client';

import { motion, LayoutGroup } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/snippets': {
    name: 'Snippets',
  },
  '/guestbook': {
    name: 'Guestbook',
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
            <div className="flex flex-row space-x-0 pr-10">
              {Object.entries(navItems).map(([path, { name }]) => {
                return <NavItem key={path} path={path} name={name} />;
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}

const cx = (...classes) => classes.filter(Boolean).join(' ');

function NavItem({ path, name }: { path: string; name: string }) {
  const snippetsPath = '/snippets';
  let pathname = usePathname() || '/';
  pathname = pathname.includes(snippetsPath) ? snippetsPath : pathname;

  const isActive = path === pathname;

  return (
    <Link
      key={path}
      href={path}
      className={cx('transition-all hover:text-neutral-200 flex align-middle', {
        'text-neutral-500': !isActive,
      })}
    >
      <span className="relative py-1 px-2">
        {name}
        {isActive ? (
          <motion.div
            className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 z-[-1] bg-gradient-to-r from-transparent to-neutral-900"
            layoutId="sidebar"
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 30,
            }}
          />
        ) : null}
      </span>
    </Link>
  );
}
