import { useEffect, useMemo, useState } from 'react';

type JurusanItem = {
    title: string;
    description: string;
    image: string;
};

const jurusanItems: JurusanItem[] = [
    {
        title: 'Rekayasa Perangkat Lunak',
        description:
            'Fokus pada pengembangan aplikasi web, mobile, dan sistem informasi modern.',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80',
    },
    {
        title: 'Teknik Komputer & Jaringan',
        description:
            'Belajar instalasi, konfigurasi, dan manajemen jaringan skala sekolah hingga enterprise.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    },
    {
        title: 'Multimedia',
        description:
            'Produksi konten kreatif, desain grafis, video, dan animasi untuk industri digital.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
    },
    {
        title: 'Akuntansi',
        description:
            'Menguasai laporan keuangan, perpajakan, dan sistem akuntansi berbasis software.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=80',
    },
    {
        title: 'Bisnis Daring & Pemasaran',
        description:
            'Strategi pemasaran digital, e-commerce, dan manajemen brand yang kompetitif.',
        image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1400&q=80',
    },
];

export function LandingJurusan() {
    const [activeIndex, setActiveIndex] = useState(0);
    const cardsPerView = 3;
    const items = useMemo(() => jurusanItems, []);
    const maxIndex = Math.max(0, items.length - cardsPerView);

    useEffect(() => {
        if (activeIndex > maxIndex) {
            setActiveIndex(maxIndex);
        }
    }, [activeIndex, maxIndex]);

    const translatePercent = (100 / cardsPerView) * activeIndex;

    return (
        <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                    Jurusan
                </p>
                <h2 className="text-2xl font-semibold lg:text-4xl">
                    Jelajahi Jurusan Unggulan
                </h2>
                <p className="max-w-2xl text-sm text-muted-foreground">
                    Pilih jurusan sesuai minatmu dan pelajari keterampilan yang
                    dibutuhkan industri.
                </p>
            </div>

            <div className="border border-border bg-card">
                <div className="flex items-center justify-between gap-4 border-b border-border p-6">
                    <div className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                        Carousel Jurusan
                    </div>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={() =>
                                setActiveIndex((prev) => Math.max(0, prev - 1))
                            }
                            className="border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                            disabled={activeIndex === 0}
                        >
                            Sebelumnya
                        </button>
                        <button
                            type="button"
                            onClick={() =>
                                setActiveIndex((prev) =>
                                    Math.min(maxIndex, prev + 1),
                                )
                            }
                            className="border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                            disabled={activeIndex === maxIndex}
                        >
                            Berikutnya
                        </button>
                    </div>
                </div>
                <div className="overflow-hidden p-6">
                    <div
                        className="flex gap-6 transition-transform duration-500"
                        style={{ transform: `translateX(-${translatePercent}%)` }}
                    >
                        {items.map((item) => (
                            <article
                                key={item.title}
                                className="flex basis-1/3 flex-col gap-4 border border-border bg-background p-4"
                            >
                                <div className="min-h-[160px] overflow-hidden border border-border bg-muted/30">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {item.description}
                                </p>
                                <button
                                    type="button"
                                    className="mt-auto w-fit border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary/50"
                                >
                                    Pelajari Jurusan
                                </button>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
