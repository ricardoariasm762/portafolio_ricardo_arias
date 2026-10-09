"use client";

import { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaCopy, FaCheck, FaPaperPlane, FaCheckCircle, FaSpinner } from "react-icons/fa";

export default function ContactSection() {
  const { t } = useI18n();
  const [selectedIntent, setSelectedIntent] = useState("project");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const getWhatsAppMessage = () => {
    switch (selectedIntent) {
      case "project":
        return encodeURIComponent("Hola Ricardo, me gustaría cotizar un proyecto de software/web.");
      case "collab":
        return encodeURIComponent("Hola Ricardo, tengo una propuesta de colaboración técnica.");
      case "hire":
        return encodeURIComponent("Hola Ricardo, tenemos una oportunidad profesional/pasantía para ti.");
      default:
        return encodeURIComponent("Hola Ricardo, vi tu portafolio y me gustaría contactarte.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSent(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setFormSent(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-sky-600 dark:text-[#38bdf8] uppercase block mb-2">
                {t("contact.tag")}
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[color:var(--foreground)] font-[family-name:var(--font-space-grotesk)] leading-[1.1]">
                <span>{t("contact.title1")} </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-[#38bdf8] dark:via-[#60a5fa] dark:to-[#93c5fd]">
                  {t("contact.title2")}
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[color:var(--muted)] mt-4 leading-relaxed font-[family-name:var(--font-jakarta)]">
                {t("contact.subtitle")}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email */}
              <div className="p-4 rounded-2xl bg-[color:var(--surface)] border border-[color:var(--border)] hover:border-[color:var(--primary)] transition-all flex items-center justify-between group shadow-sm hover:-translate-y-0.5">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[color:var(--surface-container)] border border-[color:var(--border)] text-[color:var(--primary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[color:var(--muted)] block">
                      {t("contact.emailLabel")}
                    </span>
                    <a
                      href="mailto:ricardo.ariasm9@gmail.com"
                      className="text-sm font-medium text-[color:var(--foreground)] hover:text-[color:var(--primary)] transition-colors cursor-pointer"
                    >
                      ricardo.ariasm9@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy("ricardo.ariasm9@gmail.com", "email")}
                  className="p-2.5 rounded-lg text-[color:var(--muted)] hover:text-[color:var(--primary)] hover:bg-[color:var(--surface-container)] transition cursor-pointer"
                  title={copiedKey === "email" ? "¡Copiado!" : t("contact.copyAction")}
                  aria-label="Copiar correo electrónico"
                >
                  {copiedKey === "email" ? <FaCheck className="text-emerald-500" size={14} /> : <FaCopy size={14} />}
                </button>
              </div>

              {/* Phone / WhatsApp with prefilled message */}
              <div className="p-4 rounded-2xl bg-[color:var(--surface)] border border-[color:var(--border)] hover:border-emerald-500 transition-all flex items-center justify-between group shadow-sm hover:-translate-y-0.5">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[color:var(--surface-container)] border border-[color:var(--border)] text-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaWhatsapp size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[color:var(--muted)] block">
                      {t("contact.phoneLabel")} • WhatsApp
                    </span>
                    <a
                      href={`https://wa.me/573104961222?text=${getWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[color:var(--foreground)] hover:text-emerald-500 transition-colors cursor-pointer"
                    >
                      (+57) 310 496 1222
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleCopy("+573104961222", "phone")}
                    className="p-2.5 rounded-lg text-[color:var(--muted)] hover:text-emerald-500 hover:bg-[color:var(--surface-container)] transition cursor-pointer"
                    title={copiedKey === "phone" ? "¡Copiado!" : t("contact.copyAction")}
                    aria-label="Copiar teléfono"
                  >
                    {copiedKey === "phone" ? <FaCheck className="text-emerald-500" size={14} /> : <FaCopy size={14} />}
                  </button>
                  <a
                    href={`https://wa.me/573104961222?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-emerald-500 hover:text-emerald-600 px-2.5 py-1 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 transition cursor-pointer"
                  >
                    Chat ↗
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="p-4 rounded-2xl bg-[color:var(--surface)] border border-[color:var(--border)] hover:border-[color:var(--primary)] transition-all flex items-center justify-between group shadow-sm hover:-translate-y-0.5">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[color:var(--surface-container)] border border-[color:var(--border)] text-[color:var(--foreground)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaGithub size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[color:var(--muted)] block">
                      {t("contact.githubLabel")}
                    </span>
                    <a
                      href="https://github.com/ricardoariasm762"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[color:var(--foreground)] hover:text-[color:var(--primary)] transition-colors cursor-pointer"
                    >
                      github.com/ricardoariasm762
                    </a>
                  </div>
                </div>
                <a
                  href="https://github.com/ricardoariasm762"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[color:var(--primary)] px-3 py-1.5 rounded-md bg-[color:var(--surface-container)] hover:bg-[color:var(--surface-container-high)] transition cursor-pointer"
                >
                  Visitar ↗
                </a>
              </div>

              {/* LinkedIn */}
              <div className="p-4 rounded-2xl bg-[color:var(--surface)] border border-[color:var(--border)] hover:border-[color:var(--primary)] transition-all flex items-center justify-between group shadow-sm hover:-translate-y-0.5">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[color:var(--surface-container)] border border-[color:var(--border)] text-sky-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaLinkedin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[color:var(--muted)] block">
                      {t("contact.linkedinLabel")}
                    </span>
                    <a
                      href="https://www.linkedin.com/in/ricardo-arias-m9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[color:var(--foreground)] hover:text-[color:var(--primary)] transition-colors cursor-pointer"
                    >
                      linkedin.com/in/ricardo-arias-m9
                    </a>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/ricardo-arias-m9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[color:var(--primary)] px-3 py-1.5 rounded-md bg-[color:var(--surface-container)] hover:bg-[color:var(--surface-container-high)] transition cursor-pointer"
                >
                  Conectar ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Mini Inquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[color:var(--surface)] border border-[color:var(--border)] shadow-xl shadow-slate-200/50 dark:shadow-2xl relative overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-[color:var(--foreground)] mb-2">
                {t("contact.formTitle")}
              </h3>
              <p className="text-xs sm:text-sm text-[color:var(--muted)] mb-6">
                Selecciona tu objetivo y conversemos sobre los detalles del proyecto.
              </p>

              {/* Intent Selection Chips */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {[
                  { key: "project", label: t("contact.intentProject") },
                  { key: "collab", label: t("contact.intentCollab") },
                  { key: "hire", label: t("contact.intentHire") },
                ].map((intent) => (
                  <button
                    key={intent.key}
                    type="button"
                    onClick={() => setSelectedIntent(intent.key)}
                    className={`px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wide transition-all cursor-pointer ${
                      selectedIntent === intent.key
                        ? "bg-[#0284c7] text-white dark:bg-[#38bdf8] dark:text-[#030712] shadow-sm shadow-sky-500/25 font-semibold"
                        : "bg-[color:var(--surface-container)] border border-[color:var(--border)] text-[color:var(--muted)] hover:border-[color:var(--primary)] hover:text-[color:var(--foreground)]"
                    }`}
                  >
                    {intent.label}
                  </button>
                ))}
              </div>

              {formSent ? (
                <div className="py-12 px-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-fade-in space-y-3">
                  <FaCheckCircle className="mx-auto text-emerald-500" size={44} />
                  <h4 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] text-[color:var(--foreground)]">
                    ¡Mensaje Enviado con Éxito!
                  </h4>
                  <p className="text-sm text-[color:var(--muted)] max-w-sm mx-auto">
                    Gracias por ponerte en contacto. Ricardo te responderá a la brevedad posible.
                  </p>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-[color:var(--muted)] uppercase mb-1.5 font-medium">
                      Nombre
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder={t("contact.namePlaceholder")}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[color:var(--surface-container)] border border-[color:var(--border)] text-sm text-[color:var(--foreground)] placeholder-[color:var(--muted)]/60 focus:outline-none focus:border-[color:var(--primary)] focus:ring-1 focus:ring-[color:var(--primary)] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-[color:var(--muted)] uppercase mb-1.5 font-medium">
                      Correo Electrónico
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder={t("contact.emailPlaceholder")}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[color:var(--surface-container)] border border-[color:var(--border)] text-sm text-[color:var(--foreground)] placeholder-[color:var(--muted)]/60 focus:outline-none focus:border-[color:var(--primary)] focus:ring-1 focus:ring-[color:var(--primary)] transition-all"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label htmlFor="contact-message" className="text-xs font-mono text-[color:var(--muted)] uppercase font-medium">
                        Mensaje
                      </label>
                      <span className="text-[11px] font-mono text-[color:var(--muted)]">
                        {formData.message.length}/500
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={4}
                      maxLength={500}
                      required
                      placeholder={t("contact.msgPlaceholder")}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[color:var(--surface-container)] border border-[color:var(--border)] text-sm text-[color:var(--foreground)] placeholder-[color:var(--muted)]/60 focus:outline-none focus:border-[color:var(--primary)] focus:ring-1 focus:ring-[color:var(--primary)] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl text-sm font-semibold tracking-wider uppercase font-[family-name:var(--font-space-grotesk)] bg-[#0284c7] hover:bg-[#0369a1] text-white dark:bg-[#38bdf8] dark:hover:bg-[#7bd0ff] dark:text-[#030712] shadow-md shadow-sky-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" size={14} />
                        <span>Enviando mensaje...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane size={13} />
                        <span>{t("contact.sendBtn")}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
