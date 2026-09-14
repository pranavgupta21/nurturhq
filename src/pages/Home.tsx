import Layout from "@/components/Layout";
import { chromeStoreHref } from "@/lib/brand";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Store,
} from "lucide-react";

const walkthroughVideo = `${import.meta.env.BASE_URL}animation/exports/nurtur-reader-walkthrough.mp4`;

export default function Home() {
  return (
    <Layout>
      <section
        className="relative min-h-[92svh] overflow-hidden bg-[#151814] px-5 pt-28 text-white md:px-8 md:pt-32"
        style={{
          backgroundImage: "linear-gradient(135deg, #151814 0%, #1f2a23 100%)",
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-center pb-20 pt-10 md:min-h-[calc(92svh-8rem)] md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal md:text-7xl">
              Nurtur Reader
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-100 md:text-2xl md:leading-10">
              Read and learn how <strong><em>YOU</em></strong> like to, not how
              it was written for everyone
            </p>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-start">
              <div className="flex flex-col items-center gap-2">
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
                <span className="text-sm font-semibold text-[#d9f0c8]">
                  Currently in Beta
                </span>
              </div>
              <a
                href="#reader-walkthrough"
                className="inline-flex min-h-12 items-center justify-center border border-white/30 px-5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                See how it works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="reader-walkthrough" className="bg-[#fbf8f1] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.3fr_0.7fr] lg:items-center">
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#286a5e]">
              How it works
            </div>
            <ul className="grid gap-4 text-base leading-7 text-[#26231f]">
              <li className="border-l-2 border-[#286a5e] pl-4">
                Find out which parts are worth reading
              </li>
              <li className="border-l-2 border-[#286a5e] pl-4">
                Rewrite based on your existing knowledge and reading preferences
              </li>
              <li className="border-l-2 border-[#286a5e] pl-4">
                Rewrite with inline explanations, diagrams, images, equations,
                links
              </li>
              <li className="border-l-2 border-[#286a5e] pl-4">
                Have detailed in-context discussions with AI, not one humungous
                chat
              </li>
            </ul>
          </div>
          <div className="w-full overflow-hidden border border-[#d8cfbf] bg-[#151814] shadow-sm">
            <video
              src={walkthroughVideo}
              aria-label="Animated walkthrough of Nurtur Reader recommending, rewriting, and answering questions on an article"
              className="aspect-video h-full w-full object-cover"
              autoPlay
              controls
              loop
              muted
              playsInline
            />
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
          <div className="flex flex-none flex-col items-center gap-2">
            <a
              href={chromeStoreHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#286a5e] px-5 text-base font-semibold text-white transition-colors hover:bg-[#1f554b]"
            >
              Add to Chrome
              <ArrowRight className="h-4 w-4" />
            </a>
            <span className="text-sm font-semibold text-[#286a5e]">
              Currently in Beta
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
