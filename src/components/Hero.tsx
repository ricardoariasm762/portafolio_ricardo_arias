"use client";

import { useI18n } from "../i18n/I18nProvider";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-between px-10 md:px-20"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 bg-[color:var(--surface)]/70 backdrop-blur-md shadow-lg px-10 py-8 rounded-3xl w-fit ml-0 mt-10 md:mt-0 md:ml-0 md:translate-x-0 text-[color:var(--foreground)]">
        <h1 className="text-4xl font-bold mb-2">{t("hero.greeting")}</h1>
        <p className="mb-6 text-lg max-w-md text-[color:var(--muted)]">
          {t("hero.description")}
        </p>
        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-lg font-semibold shadow bg-[color:var(--primary)] text-[color:var(--primary-foreground)] hover:opacity-90 transition">
            {t("hero.downloadCv")}
          </button>
          <button className="px-5 py-2 rounded-lg font-semibold shadow bg-[color:var(--surface)] text-[color:var(--foreground)] hover:opacity-90 transition">
            {t("hero.contacts")}
          </button>
        </div>
      </div>

      <div className="relative z-10 flex justify-end w-full md:w-[45%]">
        <img
          src="/ricardo.jpeg"
          alt="Ricardo"
          className="w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-[color:var(--border)] shadow-2xl object-cover"
        />
      </div>
    </section>
  );
}



