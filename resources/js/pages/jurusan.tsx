import { Head, usePage } from '@inertiajs/react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { LandingLayout } from '@/layouts/landing-layout';

type JurusanModule = {
    title: string;
    file: string;
};

type JurusanData = {
    title: string;
    image: string;
    description: string;
    prospects: string[];
    learning: string[];
    modules: JurusanModule[];
};

export default function Jurusan({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth, jurusan } = usePage().props as {
        auth: { user?: unknown };
        jurusan: JurusanData;
    };

    return (
        <>
            <Head title={jurusan.title}>
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
                            src={jurusan.image}
                            alt={jurusan.title}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                            <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
                                {jurusan.title}
                            </h1>
                        </div>
                    </div>
                    <div className="max-w-4xl text-sm leading-relaxed text-muted-foreground">
                        {jurusan.description}
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-semibold">
                                Prospek Lulusan
                            </h2>
                            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                                {jurusan.prospects.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="text-primary">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-xl font-semibold">
                                Yang Dipelajari
                            </h2>
                            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                                {jurusan.learning.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="text-primary">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex max-w-4xl flex-col gap-3">
                        <h2 className="text-xl font-semibold">
                            Modul Pembelajaran
                        </h2>
                        <Accordion type="single" collapsible>
                            {jurusan.modules.map((module) => (
                                <AccordionItem
                                    key={module.title}
                                    value={module.title}
                                    className="px-4"
                                >
                                    <AccordionTrigger>
                                        {module.title}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <span>
                                                Unduh modul pembelajaran untuk
                                                dipelajari lebih lanjut.
                                            </span>
                                            <a
                                                href={module.file}
                                                download
                                                className="border border-primary/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:border-primary/60"
                                            >
                                                Download
                                            </a>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>
            </LandingLayout>
        </>
    );
}
