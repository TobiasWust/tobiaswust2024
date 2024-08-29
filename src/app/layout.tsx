import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { GoogleAnalytics } from '@next/third-parties/google';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freelance Fullstack Developer - Tobias Wust",
  description: "Tobias Wust is a highly experienced freelance fullstack developer from Germany, with 15+ years of expertise in React and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
        <GoogleAnalytics gaId="G-C4JPK514R9" />
      </body>
    </html>
  );
}
