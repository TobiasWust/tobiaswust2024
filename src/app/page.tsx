import Image from "next/image";
import styles from "./page.module.scss";
import Marquee from "../components/Marquee";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />

      <section className={styles.about}>
        <h2>ABOUT</h2>
        <p>here will be something about me</p>
      </section>

      <Skills />

      <section className={styles.projects}>
        <h2>Projects</h2>
        here will be a list of projects with filters by stack
      </section>

      <Contact />
    </main >
  );
}
