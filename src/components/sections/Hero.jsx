import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FaArrowRight } from "react-icons/fa6";
import { MotionButton } from "../ui/button";
import Velaris from "../ui/velaris";
import { HERO_CONTENT } from "../../constants/siteContent";

// Gradiente vivo (WebGL, ruído simplex) nas cores da marca — substitui o
// fundo radial estático de antes. Além de bonito sozinho, dá muito mais
// contraste de cor pro header/botões em vidro "borrarem" por cima.
const HERO_BG = "#15181e";
const HERO_COLORS = ["#237bff", "#5aa2ff", "#172f4e", "#0b0d11"];

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: o bloco de texto sobe um pouco mais rápido que o scroll e
  // esmaece — essa diferença de velocidade entre camadas é o que lê como
  // profundidade por cima do gradiente animado.
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full">
      <Velaris
        height="100%"
        bg={HERO_BG}
        colors={HERO_COLORS}
        speed={1.4}
        grain={0.25}
        className="absolute inset-0"
      >
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="flex h-full w-full flex-col items-center justify-center gap-6 px-4 pt-20 text-center sm:px-6 sm:pt-24 lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.14em] text-white/50"
          >
            <span className="h-1 w-1 rounded-full bg-brand-blue" />
            {HERO_CONTENT.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="max-w-3xl font-sans text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {HERO_CONTENT.titleLines[0]}{" "}
            <span className="bg-gradient-to-r from-white to-brand-blue bg-clip-text text-transparent">
              {HERO_CONTENT.titleLines[1]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="max-w-xl font-sans text-base font-normal text-white/70"
          >
            {HERO_CONTENT.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
          >
            <MotionButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-blue/90 sm:w-auto"
            >
              {HERO_CONTENT.cta}
              <FaArrowRight className="h-3 w-3" />
            </MotionButton>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex h-12 items-center justify-center gap-1.5 px-2 font-sans text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {HERO_CONTENT.secondaryCta}
              <FaArrowRight className="h-3 w-3" />
            </button>
          </motion.div>
        </motion.div>
      </Velaris>
    </section>
  );
};
