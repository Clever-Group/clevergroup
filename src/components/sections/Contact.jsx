import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa6";
import { MotionButton } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { CONTACT_FORM_CONTENT } from "../../constants/siteContent";

const INITIAL_FORM = { name: "", email: "", message: "" };

// Campo minimalista: borda fina, sem preenchimento, foco em azul. Menos
// "vidro", mais formulário — é o que combina com um form funcional.
const FIELD_CLASSES =
  "rounded-lg border-white/15 bg-transparent px-4 text-white placeholder:text-white/30 focus-visible:border-brand-blue focus-visible:ring-1 focus-visible:ring-brand-blue/40";

const Field = ({ id, label, children }) => (
  <div className="flex flex-col gap-2">
    <label
      htmlFor={id}
      className="font-sans text-xs font-medium uppercase tracking-[0.08em] text-white/50"
    >
      {label}
    </label>
    {children}
  </div>
);

export const Contact = () => {
  const formId = useId();
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Sem backend por enquanto — só confirma pro usuário que o form foi
    // preenchido corretamente e limpa os campos.
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <section
      id="contato"
      className="w-full scroll-mt-24 bg-brand-dark p-4 sm:p-6 lg:p-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 py-16 lg:flex-row lg:items-start lg:gap-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full space-y-6 lg:w-2/5 lg:pt-2"
        >
          <h2 className="font-sans text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl">
            {CONTACT_FORM_CONTENT.title}
          </h2>

          <p className="font-sans text-sm font-normal leading-relaxed text-white/70 sm:text-base">
            {CONTACT_FORM_CONTENT.paragraph}
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="flex w-full flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:w-3/5"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field id={`${formId}-name`} label={CONTACT_FORM_CONTENT.fields.name.label}>
              <Input
                id={`${formId}-name`}
                required
                value={form.name}
                onChange={handleChange("name")}
                className={`h-12 ${FIELD_CLASSES}`}
                placeholder={CONTACT_FORM_CONTENT.fields.name.placeholder}
              />
            </Field>

            <Field id={`${formId}-email`} label={CONTACT_FORM_CONTENT.fields.email.label}>
              <Input
                id={`${formId}-email`}
                required
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                className={`h-12 ${FIELD_CLASSES}`}
                placeholder={CONTACT_FORM_CONTENT.fields.email.placeholder}
              />
            </Field>
          </div>

          <Field id={`${formId}-message`} label={CONTACT_FORM_CONTENT.fields.message.label}>
            <Textarea
              id={`${formId}-message`}
              value={form.message}
              onChange={handleChange("message")}
              className={`h-32 resize-none py-3 ${FIELD_CLASSES}`}
              placeholder={CONTACT_FORM_CONTENT.fields.message.placeholder}
            />
          </Field>

          <MotionButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex h-12 w-full items-center justify-center self-start rounded-lg bg-brand-blue px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-blue/90 sm:w-auto"
          >
            {CONTACT_FORM_CONTENT.submitCta}
            <span className="ml-0 w-0 overflow-hidden opacity-0 transition-all duration-200 group-hover:ml-2 group-hover:w-3 group-hover:opacity-100">
              <FaArrowRight className="h-3 w-3" />
            </span>
          </MotionButton>

          <AnimatePresence>
            {submitted && (
              <motion.p
                role="status"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-sm font-medium text-brand-blue"
              >
                {CONTACT_FORM_CONTENT.successMessage}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};
