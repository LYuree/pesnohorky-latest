import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import styles from "./ScholarshipsPage.module.css";

export default function ScholarshipsPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <div className={styles.breadcrumbs}>
            <span>Главная</span><span>/</span>
            <span>Cведения об образовательной организации</span><span>/</span>
            <span>Стипендии и меры поддержки обучающихся</span>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>Стипендии и меры поддержки обучающихся</h1>
          <p className={styles.text}>Обучающимся в МБУ ДО "ЦЭВ "Песнохорки" стипендии не предоставляются</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
