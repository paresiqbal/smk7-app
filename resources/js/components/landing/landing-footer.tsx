const quickLinks = [
    'Program Keahlian',
    'Profil Sekolah',
    'Mitra Industri',
    'Pendaftaran Siswa Baru',
];

const infoLinks = [
    'Panduan Pendaftaran',
    'Beasiswa Siswa Berprestasi',
    'Kalender Akademik',
    'Berita Terkini',
];

const legalLinks = ['Kebijakan Privasi', 'Syarat & Ketentuan'];

export function LandingFooter() {
    return (
        <footer className="-mx-8 border-t border-white/10 bg-[#1A3263] text-white sm:-mx-10 lg:-mx-16">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-8 sm:px-8 lg:px-10">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold">
                            SMKN 7 REJANG LEBONG
                        </h3>
                        <p className="text-sm leading-relaxed text-white/70">
                            SMKN 7 Rejang Lebong adalah institusi pendidikan
                            vokasi terkemuka di Provinsi Bengkulu yang
                            berfokus pada pengembangan bakat dan karakter
                            siswa.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                            Tautan Cepat
                        </h4>
                        <ul className="flex flex-col gap-2 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link} className="text-white/90">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                            Informasi
                        </h4>
                        <ul className="flex flex-col gap-2 text-sm">
                            {infoLinks.map((link) => (
                                <li key={link} className="text-white/90">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                            Hubungi Kami
                        </h4>
                        <div className="flex flex-col gap-2 text-sm text-white/90">
                            <p>
                                Jl. Raya Curup - Lubuk Linggau, Rejang Lebong,
                                Bengkulu
                            </p>
                            <p>+62 822 1234 5678</p>
                            <p>admin@smkn7rl.sch.id</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/70 lg:flex-row lg:items-center lg:justify-between">
                    <p>
                        © 2026 SMKN 7 REJANG LEBONG. Didesain dengan hati untuk
                        Masa Depan.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-white/90">
                        {legalLinks.map((link) => (
                            <span key={link}>{link}</span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
