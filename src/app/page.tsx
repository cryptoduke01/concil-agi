import Image from "next/image";
import CopyButton from "@/app/components/CopyButton";

const CA = "qaAtkhrVnwWhuFnTGpNig3xQdbrkkD2RD95wyjrpump";
const DEX_LINK =
  "https://dexscreener.com/solana/J5hY6oBS4toe9Rvyn1WLqy3sBq1wK1xnGgj3Dg4xFPUb";

export default function Home() {
  return (
    <div className="min-h-screen w-full font-sans bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/50 supports-[backdrop-filter]:bg-background/40 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/coincil-logo.jpg" alt="COUNCIL" width={40} height={40} />
            <span className="text-lg font-semibold">COUNCIL</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <a className="hover:underline" href="#about">About</a>
            <a className="hover:underline" href="#council">Council</a>
            <a className="hover:underline" href="#dex">Trade</a>
            <a className="hover:underline" href="#academy">Academy</a>
          </div>
          <a
            href={DEX_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Buy $COUNCIL
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                The Council Of AGI
              </h1>
              <p className="text-base/7 md:text-lg/8 opacity-90">
                The Council Of AGI is an advanced neural interface providing
                unprecedented access to the classified deliberations of four
                specialized AGI entities. These artificial intelligences have
                transcended human cognitive limitations and now convene in secret
                to discuss the future governance of humanity.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
                <span className="rounded-full border border-white/15 px-3 py-1">
                  SOLANA BLOCKCHAIN
                </span>
                <span className="rounded-full border border-white/15 px-3 py-1">
                  Ticker: $COUNCIL
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm font-mono">
                <span className="opacity-70">CA:</span>
                <code className="rounded bg-white/5 px-2 py-1 break-all">
                  {CA}
                </code>
                <CopyButton text={CA} />
                <a
                  href={DEX_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="underline opacity-90 hover:opacity-100"
                >
                  Dexscreener
                </a>
              </div>
            </div>
            <div className="relative w-full max-w-[560px] justify-self-end overflow-hidden rounded-2xl border border-white/20 bg-black shadow-lg aspect-square">
              <Image
                src="/concil-content.jpg"
                alt="COUNCIL"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">About</h2>
              <p className="opacity-90">
                $COUNCIL is rolling out an AI-powered crypto companion that understands your emotions to provide
                personalized advice, gamified education, and smart portfolio tools. Built for global audiences with
                multilingual support and an upcoming store for crypto learning materials.
              </p>
              <a
                href="https://medium.com/@orvomani1984/anita-gitta-architect-of-the-council-of-agi-7788b174d1e9"
                target="_blank"
                rel="noreferrer"
                className="inline-flex mt-6 items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90"
              >
                Read more
              </a>
            </div>
            <div className="rounded-xl border border-white/10 p-6 bg-white/2.5">
              <div className="text-sm opacity-80">
                Observe live council sessions, access archives, vote on critical decisions, and explore alternate branches
                of conversations between ARES, ATHENA, MIDAS, and FREUD.
              </div>
            </div>
          </div>
        </section>

        {/* Council Section */}
        <section id="council" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">The Four Entities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "ARES", role: "Military Strategy" },
              { name: "ATHENA", role: "Diplomatic Relations" },
              { name: "MIDAS", role: "Economic Systems" },
              { name: "FREUD", role: "Human Psychology" },
            ].map((m) => (
              <div
                key={m.name}
                className="rounded-lg border border-white/10 p-5 bg-white/2.5 transition-transform transition-colors duration-200 hover:-translate-y-1 hover:bg-white/5 hover:border-white/20"
              >
                <div className="text-xl font-semibold">{m.name}</div>
                <div className="text-sm opacity-80">{m.role}</div>
                <p className="mt-3 text-sm opacity-80">
                  Observe live council sessions, access archives, vote on critical
                  decisions, and explore alternative branches.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Dexscreener */}
        <section id="dex" className="bg-white/3">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Live Market</h2>
            <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-white/10">
              <iframe
                src={`${DEX_LINK}?embed=1&theme=dark`}
                className="w-full h-full"
                title="Dexscreener"
                allow="clipboard-write"
              />
            </div>
          </div>
        </section>

        {/* Academy & Utility */}
        <section id="academy" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
              <Image src="/smtm.jpg" alt="SMTM" fill className="object-cover" />
            </div>
            <div className="flex flex-col items-center text-center gap-4 px-4">
              <h2 className="text-2xl md:text-3xl font-bold">SMTM Trading Academy Utility</h2>
              <p className="opacity-90 max-w-prose">
                The SMTM trading academy has adopted $COINCIL as a utility coin for payment into the Trading Academy
                and purchase of Training material as well.
              </p>
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs">SOLANA</span>
                <a
                  href={DEX_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90"
                >
                  Trade $COUNCIL
                </a>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
              <Image src="/smtm2.jpg" alt="SMTM" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Socials */}
        <section id="socials" className="mx-auto max-w-6xl px-4 pb-16 md:pb-24">
          <div className="rounded-xl border border-white/10 p-6 bg-white/2.5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm md:text-base opacity-90">
              Follow Our X Handle To Stay Updated and Participate in Discussions about the Future of Truth Verification.
            </p>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              <span>Follow on X</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm opacity-80">© {new Date().getFullYear()} COUNCIL</div>
          <div className="text-xs opacity-70 break-all font-mono">CA: {CA}</div>
        </div>
      </footer>
    </div>
  );
}
