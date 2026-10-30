import styles from "./page.module.scss";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Services from "../components/Services";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <About />
      <Contact />
    </main >
  );
}
