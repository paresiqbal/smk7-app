import { Head, usePage } from '@inertiajs/react';
import { LandingLayout } from '@/layouts/landing-layout';

const activities = [
    {
        title: 'Basket & Futsal',
        description:
            'Latihan rutin untuk membangun kekompakan, disiplin, dan prestasi olahraga sekolah.',
    },
    {
        title: 'Paskibra',
        description:
            'Membentuk karakter, kepemimpinan, dan ketegasan melalui latihan baris-berbaris.',
    },
    {
        title: 'English Club',
        description:
            'Kegiatan bahasa asing dengan fokus pada komunikasi, debat, dan presentasi.',
    },
    {
        title: 'Desain Grafis',
        description:
            'Belajar desain kreatif, branding, dan produksi konten digital modern.',
    },
    {
        title: 'Kewirausahaan',
        description:
            'Menumbuhkan jiwa bisnis melalui proyek dan simulasi usaha siswa.',
    },
    {
        title: 'Pramuka',
        description:
            'Pembinaan mental, kemandirian, dan kepedulian melalui kegiatan kepramukaan.',
    },
];

export default function Ekstrakulikuler({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Ekstrakulikuler">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=jetbrains-mono:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <LandingLayout canRegister={canRegister && !auth.user}>
                <section className="flex flex-col gap-10">
                    <div className="flex flex-col gap-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                            Ekstrakulikuler
                        </p>
                        <h1 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl lg:text-5xl">
                            Kegiatan Ekstrakulikuler
                        </h1>
                        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                            Beragam kegiatan di luar kelas yang dirancang untuk
                            mengasah soft skill, kepemimpinan, dan kreativitas
                            siswa. Pilih kegiatan yang sesuai minatmu dan
                            kembangkan potensimu bersama SMKN 7.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {activities.map((activity) => (
                            <div
                                key={activity.title}
                                className="flex flex-col gap-3 border border-border p-5"
                            >
                                <h2 className="text-lg font-semibold">
                                    {activity.title}
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    {activity.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </LandingLayout>
        </>
    );
}
