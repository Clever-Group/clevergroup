import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { GlassPanel, MotionGlassPanel } from "../ui/glass-panel";
import logo from "../../img/logo-clevergroup.svg";
import { NAV_LINKS } from "../../constants/siteContent";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8 [transform:translateZ(0)]"
    >
      <GlassPanel
        tone="dark"
        className="mx-auto grid h-16 w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 rounded-full px-5 sm:h-[72px] sm:px-8"
      >
        <img
          className="h-8 w-10 sm:h-10 sm:w-12"
          alt="Logo clevergroup"
          src={logo}
        />

        <nav className="hidden items-center justify-end gap-4 md:flex lg:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap font-sans text-sm font-semibold leading-6 tracking-[-0.20px] text-white transition-colors hover:text-brand-blue lg:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          className="col-start-3 justify-self-end text-white transition-colors hover:text-brand-blue md:hidden"
        >
          {isMenuOpen ? (
            <FaXmark className="h-5 w-5" />
          ) : (
            <FaBars className="h-5 w-5" />
          )}
        </button>
      </GlassPanel>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden md:hidden"
          >
            <MotionGlassPanel
              tone="dark"
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              className="flex flex-col gap-1 p-4"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-3 py-2 font-sans text-sm font-semibold text-white transition-colors hover:bg-white/10 hover:text-brand-blue"
                >
                  {link.label}
                </a>
              ))}
            </MotionGlassPanel>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
