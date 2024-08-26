import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { GiTrophy } from "react-icons/gi";


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
          autoClose={5000}
          closeOnClick
          newestOnTop
          pauseOnFocusLoss
          pauseOnHover
          icon={<GiTrophy />}
        />
      </body>
    </html>
  );
}
