import Layout from "@/components/Layout";
import { brand, demoHref } from "@/lib/brand";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  DatabaseZap,
  LineChart,
  MailCheck,
  Target,
  TriangleAlert,
} from "lucide-react";

const workflows = [
  {
    icon: TriangleAlert,
    title: "Deal risk",
    desc: "Clear signals on stalled deals, missing champions, weak next steps, and forecast drift.",
  },
  {
    icon: LineChart,
    title: "Pipeline review",
    desc: "Inspection-ready summaries that help managers focus on the few moves that matter.",
  },
  {
    icon: DatabaseZap,
    title: "CRM hygiene",
    desc: "Suggested updates and stale-field flags without turning reps into data-entry clerks.",
  },
];

const process = [
  {
    step: "01",
    title: "Map",
    desc: "Capture the definitions, handoffs, and review rituals that make your team different.",
  },
  {
    step: "02",
    title: "Build",
    desc: "Ship one workflow that fits your CRM, operating cadence, and manager expectations.",
  },
  {
    step: "03",
    title: "Measure",
    desc: "Track usage and quality before expanding into the next revenue workflow.",
  },
];

function SectionIntro({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-zinc-600">{desc}</p>
    </div>
  );
}

function PipelineMockup() {
  const deals = [
    {
      name: "Northstar Bank",
      amount: "$118k",
      label: "Champion unverified",
      labelClass: "bg-amber-50 text-amber-700",
    },
    {
      name: "Helio Systems",
      amount: "$64k",
      label: "Next step missing",
      labelClass: "bg-red-50 text-red-700",
    },
    {
      name: "Arcwell Health",
      amount: "$91k",
      label: "Procurement moving",
      labelClass: "bg-emerald-50 text-emerald-700",
    },
  ];

  return (
    <div className="rounded-[2rem] border border-zinc-200 bg-white p-4 shadow-2xl shadow-zinc-200/70 md:p-5">
      <div className="rounded-[1.5rem] bg-[#f7f8f5] p-5 md:p-6">
        <div className="flex flex-col gap-4 border-b border-zinc-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-zinc-950">
              Pipeline review
            </div>
            <div className="mt-1 text-sm text-zinc-500">
              Generated for Friday leadership sync
            </div>
          </div>
          <div className="w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
            42 deals analyzed
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.82fr]">
          <div className="space-y-3">
            {deals.map((deal) => (
              <div
                key={deal.name}
                className="rounded-2xl border border-zinc-200 bg-white p-4"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="font-semibold text-zinc-950">
                      {deal.name}
                    </div>
                    <div className="mt-1 text-sm text-zinc-500">
                      {deal.amount}
                    </div>
                  </div>
                  <div
                    className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${deal.labelClass}`}
                  >
                    {deal.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-zinc-950 p-5 text-white">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Target className="h-4 w-4" />
              Manager focus
            </div>
            <p className="mt-5 text-2xl font-semibold leading-tight">
              Confirm buyer access on the three largest commit deals.
            </p>
            <div className="mt-6 space-y-3 text-sm leading-6 text-zinc-300">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Update close dates on slipped opportunities.
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Ask reps for explicit next steps before EOD.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8faf7_0%,#ffffff_70%)] px-6 pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="absolute inset-x-0 top-0 h-px bg-zinc-200" />
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-5xl text-center"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Revenue intelligence built around your GTM motion
            </div>

            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-zinc-950 md:text-7xl">
              Custom revenue intelligence, built to be used.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
              {brand.name} turns your sales process into focused AI workflows for
              pipeline review, deal risk, CRM quality, and rep follow-through.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={demoHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-zinc-950/10 transition-colors hover:bg-zinc-800"
              >
                Map your first workflow
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#workflows"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-base font-semibold text-zinc-950 transition-colors hover:bg-zinc-50"
              >
                See examples
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mx-auto mt-16 max-w-5xl"
          >
            <PipelineMockup />
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 border-t border-zinc-200 pt-10 text-center md:grid-cols-3">
            <div>
              <div className="text-4xl font-semibold tracking-tight text-zinc-950">
                3-4h
              </div>
              <div className="mt-3 text-lg text-zinc-500">
                rep time saved daily
              </div>
            </div>
            <div>
              <div className="text-4xl font-semibold tracking-tight text-zinc-950">
                24/7
              </div>
              <div className="mt-3 text-lg text-zinc-500">
                deal risk monitoring
              </div>
            </div>
            <div>
              <div className="text-4xl font-semibold tracking-tight text-zinc-950">
                1:1
              </div>
              <div className="mt-3 text-lg text-zinc-500">
                fit to your process
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="border-y border-zinc-900 bg-zinc-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Why generic AI fails
            </div>
            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
              Revenue teams do not need another blank canvas.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Outputs are not tied to the sales process.",
              "Managers cannot see whether reps adopt the workflow.",
              "CRM context is incomplete, stale, or too generic.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-base leading-7 text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflows" className="bg-[#f7f8f5] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Workflows"
            title="Start with one high-value motion."
            desc="Each workflow is intentionally narrow, tuned to your data and process, and easy for managers and reps to adopt."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {workflows.map((workflow) => {
              const Icon = workflow.icon;
              return (
                <motion.div
                  key={workflow.title}
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
                    {workflow.title}
                  </h3>
                  <p className="mt-4 leading-7 text-zinc-600">
                    {workflow.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Implementation"
            title="Small enough to ship. Serious enough to matter."
            desc={`The first build proves that the workflow is useful before ${brand.name} expands across the revenue operating system.`}
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {process.map((item) => (
              <div key={item.step} className="border-t border-zinc-200 pt-7">
                <div className="font-mono text-sm font-semibold text-primary">
                  {item.step}
                </div>
                <h3 className="mt-7 text-2xl font-semibold text-zinc-950">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-24 text-white md:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <MailCheck className="mb-7 h-10 w-10 text-primary" />
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Bring one messy revenue workflow.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            We will map the signals, define the output, and show what {brand.name}{" "}
            would build first.
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
