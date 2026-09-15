import { FaInstagram } from "react-icons/fa6";
import logo from "../../img/logo-clevergroup.svg";
import {
  CONTACT_INFO,
  FOOTER_CONTENT,
  NAV_LINKS,
} from "../../constants/siteContent";

const LINK_CLASSES =
  "w-fit font-sans text-sm text-white/60 transition-colors hover:text-white";

export const Footer = () => (
  <footer className="w-full border-t border-white/10 bg-black/20 px-4 pb-8 pt-14 sm:px-6 sm:pt-16 lg:px-8">
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        <div className="flex flex-col gap-4">
          <img
            className="h-9 w-11"
            alt="Logo clevergroup"
            src={logo}
          />
          <p className="max-w-xs font-sans text-sm leading-relaxed text-white/60">
            {FOOTER_CONTENT.tagline}
          </p>
          <a
            href={CONTACT_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex w-fit items-center gap-2 text-white/60 transition-colors hover:text-brand-blue"
          >
            <FaInstagram className="h-4 w-4" />
            <span className="font-sans text-sm">{CONTACT_INFO.instagram}</span>
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
            {FOOTER_CONTENT.navLabel}
          </span>
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className={LINK_CLASSES}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
            {FOOTER_CONTENT.contactLabel}
          </span>
          <a href={`mailto:${CONTACT_INFO.email}`} className={LINK_CLASSES}>
            {CONTACT_INFO.email}
          </a>
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}
            className={LINK_CLASSES}
          >
            {CONTACT_INFO.phone}
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
        <p className="font-sans text-xs text-white/40">
          © Clever Group — Since 2025
        </p>
        <p className="font-sans text-xs text-white/40">
          Feito com atenção ao detalhe.
        </p>
      </div>
    </div>
  </footer>
);
