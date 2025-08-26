import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import Dual from "./components/Dual/Dual";
import Triple from "./components/Triple/Triple";
import Trade from "./components/Trade/Trade";
import Faq from "./components/Faq/Faq";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Dual />
      <Triple />
      <Trade />
      <Faq />
    </div>
  );
}
