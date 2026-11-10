import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Space_Grotesk } from "next/font/google";
import "../globals.scss";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Script from 'next/script';
import { isLocale, Locale, locales, siteUrls } from "../../i18n/config";
import { getDictionary } from "../../i18n/dictionaries";
import { I18nProvider } from "../../i18n/I18nProvider";


const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

type Props = { params: { lang: string } };

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: Props): Metadata {
  const lang = isLocale(params.lang) ? params.lang : "en";
  const { meta } = getDictionary(lang);
  const url = siteUrls[lang];
  return {
    metadataBase: new URL(url),
    title: meta.title,
    description: meta.description,
    keywords: ["freelance developer", "fullstack developer", "React", "TypeScript", "Node.js", "AI-assisted development", "LLM integration", "Technical leadership", "Germany", "remote"],
    authors: [{ name: "Tobias Wust", url }],
    alternates: {
      canonical: "/",
      // tell search engines both domains are the same site in two languages
      languages: { en: siteUrls.en, de: siteUrls.de, "x-default": siteUrls.en },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: "Tobias Wust",
      type: "website",
      locale: meta.ogLocale,
      images: [{ url: "/share-image", width: 1200, height: 630, alt: meta.title, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/share-image"],
    },
  };
}

const themeScript = `(() => {
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch {}
  const system = matchMedia("(prefers-color-scheme: light)");
  const apply = (theme) => (document.documentElement.dataset.theme = theme);
  apply(saved || (system.matches ? "light" : "dark"));
  system.addEventListener("change", (e) => {
    try { if (!localStorage.getItem("theme")) apply(e.matches ? "light" : "dark"); } catch {}
  });
})();`;

function personJsonLd(lang: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tobias Wust",
    jobTitle: getDictionary(lang).meta.jobTitle,
    url: siteUrls[lang],
    address: { "@type": "PostalAddress", addressCountry: "DE" },
    sameAs: [
      siteUrls[lang === "en" ? "de" : "en"],
      "https://github.com/TobiasWust",
      "https://www.linkedin.com/in/tobias-wust/",
    ],
    knowsAbout: ["React", "TypeScript", "Node.js", "Next.js", "Web development", "AI-assisted development", "LLM integration", "Technical leadership"],
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang;

  return (
    // the theme script sets data-theme before React hydrates, so React shouldn't complain about it
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.className} ${inter.variable} ${spaceGrotesk.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(lang)) }}
        />
        <I18nProvider lang={lang} dictionary={getDictionary(lang)}>
          <Nav />
          {children}
          <Footer />
          <ToastContainer
            className="wu-toast"
            position='bottom-right'
            theme='dark'
            autoClose={10000}
            // autoClose={false}
            closeOnClick
            newestOnTop
            pauseOnFocusLoss
            pauseOnHover
          />
        </I18nProvider>
        {/* cookie-free, anonymous page views; ignores localhost by default */}
        <Script
          data-goatcounter="https://wustdev.goatcounter.com/count"
          src="https://gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
