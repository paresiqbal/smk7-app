const partnerList = [
    'PT Nusantara Digital',
    'CV Teknologi Maju',
    'Indo Media Kreatif',
    'Sentra Otomotif Jaya',
    'Kuliner Rasa Nusantara',
];

export function LandingKerjaSama() {
    return (
        <section className="flex flex-col gap-6" id="kerja-sama">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                    Mitra Industri &amp; Kerjasama
                </p>
                <h2 className="text-2xl font-semibold lg:text-4xl">
                    Mitra Industri &amp; Kerjasama
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Kami menjalin kerjasama strategis dengan berbagai perusahaan
                    terkemuka untuk program magang dan penyerapan tenaga kerja.
                </p>
            </div>
            <div className="grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {partnerList.map((partner) => (
                    <div
                        key={partner}
                        className="flex items-center justify-center gap-4 px-2 py-2"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted/30 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            Logo
                        </div>
                        <p className="text-sm font-semibold text-foreground">
                            {partner}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
