import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FaCode, FaMagnifyingGlass, FaPalette, FaRocket } from "react-icons/fa6";
import { PROCESS_CONTENT } from "../../constants/siteContent";

const STEP_ICONS = {
  discovery: FaMagnifyingGlass,
  design: FaPalette,
  tech: FaCode,
  launch: FaRocket,
};

export const Process = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.6"],
  });

  return (
    <section
      id="processo"
      className="w-full scroll-mt-24 bg-brand-dark px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-3 text-left"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
            {PROCESS_CONTENT.eyebrow}
          </span>
          <h2 className="font-sans text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            {PROCESS_CONTENT.title}
          </h2>
        </motion.div>

        <ol ref={timelineRef} className="relative flex w-full max-w-2xl flex-col gap-12">
          {/* trilho fixo, sutil */}
          <div className="absolute left-5 top-5 bottom-5 w-px bg-white/10" />
          {/* trilho azul que "desenha" por cima conforme rola — mesma ideia
              do preenchimento de progresso de um roadmap */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-5 top-5 bottom-5 w-px origin-top bg-brand-blue"
          />

          {PROCESS_CONTENT.steps.map((step, index) => {
            const Icon = STEP_ICONS[step.icon];
            return (
              <motion.li
                key={step.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                className="relative flex gap-6"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-blue/40 bg-brand-dark text-brand-blue">
                  <Icon className="h-4 w-4" />
                </span>

                <div className="flex flex-1 flex-col gap-1.5 pt-1.5">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white/40">
                    Etapa {step.label}
                  </span>
                  <h3 className="font-sans text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
