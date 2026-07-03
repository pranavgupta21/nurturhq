import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  DatabaseZap,
  LineChart,
  MailCheck,
  ShieldCheck,
  Target,
  TriangleAlert,
  Users,
} from "lucide-react";

const demoHref =
  "mailto:pranav@trycosell.com?subject=CoSell%20workflow%20demo";

const workflows = [
  {
    icon: TriangleAlert,
    title: "Deal risk alerts",
    desc: "Detect missing champions, stalled mutual plans, weak next steps, and forecast drift before the review meeting.",
  },
  {
    icon: LineChart,
    title: "Pipeline review",
    desc: "Turn messy CRM, call notes, and emails into inspection-ready pipeline summaries for every manager.",
  },
  {
    icon: DatabaseZap,
    title: "CRM hygiene",
    desc: "Suggest updates, flag stale fields, and keep opportunity context clean without adding admin work.",
  },
  {
    icon: MailCheck,
    title: "Follow-through",
    desc: "Generate account-specific follow-ups, recap emails, and next-step nudges that match your sales motion.",
  },
];

const audiences = [
  {
    title: "CROs",
    desc: "See where forecast confidence is real, where deals are slipping, and which teams need operating support.",
  },
  {
    title: "RevOps",
    desc: "Encode the actual revenue process into AI workflows instead of forcing every team into generic tooling.",
  },
  {
    title: "Sales leaders",
    desc: "Give managers a consistent way to inspect deals, coach reps, and drive adoption across the team.",
  },
];

const process = [
  {
    step: "01",
    title: "Map the motion",
    desc: "We identify the handoffs, signals, definitions, and review rituals that actually run your business.",
  },
  {
    step: "02",
    title: "Build the workflows",
    desc: "CoSell packages those rules into AI agents for pipeline review, deal risk, CRM updates, and follow-up.",
  },
  {
    step: "03",
    title: "Measure adoption",
    desc: "Every workflow is tied to usage, quality, and outcome signals so teams know what is working.",
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
    <div className="max-w-3xl">
      <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-muted-foreground">{desc}</p>
    </div>
  );
}

function PipelineMockup() {
  return (
    <div className="rounded-[1.5rem] border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/70">
      <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
        <div>
          <div className="text-sm font-semibold text-zinc-950">
            Friday pipeline review
          </div>
          <div className="text-xs text-zinc-500">Generated 8:15 AM</div>
        </div>
        <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          42 deals analyzed
        </div>
      </div>

      <div className="grid gap-4 p-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          {[
            {
              name: "Northstar Bank",
              risk: "Champion unverified",
              amount: "$118k",
              color: "bg-amber-50 text-amber-700",
            },
            {
              name: "Helio Systems",
              risk: "Next step missing",
              amount: "$64k",
              color: "bg-red-50 text-red-700",
            },
            {
              name: "Arcwell Health",
              risk: "Procurement moving",
              amount: "$91k",
              color: "bg-emerald-50 text-emerald-700",
            },
          ].map((deal) => (
            <div
              key={deal.name}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-semibold text-zinc-950">{deal.name}</div>
                  <div className="mt-1 text-sm text-zinc-500">{deal.amount}</div>
                </div>
                <div
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${deal.color}`}
                >
                  {deal.risk}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-zinc-950 p-5 text-white">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Target className="h-4 w-4" />
            Recommended manager focus
          </div>
          <div className="mt-5 space-y-4">
            {[
              "Confirm economic buyer path on top 3 commit deals",
              "Push CRM close-date changes for 6 slipped opportunities",
              "Ask reps for explicit next step on 11 silent deals",
            ].map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-6">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BriefMockup() {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-zinc-950">
            Account brief
          </div>
          <div className="text-xs text-zinc-500">Acme Manufacturing</div>
        </div>
        <BarChart3 className="h-5 w-5 text-primary" />
      </div>

      <div className="mt-5 space-y-4 text-sm">
        <div>
          <div className="mb-2 font-semibold text-zinc-950">Buying signals</div>
          <div className="rounded-2xl bg-emerald-50 p-3 leading-6 text-emerald-900">
            CFO asked for ROI proof. VP Sales mentioned Q4 expansion pressure.
          </div>
        </div>
        <div>
          <div className="mb-2 font-semibold text-zinc-950">Suggested next step</div>
          <div className="rounded-2xl bg-zinc-100 p-3 leading-6 text-zinc-700">
            Send a two-path business case and confirm procurement owner.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8faf7_0%,#ffffff_78%)] px-6 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="absolute inset-x-0 top-0 h-px bg-zinc-200" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Built for your GTM motion, not a generic AI platform
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-zinc-950 md:text-6xl lg:text-7xl">
              Custom AI revenue workflows for teams that need adoption.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 md:text-xl">
              CoSell builds workflow-specific revenue intelligence for pipeline
              review, deal risk, CRM hygiene, account research, and rep
              follow-through.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-5 border-t border-zinc-200 pt-6 text-sm">
              <div>
                <div className="text-2xl font-bold text-zinc-950">3-4h</div>
                <div className="mt-1 text-zinc-500">rep time saved daily</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-zinc-950">24/7</div>
                <div className="mt-1 text-zinc-500">deal risk monitoring</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-zinc-950">1:1</div>
                <div className="mt-1 text-zinc-500">fit to your process</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            <PipelineMockup />
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <BriefMockup />
              <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-950">
                  <Users className="h-5 w-5 text-primary" />
                  Adoption signal
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    ["Managers using reviews", "84%"],
                    ["CRM suggestions accepted", "71%"],
                    ["Follow-ups edited lightly", "63%"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="text-zinc-500">{label}</span>
                        <span className="font-semibold text-zinc-950">{value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-100">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-950 px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Why generic AI fails
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Revenue teams do not need another blank canvas.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Outputs are not tied to the sales process.",
              "Managers cannot see whether reps adopt the workflow.",
              "CRM context is incomplete, stale, or too generic.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-zinc-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflows" className="bg-white px-6 py-18 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="What CoSell builds"
            title="Workflow-specific intelligence that shows up where teams already work."
            desc="Each workflow is tailored to your definitions, stages, review cadence, CRM fields, and coaching habits."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workflows.map((workflow) => {
              const Icon = workflow.icon;
              return (
                <motion.div
                  key={workflow.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 transition-colors hover:border-primary/60 hover:bg-white"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-950">
                    {workflow.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {workflow.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#f7f8f5] px-6 py-18 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Implementation"
            title="A build process for revenue teams that cannot wait six months."
            desc="CoSell starts with one high-value workflow, proves usage, then expands into a connected operating system for the revenue team."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {process.map((item) => (
              <div key={item.step} className="rounded-3xl border border-zinc-200 bg-white p-7">
                <div className="font-mono text-lg font-semibold text-primary">
                  {item.step}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-zinc-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="teams" className="bg-white px-6 py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            eyebrow="Who it helps"
            title="Built for the operating layer of the revenue org."
            desc="The strongest workflows serve leaders, operators, and managers at once: clean data, sharper inspection, and better rep follow-through."
          />

          <div className="grid gap-5">
            {audiences.map((audience) => (
              <div key={audience.title} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-950">
                      {audience.title}
                    </h3>
                    <p className="mt-2 leading-7 text-zinc-600">
                      {audience.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-18 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-zinc-950">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              See what CoSell would build for your team.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
              Bring one messy workflow. We will map the signals, show the output
              shape, and identify the smallest build that can prove adoption.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              First conversation
            </div>
            <div className="mt-5 space-y-4 text-sm leading-6 text-zinc-200">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Pick one workflow: pipeline review, deal risk, CRM hygiene, or follow-up.
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Identify the data and operating rules needed to make it useful.
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Leave with a concrete implementation path.
              </div>
            </div>
            <a
              href={demoHref}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Request a workflow review
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
