import styles from "./page.module.scss";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Countdown from "../components/Countdown";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </main >
  );
}
