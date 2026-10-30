import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import CookieConsent from '../components/CookieConsent';


const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

const title = "Freelance Fullstack Developer - Tobias Wust";
const description = "Senior fullstack engineer from Germany with 15+ years of experience. React, Node.js and AI-assisted development; from business goal to shipped product.";

export const metadata: Metadata = {
  metadataBase: new URL("https://wust.dev"),
  title,
  description,
  keywords: ["freelance developer", "fullstack developer", "React", "TypeScript", "Node.js", "AI-assisted development", "LLM integration", "Technical leadership", "Germany", "remote"],
  authors: [{ name: "Tobias Wust", url: "https://wust.dev" }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://wust.dev",
    siteName: "Tobias Wust",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tobias Wust",
  jobTitle: "Freelance Fullstack Developer",
  url: "https://wust.dev",
  address: { "@type": "PostalAddress", addressCountry: "DE" },
  sameAs: [
    "https://github.com/TobiasWust",
    "https://www.linkedin.com/in/tobias-wust/",
  ],
  knowsAbout: ["React", "TypeScript", "Node.js", "Next.js", "Web development", "AI-assisted development", "LLM integration", "Technical leadership"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} ${spaceGrotesk.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
        <CookieConsent />
      </body>
    </html>
  );
}
