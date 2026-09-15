import * as React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

// Superfície "vidro fosco": fundo semitransparente + blur do que está atrás
// + borda clara sutil pra sugerir a espessura do vidro. `tone="dark"` tinge
// pra PRETO (não branco) — como o header fica fixo e cruza tanto fundos
// escuros quanto claros da página, só um tingimento escuro garante que o
// texto branco continue legível em qualquer seção atrás dele.
// `tone="light"` é o inverso, pensado pra ficar sobre fundo branco com
// texto escuro.
const TONE_STYLES = {
  dark: "bg-brand-dark/70 border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.35)]",
  light: "bg-white/50 border-white/70 shadow-[0_8px_32px_rgba(15,23,42,0.12)]",
};

export const GlassPanel = React.forwardRef(
  ({ className, tone = "dark", as: Component = "div", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(
        // will-change + translate3d força o blur pra sua própria camada de
        // composição — sem isso o Chromium às vezes deixa uma "sombra"
        // congelada do blur quando o painel é filho de um elemento fixed
        // e a página rola (scroll-behavior: smooth do <html>).
        "rounded-2xl border backdrop-blur-xl backdrop-saturate-150 [transform:translate3d(0,0,0)] will-change-transform",
        TONE_STYLES[tone],
        className,
      )}
      {...props}
    />
  ),
);
GlassPanel.displayName = "GlassPanel";

// Versão animável do mesmo painel, pra quando a seção precisa de uma
// entrada (fade/slide) ou scroll-reveal sem duplicar as classes de vidro.
export const MotionGlassPanel = motion.create(GlassPanel);
