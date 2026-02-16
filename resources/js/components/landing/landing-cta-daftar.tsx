export function LandingCtaDaftar() {
    return (
        <section
            className="relative overflow-hidden bg-gradient-to-br from-[#1A3263] via-[#233d73] to-[#547792] px-6 py-10 text-white sm:px-10 lg:px-16"
            id="daftar"
        >
            <div className="absolute inset-0 opacity-30">
                <div className="absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-primary/40 blur-3xl" />
                <div className="absolute right-0 top-6 h-40 w-40 rounded-full bg-primary/30 blur-2xl" />
            </div>
            <div className="relative mx-auto flex max-w-4xl flex-col gap-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                    Pendaftaran Siswa Baru
                </p>
                <h2 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl lg:text-4xl">
                    Siap Menjadi Bagian dari SMKN 7 Rejang Lebong?
                </h2>
                <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                    Pendaftaran gelombang pertama masih dibuka. Segera
                    daftarkan diri Anda dan raih masa depan gemilang bersama
                    kami.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="#daftar"
                        className="border border-white/30 bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1A3263] transition-colors hover:bg-white/90"
                    >
                        Daftar Sekarang
                    </a>
                    <a
                        href="#kontak"
                        className="border border-white/40 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-white"
                    >
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </section>
    );
}
