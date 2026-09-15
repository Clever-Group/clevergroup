import { motion } from "motion/react";
import logo from "../../img/logo-clevergroup.svg";

// Tela de abertura com a própria logo: entrada suave (sem mola/bounce) e
// um giro 3D bem sutil o tempo todo, só pra não ficar estática — a
// amplitude pequena (±8°) é o que mantém isso minimalista em vez de
// "brincalhão". Some via AnimatePresence lá no Landingpage, e aí o
// fade-in do header/hero começa do zero, deixando a sequência orquestrada.
export const Loader = () => (
  <motion.div
    exit={{ y: "-100%" }}
    transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-brand-dark"
  >
    <div
      className="relative flex items-center justify-center"
      style={{ perspective: 600 }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-36 w-36 rounded-full bg-brand-blue/30 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.img
          src={logo}
          alt="CleverGroup"
          animate={{ rotateY: [-8, 8, -8] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-14 w-[70px]"
        />
      </motion.div>
    </div>

    <div className="h-[2px] w-28 overflow-hidden rounded-full bg-white/10">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
        className="h-full w-full bg-brand-blue"
      />
    </div>
  </motion.div>
);
