import Layout from "@/components/Layout";
import { chromeStoreHref } from "@/lib/brand";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  MessageSquareText,
  ScanText,
  ShieldCheck,
  Sparkles,
  Sprout,
  Store,
  TextQuote,
} from "lucide-react";

const demoImage = `${import.meta.env.BASE_URL}nurtur-reader-demo.png`;
const sidebarImage = `${import.meta.env.BASE_URL}nurtur-reader-sidebar.png`;

const featureBlocks = [
  {
    icon: ScanText,
    title: "Read the useful parts first",
    desc: "Nurtur looks at the page, compares it with what you already know, and tells you whether to read, skim, skip, or jump to specific sections.",
  },
  {
    icon: Sparkles,
    title: "Turn articles into learning views",
    desc: "Generate a clearer version of dense articles with takeaways, structure, and explanations that stay grounded in the source.",
  },
  {
    icon: MessageSquareText,
    title: "Ask questions in context",
    desc: "Highlight a passage and ask follow-ups without losing your place. Nurtur answers beside the article and can point back to the relevant section.",
  },
];

const trustItems = [
  "Only processes the page when you invoke the extension.",
  "Uses Google sign-in for account-backed features.",
  "Keeps generated answers tied to the article context.",
  "Built for Chrome today, with the web app coming later.",
];

export default function Home() {
  return (
    <Layout>
      <section
        className="relative min-h-[92svh] overflow-hidden bg-[#151814] px-5 pt-28 text-white md:px-8 md:pt-32"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(21, 24, 20, 0.92) 0%, rgba(21, 24, 20, 0.78) 42%, rgba(21, 24, 20, 0.28) 100%), url(${demoImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-center pb-20 pt-10 md:min-h-[calc(92svh-8rem)] md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-[#d9f0c8] backdrop-blur">
              <Sprout className="h-4 w-4" />
              Chrome extension for better reading
            </div>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal md:text-7xl">
              Nurtur Reader
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-100 md:text-2xl md:leading-10">
              Read online articles with an AI companion that helps you decide
              what matters, rewrite hard sections, and ask grounded questions
              without leaving the page.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={chromeStoreHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#d9f0c8] px-5 text-base font-semibold text-[#121610] transition-colors hover:bg-white"
              >
                <Store className="h-5 w-5" />
                Add to Chrome
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex min-h-12 items-center justify-center border border-white/30 px-5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                See how it works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#fbf8f1] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#286a5e]">
              How it works
            </div>
            <h2 className="text-4xl font-semibold leading-tight tracking-normal text-[#151814] md:text-6xl">
              A reader layer for the pages you already open.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5f5a52]">
              Nurtur appears inside Chrome, reads the article you are on, and
              gives you a focused way to understand it: recommendation first,
              rewrite when needed, questions wherever your attention lands.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                "Open an article",
                "Ask Nurtur for a reading recommendation or learning rewrite",
                "Highlight any passage to explain, summarize, rewrite, diagram, or ask",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-[#26231f]">
                  <Check className="mt-1 h-5 w-5 flex-none text-[#286a5e]" />
                  <span className="text-base leading-7">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden border border-[#d8cfbf] bg-white shadow-sm">
            <img
              src={sidebarImage}
              alt="Nurtur Reader sidebar showing article contents and reading controls"
              className="aspect-[16/10] h-full w-full object-cover object-left-top"
            />
          </div>
        </div>
      </section>

      <section id="features" className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#286a5e]">
              What it helps with
            </div>
            <h2 className="text-4xl font-semibold leading-tight tracking-normal text-[#151814] md:text-6xl">
              Less tab-hopping. More actual comprehension.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featureBlocks.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="border border-[#d8cfbf] bg-[#fbf8f1] p-6"
                >
                  <div className="mb-7 flex h-11 w-11 items-center justify-center bg-[#286a5e] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-normal text-[#151814]">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#5f5a52]">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf7f4] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden border border-[#addbd4] bg-white shadow-sm">
            <img
              src={demoImage}
              alt="Nurtur Reader answering grounded questions beside an online article"
              className="aspect-[16/10] h-full w-full object-cover object-left-top"
            />
          </div>
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center bg-[#286a5e] text-white">
              <TextQuote className="h-6 w-6" />
            </div>
            <h2 className="text-4xl font-semibold leading-tight tracking-normal text-[#151814] md:text-5xl">
              Built for active reading, not passive summaries.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4d5b57]">
              The extension is designed around the moment you get stuck: a term
              is vague, a claim needs checking, or a section deserves a cleaner
              explanation. Select the text, ask, and keep moving.
            </p>
          </div>
        </div>
      </section>

      <section id="privacy" className="bg-[#151814] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <ShieldCheck className="mb-6 h-10 w-10 text-[#d9f0c8]" />
            <h2 className="text-4xl font-semibold leading-tight tracking-normal md:text-5xl">
              Clear about what it touches.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Nurtur is a browser extension, so the website needs to be plain
              about page access, sign-in, and AI processing. The privacy policy
              is linked in the footer and Chrome listing.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item} className="border border-white/15 bg-white/[0.06] p-5">
                <BrainCircuit className="mb-5 h-5 w-5 text-[#d9f0c8]" />
                <p className="text-base leading-7 text-zinc-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f1] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl font-semibold leading-tight tracking-normal text-[#151814] md:text-5xl">
              Try Nurtur Reader in Chrome.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5f5a52]">
              Install the extension, open an article, and use Nurtur where the
              reading actually happens.
            </p>
          </div>
          <a
            href={chromeStoreHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 flex-none items-center justify-center gap-2 bg-[#286a5e] px-5 text-base font-semibold text-white transition-colors hover:bg-[#1f554b]"
          >
            Add to Chrome
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
