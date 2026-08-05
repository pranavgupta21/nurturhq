import Layout from "@/components/Layout";
import { demoHref } from "@/lib/brand";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Database,
  GitBranch,
  Gauge,
  Layers3,
  MailCheck,
  Network,
} from "lucide-react";

const businessModel = [
  {
    icon: Gauge,
    title: "0-1 in 2 weeks, not 6 months",
    desc: "See actual results and know what's working in 2 weeks, instead of still guessing after 6 months.",
  },
  {
    icon: GitBranch,
    title: "Then make your bets",
    desc: "Build more of your roadmap with us, take over when you're ready.",
  },
];

const engineeringLevers = [
  {
    icon: BrainCircuit,
    title: "Model intelligence",
    desc: "Some models are better at specific revenue intelligence tasks than others. Not everything needs Opus 5. Some tasks need a model that is 100x cheaper, really.",
  },
  {
    icon: Network,
    title: "Agent graphs",
    desc: "Break down revenue tasks at the right points so agents can improve quality, reduce retries, and lower cost.",
  },
  {
    icon: Layers3,
    title: "Context graphs",
    desc: "Increase quality, save money, prolong context windows, and make responses faster by moving the right account, deal, and buyer context at the right time.",
  },
  {
    icon: Database,
    title: "Memory",
    desc: "Individual, team, and organization memory and preferences that make every revenue intelligence workflow more useful over time.",
  },
];

const metrics = [
  {
    value: "4.3x",
    label: "Lower costs",
  },
  {
    value: ">97%",
    label: "Fact recall in agent outputs",
  },
  {
    value: "~3x",
    label: "Longer running context windows",
  },
  {
    value: "3x",
    label: "Faster agent responses",
  },
];

function SectionIntro({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-5 text-lg leading-8 text-zinc-600">{desc}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <section
        id="business-model"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#f8faf7_0%,#ffffff_70%)] px-6 pb-24 pt-36 md:pb-32 md:pt-44"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-zinc-200" />
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-5xl text-center"
          >
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-zinc-950 md:text-7xl">
              Custom revenue intelligence, without waiting 6 months.
            </h1>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-2">
            {businessModel.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="rounded-[1.75rem] border border-zinc-200 bg-white p-7 shadow-sm"
                >
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="ownership"
        className="border-y border-zinc-900 bg-zinc-950 px-6 py-20 text-white md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mx-auto max-w-6xl text-center text-4xl font-semibold tracking-tight md:whitespace-nowrap md:text-6xl">
            Transparent implementation
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-8">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary">
                <Network className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
                You own the knowledge
              </h3>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                The generated knowledge graph, memory & context, will be owned
                by you, not some black box AI platform.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-8">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary">
                <Layers3 className="h-6 w-6" />
              </div>
              <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
                On-prem or cloud
              </h3>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Run your revenue intelligence system wherever your security,
                compliance, and operations need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="engineering" className="bg-[#f7f8f5] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            title="State of the art AI, built by the best engineers"
            desc="We optimize the models, the task breakdown, and the knowledge layer together so that quality, cost, speed, and session length improve at the same time."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {engineeringLevers.map((lever) => {
              const Icon = lever.icon;
              return (
                <motion.div
                  key={lever.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="rounded-[1.75rem] border border-zinc-200 bg-white p-7 shadow-sm"
                >
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold text-zinc-950">
                    {lever.title}
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-600">{lever.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-3 rounded-[1.75rem] border border-zinc-200 bg-white p-4 shadow-sm md:grid-cols-2 lg:grid-cols-4">
            {[
              "Evals",
              "AI judges",
              "Self-serve Agent iteration platform",
              "Automated and manual learning",
            ].map((item) => (
              <div
                key={item}
                className="flex min-h-16 items-center justify-center rounded-2xl bg-[#f7f8f5] px-5 text-center text-base font-semibold text-zinc-950"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metrics" className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro title="Measurable outcomes, not AI slop" />

          <div className="mt-14 grid divide-y divide-zinc-200 md:grid-cols-4 md:divide-x md:divide-y-0">
            {metrics.map((metric) => (
              <div key={metric.label} className="py-7 md:px-8 md:py-3">
                <div className="text-5xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
                  {metric.value}
                </div>
                <div className="mt-4 text-base font-medium leading-6 text-zinc-600">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-24 text-white md:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <MailCheck className="mb-7 h-10 w-10 text-primary" />
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Bring a revenue workflow worth proving.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            We'll help you scope the problem, desired outcomes and timeline.
          </p>
          <a
            href={demoHref}
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Request a workflow review
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
