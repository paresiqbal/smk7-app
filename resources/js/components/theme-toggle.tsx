import { Moon, Sun } from 'lucide-react';
import { useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';

type ThemeToggleProps = {
    className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
    const { resolvedAppearance, updateAppearance } = useAppearance();
    const isDark = resolvedAppearance === 'dark';

    return (
        <button
            type="button"
            onClick={() => updateAppearance(isDark ? 'light' : 'dark')}
            className={cn(
                'relative inline-flex h-9 w-9 items-center justify-center border border-black/10 text-black/70 transition-colors hover:text-black dark:border-white/10 dark:text-white/80',
                className,
            )}
            aria-label="Toggle theme"
        >
            <Sun
                className={cn(
                    'h-4 w-4 transition-all',
                    isDark ? '-rotate-90 scale-0' : 'rotate-0 scale-100',
                )}
            />
            <Moon
                className={cn(
                    'absolute h-4 w-4 transition-all',
                    isDark ? 'rotate-0 scale-100' : 'rotate-90 scale-0',
                )}
            />
        </button>
    );
}
