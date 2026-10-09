"use client";

import { useI18n } from "../i18n/I18nProvider";
import { FaQuoteLeft, FaStar, FaCheckCircle } from "react-icons/fa";

export default function TestimonialsSection() {
  const { t } = useI18n();

  const testimonials = [
    {
      text: t("testimonials.one.text"),
      author: t("testimonials.one.author"),
      role: t("testimonials.one.role"),
      city: t("testimonials.one.city"),
      initials: "MG",
      gradient: "from-sky-500 to-blue-600",
    },
    {
      text: t("testimonials.two.text"),
      author: t("testimonials.two.author"),
      role: t("testimonials.two.role"),
      city: t("testimonials.two.city"),
      initials: "CL",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      text: t("testimonials.three.text"),
      author: t("testimonials.three.author"),
      role: t("testimonials.three.role"),
      city: t("testimonials.three.city"),
      initials: "DF",
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section id="testimonios" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-600 dark:text-[#38bdf8] uppercase block mb-2">
            {t("testimonials.tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--foreground)] font-[family-name:var(--font-space-grotesk)]">
            {t("testimonials.title")}
          </h2>
          <p className="text-sm sm:text-base text-[color:var(--muted)] mt-2 max-w-xl">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[color:var(--surface)] border border-[color:var(--border)] hover:border-[color:var(--primary)] hover:shadow-xl dark:hover:shadow-[0_0_28px_rgba(56,189,248,0.14)] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:-translate-y-1.5 cursor-default relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <FaQuoteLeft className="text-sky-500/35 dark:text-[#38bdf8]/35 group-hover:text-[color:var(--primary)] transition-colors" size={24} />
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={13} />
                    ))}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[color:var(--foreground)] leading-relaxed mb-6 font-[family-name:var(--font-jakarta)]">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-5 border-t border-[color:var(--border)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} text-white font-mono text-xs font-bold flex items-center justify-center shadow-sm`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-base font-bold font-[family-name:var(--font-space-grotesk)] text-[color:var(--foreground)] group-hover:text-[color:var(--primary)] transition-colors">
                        {item.author}
                      </h4>
                      <FaCheckCircle className="text-sky-500 dark:text-[#38bdf8]" size={11} title="Verificado" />
                    </div>
                    <p className="text-xs text-[color:var(--muted)]">{item.role}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[color:var(--muted)] px-2 py-0.5 rounded-md bg-[color:var(--surface-container)]">
                  {item.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
