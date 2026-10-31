import styles from "./page.module.scss";
import Contact from "../../components/Contact";
import Toolbox from "../../components/Toolbox";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import About from "../../components/About";
import Services from "../../components/Services";
import WhyMe from "../../components/WhyMe";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Services />
      <Projects />
      <WhyMe />
      <Toolbox />
      <About />
      <Contact />
    </main >
  );
}
