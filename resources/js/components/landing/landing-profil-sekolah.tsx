export function LandingProfilSekolah() {
    return (
        <section className="mx-auto flex w-full max-w-4xl flex-col gap-6">
            <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                    Profil Sekolah
                </p>
                <h2 className="text-2xl font-semibold lg:text-4xl">
                    Profil SMKN 7 Rejang Lebong
                </h2>
            </div>
            <div className="aspect-video w-full overflow-hidden border border-border bg-muted/20">
                <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/wQRIQdKCMRY"
                    title="Profil Sekolah"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </section>
    );
}
