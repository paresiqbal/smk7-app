import { Head, usePage } from '@inertiajs/react';
import { LandingLayout } from '@/layouts/landing-layout';

const galleryImages = [
    'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1200&q=80',
];

export default function TentangSekolah({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Tentang Sekolah">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=jetbrains-mono:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <LandingLayout canRegister={canRegister && !auth.user}>
                <section className="flex flex-col gap-10">
                    <div className="relative h-[320px] w-full overflow-hidden sm:h-[420px] lg:h-[520px]">
                        <img
                            src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1600&q=80"
                            alt="SMK Negeri 7 Rejang Lebong"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                            <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
                                SMK Negeri 7 Rejang Lebong
                            </h1>
                        </div>
                    </div>
                    <div className="max-w-4xl text-sm leading-relaxed text-muted-foreground">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                            Curabitur pretium tincidunt lacus. Nulla gravida
                            orci a odio. Nullam varius, turpis et commodo
                            pharetra, est eros bibendum elit, nec luctus magna
                            felis sollicitudin mauris. Integer in mauris eu
                            nibh euismod gravida.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {galleryImages.map((image) => (
                            <div
                                key={image}
                                className="h-48 w-full overflow-hidden sm:h-56 lg:h-60"
                            >
                                <img
                                    src={image}
                                    alt="Galeri sekolah"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </LandingLayout>
        </>
    );
}
