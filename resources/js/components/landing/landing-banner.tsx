import { useEffect, useMemo, useState } from 'react';

const imagePool = [
    'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80',
];

export function LandingBanner() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = useMemo(
        () => imagePool.sort(() => 0.5 - Math.random()).slice(0, 3),
        [],
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative w-full overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="flex flex-col gap-6 px-6 py-10 lg:px-12 lg:py-16">
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                        SMKN 7
                    </span>
                    <h1 className="text-3xl font-semibold leading-tight lg:text-5xl">
                        Sekolah kejuruan yang fokus pada keterampilan masa
                        depan.
                    </h1>
                    <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                        Jelajahi jurusan unggulan, program ekstrakulikuler, dan
                        pengalaman belajar yang dirancang untuk siap kerja dan
                        siap kuliah.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href="#tentang-sekolah"
                            className="border border-primary/20 bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            Tentang Sekolah
                        </a>
                        <a
                            href="#daftar"
                            className="border border-primary/20 px-6 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary/40"
                        >
                            Daftar Sekarang
                        </a>
                    </div>
                </div>
                <div className="relative min-h-[260px] bg-black/5 lg:min-h-[420px]">
                    {images.map((src, index) => (
                        <img
                            key={src}
                            src={src}
                            alt="Aktivitas sekolah"
                            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                                index === activeIndex
                                    ? 'opacity-100'
                                    : 'opacity-0'
                            }`}
                        />
                    ))}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                className={`h-2.5 w-8 transition-colors ${
                                    index === activeIndex
                                        ? 'bg-white'
                                        : 'bg-white/40'
                                }`}
                                aria-label={`Slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
