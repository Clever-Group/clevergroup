import { motion } from "motion/react";
import {
  FaGaugeHigh,
  FaHeadset,
  FaMagnifyingGlassChart,
  FaMobileScreen,
  FaShieldHalved,
  FaSliders,
} from "react-icons/fa6";
import { MotionGlassPanel } from "../ui/glass-panel";
import { FEATURES_CONTENT } from "../../constants/siteContent";

const FEATURE_ICONS = {
  responsive: FaMobileScreen,
  performance: FaGaugeHigh,
  seo: FaMagnifyingGlassChart,
  security: FaShieldHalved,
  support: FaHeadset,
  control: FaSliders,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Features = () => (
  <section
    id="sobre"
    className="w-full scroll-mt-24 bg-brand-dark px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
  >
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col gap-3 text-left"
      >
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
          {FEATURES_CONTENT.eyebrow}
        </span>
        <h2 className="max-w-2xl font-sans text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
          {FEATURES_CONTENT.title}
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {FEATURES_CONTENT.items.map((item) => {
          const Icon = FEATURE_ICONS[item.icon];
          return (
            <MotionGlassPanel
              key={item.title}
              tone="dark"
              variants={itemVariants}
              className="flex flex-col gap-3 border-white/10 bg-white/5 p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="font-sans text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </MotionGlassPanel>
          );
        })}
      </motion.div>
    </div>
  </section>
);
