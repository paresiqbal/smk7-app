export function LandingSambutan() {
    return (
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="h-[320px] w-full overflow-hidden border border-black/10 dark:border-white/10 lg:h-[420px]">
                <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
                    alt="Kepala sekolah"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                    Sambutan Kepala Sekolah
                </p>
                <h2 className="text-2xl font-semibold lg:text-4xl">
                    Membangun Generasi Unggul &amp; Berakhlak Mulia
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    &quot;Selamat datang di website resmi pendaftaran siswa baru
                    SMKN 7 Rejang Lebong. Kami berkomitmen mencetak generasi
                    unggul yang siap kerja, cerdas, dan kompetitif.&quot;
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Di era industri 4.0, tantangan yang dihadapi generasi muda
                    semakin kompleks. Oleh karena itu, kurikulum kami dirancang
                    secara dinamis bersama mitra industri untuk memastikan
                    lulusan kami siap kerja, berwirausaha, atau melanjutkan
                    pendidikan ke jenjang yang lebih tinggi.
                </p>
            </div>
        </section>
    );
}
