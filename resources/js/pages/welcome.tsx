import { Head, usePage } from '@inertiajs/react';
import { LandingBanner } from '@/components/landing/landing-banner';
import { LandingJurusan } from '@/components/landing/landing-jurusan';
import { LandingProfilSekolah } from '@/components/landing/landing-profil-sekolah';
import { LandingSambutan } from '@/components/landing/landing-sambutan';
import { LandingLayout } from '@/layouts/landing-layout';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="SMKN 7">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=jetbrains-mono:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <LandingLayout canRegister={canRegister && !auth.user}>
                <LandingBanner />
                <LandingSambutan />
                <LandingProfilSekolah />
                <LandingJurusan />
            </LandingLayout>
        </>
    );
}
