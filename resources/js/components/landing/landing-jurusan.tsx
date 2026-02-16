import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

const jurusanList = [
    {
        title: 'Teknik Kendaraan Ringan',
        description:
            'Belajar perawatan dan perbaikan kendaraan modern dengan praktik di bengkel sekolah.',
        image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80',
        cta: 'Lihat Detail',
        slug: 'teknik-kendaraan-ringan',
    },
    {
        title: 'Teknik Komputer dan Jaringan',
        description:
            'Fokus pada jaringan, keamanan, dan infrastruktur IT untuk dunia kerja berbasis teknologi.',
        image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80',
        cta: 'Lihat Detail',
        slug: 'teknik-komputer-dan-jaringan',
    },
    {
        title: 'Akuntansi',
        description:
            'Mengasah keterampilan laporan keuangan, perpajakan, dan manajemen administrasi bisnis.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
        cta: 'Lihat Detail',
        slug: 'akuntansi',
    },
];

export function LandingJurusan() {
    return (
        <section className="flex flex-col gap-6" id="jurusan">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                        Jurusan Unggulan
                    </p>
                    <h2 className="text-2xl font-semibold lg:text-4xl">
                        Pilihan Jurusan untuk Masa Depan
                    </h2>
                    <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        Kurikulum kami disusun bersama industri agar siswa siap
                        kerja, siap wirausaha, dan siap melanjutkan studi.
                    </p>
                </div>
            </div>
            <Carousel opts={{ align: 'start' }} className="w-full">
                <CarouselContent>
                    {jurusanList.map((jurusan) => (
                        <CarouselItem
                            key={jurusan.title}
                            className="basis-3/4 sm:basis-1/2 lg:basis-1/4"
                        >
                            <div className="p-1">
                                <Card className="flex h-full flex-col overflow-hidden border-border">
                                    <div className="h-36 w-full overflow-hidden bg-muted/20 lg:h-40">
                                        <img
                                            src={jurusan.image}
                                            alt={jurusan.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <CardContent className="flex flex-1 flex-col gap-3 p-5">
                                        <h3 className="text-lg font-semibold">
                                            {jurusan.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            {jurusan.description}
                                        </p>
                                        <div className="mt-auto">
                                            <a
                                                href={`/jurusan/${jurusan.slug}`}
                                                className="border border-primary/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:border-primary/60"
                                            >
                                                {jurusan.cta}
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="mt-3 flex items-center justify-end gap-2">
                    <CarouselPrevious className="static translate-y-0 bg-background shadow-sm" />
                    <CarouselNext className="static translate-y-0 bg-background shadow-sm" />
                </div>
            </Carousel>
        </section>
    );
}
