import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "../i18n/I18nProvider";
import { ThemeProvider } from "../theme/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ricardo Arias • Portafolio Creativo | Ingeniería de Software",
  description:
    "Portafolio interactivo de Ricardo Arias: Estudiante de Ingeniería de Software enfocado en arquitecturas robustas y diseño de interfaces de usuario modernas (UI/UX).",
  keywords: [
    "Ricardo Arias",
    "Ingeniería de Software",
    "UI/UX Design",
    "Next.js",
    "TypeScript",
    "Angular",
    "Tailwind CSS",
    "Portafolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jakarta.variable}`}
    >
      <head>
        <meta name="color-scheme" content="dark light" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                var stored = localStorage.getItem('theme-choice');
                var isDark;
                if (stored === 'dark') {
                  isDark = true;
                } else if (stored === 'light') {
                  isDark = false;
                } else {
                  isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                }
                var resolved = isDark ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', resolved);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch(e) {}
            })();`,
          }}
        />
      </head>
      <body className="antialiased selection:bg-[#38bdf8] selection:text-[#030712]">
        <I18nProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
