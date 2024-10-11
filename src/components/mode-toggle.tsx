'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { forwardRef } from 'react';

import { Button } from '@/components/ui/button';

export const ModeToggle = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ onClick, ...props }, ref) => {
  const { theme, setTheme } = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Button
      ref={ref}
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={handleClick}
      aria-label="Theme"
      {...props}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
});

ModeToggle.displayName = 'ModeToggle';
