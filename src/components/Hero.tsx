"use client";

import Image from "next/image";
import { useI18n } from "../i18n/I18nProvider";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat min-h-[500px] md:h-[500px] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-0"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 bg-[color:var(--surface)]/70 backdrop-blur-md shadow-lg px-6 sm:px-8 md:px-10 py-6 sm:py-8 rounded-3xl w-full sm:w-fit mx-auto sm:mx-0 mb-6 md:mb-0 text-[color:var(--foreground)]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{t("hero.greeting")}</h1>
        <p className="mb-4 sm:mb-6 text-base sm:text-lg max-w-md text-[color:var(--muted)]">
          {t("hero.description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="px-4 sm:px-5 py-2 rounded-lg font-semibold shadow bg-[color:var(--primary)] text-[color:var(--primary-foreground)] hover:opacity-90 transition text-sm sm:text-base">
            {t("hero.downloadCv")}
          </button>
          <button className="px-4 sm:px-5 py-2 rounded-lg font-semibold shadow bg-[color:var(--surface)] text-[color:var(--foreground)] hover:opacity-90 transition text-sm sm:text-base">
            {t("hero.contacts")}
          </button>
        </div>
      </div>

      <div className="relative z-10 flex justify-center md:justify-end w-full md:w-[45%] mt-4 md:mt-0">
        <Image
          src="/ricardo.jpeg"
          alt="Ricardo"
          width={288}
          height={288}
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border-4 border-[color:var(--border)] shadow-2xl object-cover"
        />
      </div>
    </section>
  );
}



