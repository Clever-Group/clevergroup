import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa6";
import { WHY_CONTENT } from "../../constants/siteContent";

const RING_SIZES = [280, 210, 140, 70];

// Gráfico decorativo de anéis concêntricos com um núcleo pulsando — a
// versão CSS/motion do "radar" da referência, sem precisar de uma lib 3D.
const RadarGraphic = () => (
  <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
    {RING_SIZES.map((size, index) => (
      <motion.div
        key={size}
        className="absolute rounded-full border border-brand-blue/30"
        style={{ width: size, height: size }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.25,
        }}
      />
    ))}
    <motion.div
      className="absolute h-4 w-4 rounded-full bg-brand-blue shadow-[0_0_40px_10px_rgba(35,123,255,0.45)]"
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export const Why = () => (
  <section
    id="diferenciais"
    className="w-full scroll-mt-24 bg-brand-dark px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
  >
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-10">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex w-full flex-col gap-6 text-center lg:w-1/2 lg:text-left"
      >
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
          {WHY_CONTENT.eyebrow}
        </span>

        <h2 className="font-sans text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl">
          {WHY_CONTENT.title}
        </h2>

        <ul className="flex flex-col gap-4">
          {WHY_CONTENT.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-3 text-left font-sans text-sm text-white/70 sm:text-base"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue">
                <FaCheck className="h-2.5 w-2.5" />
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="flex w-full justify-center lg:w-1/2"
      >
        <RadarGraphic />
      </motion.div>
    </div>
  </section>
);
