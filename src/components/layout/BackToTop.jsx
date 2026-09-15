import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { FaArrowUp } from "react-icons/fa6";
import { MotionGlassPanel } from "../ui/glass-panel";

const SHOW_AFTER_PX = 480;

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > SHOW_AFTER_PX);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionGlassPanel
          as="button"
          tone="dark"
          type="button"
          aria-label="Voltar ao topo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:text-brand-blue sm:bottom-8 sm:right-8"
        >
          <FaArrowUp className="h-4 w-4" />
        </MotionGlassPanel>
      )}
    </AnimatePresence>
  );
};
