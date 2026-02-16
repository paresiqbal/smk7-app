import { Link } from '@inertiajs/react';
import { ChevronDown } from 'lucide-react';
import { login, register } from '@/routes';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';

const majors = [
    {
        label: 'Teknik Kendaraan Ringan',
        slug: 'teknik-kendaraan-ringan',
    },
    {
        label: 'Teknik Komputer dan Jaringan',
        slug: 'teknik-komputer-dan-jaringan',
    },
    {
        label: 'Akuntansi',
        slug: 'akuntansi',
    },
];

export function LandingNavbar({ canRegister = true }: { canRegister?: boolean }) {
    return (
        <header className="w-full">
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-3 dark:border-white/10">
                <Link
                    href="/"
                    className="flex items-center gap-3 text-base font-semibold tracking-tight"
                >
                    <span className="flex h-9 w-9 items-center justify-center border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/10">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="text-foreground"
                        >
                            <path
                                d="M4 10.5L12 6l8 4.5V20a1 1 0 0 1-1 1h-4v-5H9v5H5a1 1 0 0 1-1-1v-9.5Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3 10.5L12 5l9 5.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                    <span>SMKN 7</span>
                </Link>
                <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
                    <Link
                        href="/tentang-sekolah"
                        className="transition-colors hover:text-foreground/70"
                    >
                        Tentang Sekolah
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="inline-flex items-center gap-1 transition-colors hover:text-foreground/70">
                            Jurusan
                            <ChevronDown className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-56">
                            {majors.map((major) => (
                                <DropdownMenuItem key={major.slug} asChild>
                                    <Link href={`/jurusan/${major.slug}`}>
                                        {major.label}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link
                        href="/ekstrakulikuler"
                        className="transition-colors hover:text-foreground/70"
                    >
                        Ekstrakulikuler
                    </Link>
                    <Link
                        href={login()}
                        className="transition-colors hover:text-foreground/70"
                    >
                        Login
                    </Link>
                    {canRegister && (
                        <Link
                            href={register()}
                            className="border border-primary/20 px-4 py-1.5 text-sm font-semibold text-primary transition-colors hover:border-primary/40"
                        >
                            Daftar Sekarang
                        </Link>
                    )}
                    <ThemeToggle />
                </nav>
                <Sheet>
                    <SheetTrigger
                        className="inline-flex h-10 w-10 items-center justify-center border border-black/10 lg:hidden dark:border-white/10"
                        aria-label="Open menu"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            className="text-foreground"
                        >
                            <path
                                d="M4 7h16M4 12h16M4 17h16"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="square"
                            />
                        </svg>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="h-full w-full border-0 p-6 sm:max-w-none"
                    >
                        <div className="mt-6 flex items-center justify-end">
                            <ThemeToggle />
                        </div>
                        <div className="mt-6 flex flex-col gap-6 text-base font-medium">
                            <Link href="/tentang-sekolah">
                                Tentang Sekolah
                            </Link>
                            <details className="group">
                                <summary className="cursor-pointer list-none text-sm uppercase tracking-[0.2em] text-muted-foreground">
                                    Jurusan
                                </summary>
                                <div className="mt-3 flex flex-col gap-2 text-base text-foreground/80">
                                    {majors.map((major) => (
                                        <Link
                                            key={major.slug}
                                            href={`/jurusan/${major.slug}`}
                                        >
                                            {major.label}
                                        </Link>
                                    ))}
                                </div>
                            </details>
                            <Link href="/ekstrakulikuler">
                                Ekstrakulikuler
                            </Link>
                            <Link href={login()}>Login</Link>
                            {canRegister && (
                                <Link
                                    href={register()}
                                    className="border border-primary/20 px-4 py-2 text-center font-semibold text-primary"
                                >
                                    Daftar Sekarang
                                </Link>
                            )}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
