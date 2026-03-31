import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import styles from "./PaidServicesPage.module.css";

export default function PaidServicesPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <div className={styles.breadcrumbs}>
            <span>Главная</span>
            <span>/</span>
            <span>Родителям</span>
            <span>/</span>
            <span>Платные услуги</span>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>Платные услуги</h1>
          <p className={styles.text}>
            Платные образовательные услуги в МБУ ДО «ЦЭВ «Песнохорки» не оказываются.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
