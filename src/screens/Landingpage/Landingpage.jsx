import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig } from "motion/react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { Loader } from "../../components/layout/Loader";
import { BackToTop } from "../../components/layout/BackToTop";
import { Hero } from "../../components/sections/Hero";
import { Process } from "../../components/sections/Process";
import { Features } from "../../components/sections/Features";
import { Why } from "../../components/sections/Why";
import { Contact } from "../../components/sections/Contact";

const LOADING_DURATION_MS = 1400;

export const Landingpage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), LOADING_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    // reducedMotion="user" faz o Motion checar o prefers-reduced-motion do
    // sistema automaticamente — quem desativou animação no SO não anima aqui.
    <MotionConfig reducedMotion="user">
      {/* o site fica montado o tempo todo — o loader é só uma cortina por
          cima (fixed + z-index maior). Se o site só aparecesse depois do
          loader sumir, durante a subida da cortina não haveria nada de
          verdade por baixo, só o branco padrão da página. */}
      <div className="min-h-screen w-full bg-brand-dark">
        <Header />

        <main>
          <Hero />
          <Process />
          <Features />
          <Why />
          <Contact />
        </main>

        <Footer />
      </div>

      <BackToTop />

      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
    </MotionConfig>
  );
};
