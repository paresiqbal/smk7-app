import { PropsWithChildren } from 'react';
import { LandingNavbar } from '@/components/landing/landing-navbar';

interface LandingLayoutProps {
    canRegister?: boolean;
}

export function LandingLayout({
    children,
    canRegister,
}: PropsWithChildren<LandingLayoutProps>) {
    return (
        <div className="min-h-screen bg-background px-8 py-6 text-foreground sm:px-10 lg:px-16">
            <div className="flex w-full flex-col gap-10">
                <LandingNavbar canRegister={canRegister} />
                <main className="flex flex-col gap-12">{children}</main>
            </div>
        </div>
    );
}
