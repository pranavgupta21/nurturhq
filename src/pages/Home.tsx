import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-6 relative z-10"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-foreground">
              Purpose-built Revenue Intelligence for every org, with
              accountability for adoption
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Don't settle for generic "AI platforms"
            </p>

            <div className="pt-4">
              <a
                href="mailto:pranav@trycosell.com"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Request a demo <span className="ml-2">→</span>
              </a>
            </div>
          </motion.div>

          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[500px] flex items-center justify-center bg-secondary/50 rounded-3xl border border-border p-8"
          >
            {/* SVG Diagram recreating the conceptual architecture */}
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full text-foreground/80 drop-shadow-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Lines */}
              <path
                d="M 200 120 L 200 180"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="opacity-40"
              />
              <path
                d="M 200 280 L 200 240"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="opacity-40"
              />

              {/* Central Hub */}
              <rect
                x="80"
                y="180"
                width="240"
                height="60"
                rx="8"
                fill="var(--color-primary)"
                fillOpacity="0.1"
                stroke="var(--color-primary)"
                strokeWidth="2"
              />
              <text
                x="200"
                y="215"
                textAnchor="middle"
                fill="currentColor"
                className="text-[14px] font-medium font-sans"
              >
                Custom-built Revenue Engine
              </text>

              {/* Nodes */}
              <rect
                x="120"
                y="60"
                width="160"
                height="60"
                rx="8"
                fill="var(--color-card)"
                stroke="currentColor"
                strokeWidth="1.5"
                className="opacity-80"
              />
              <text
                x="200"
                y="95"
                textAnchor="middle"
                fill="currentColor"
                className="text-[12px] font-sans"
              >
                CoSell's Toolkit and FDEs
              </text>

              <rect
                x="120"
                y="280"
                width="160"
                height="60"
                rx="8"
                fill="var(--color-card)"
                stroke="currentColor"
                strokeWidth="1.5"
                className="opacity-80"
              />
              <text
                x="200"
                y="315"
                textAnchor="middle"
                fill="currentColor"
                className="text-[12px] font-sans"
              >
                You
              </text>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Revenue Intelligence from SDRs to CROs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {[
              {
                num: "01",
                title:
                  "Common agents - research, emails, CRM sync, business cases, deal briefs",
                desc: "Save 3-4 hours per day for every AE",
              },
              {
                num: "02",
                title: "Deal risk analysis",
                desc: "Real-time risk detection and alerting",
              },
              {
                num: "03",
                title: "Pipeline review and forecasting",
                desc: "Agents continuously evaluate pipeline health and generate forecasting insights and reports.",
              },
              {
                num: "04",
                title: "Multi-level customization",
                desc: "Customize at the org, team and individual level",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="text-primary font-mono text-xl mb-4 font-semibold">
                  {feature.num}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-6 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pattern-dots" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Ready for outcome-driven Revenue Intelligence?
            </h2>
            <a
              href="mailto:pranav@trycosell.com"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1"
            >
              Request a demo <span className="ml-2">→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
