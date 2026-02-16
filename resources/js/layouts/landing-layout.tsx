import { PropsWithChildren } from 'react';
import { LandingFooter } from '@/components/landing/landing-footer';
import { LandingNavbar } from '@/components/landing/landing-navbar';

interface LandingLayoutProps {
    canRegister?: boolean;
}

export function LandingLayout({
    children,
    canRegister,
}: PropsWithChildren<LandingLayoutProps>) {
    return (
        <div className="min-h-screen bg-background px-8 pt-6 pb-0 text-foreground sm:px-10 lg:px-16">
            <div className="flex w-full flex-col gap-10">
                <LandingNavbar canRegister={canRegister} />
                <main className="flex flex-col gap-12">{children}</main>
                <LandingFooter />
            </div>
        </div>
    );
}
