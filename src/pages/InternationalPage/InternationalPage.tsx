import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import styles from "./InternationalPage.module.css";

export default function InternationalPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <div className={styles.breadcrumbs}>
            <span>Главная</span><span>/</span>
            <span>Cведения об образовательной организации</span><span>/</span>
            <span>Международное сотрудничество</span>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>Международное сотрудничество</h1>
          <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Soglashenie_o_sotrudnichestve.pdf" target="_blank" rel="noreferrer" className={styles.link}>
            Соглашение о сотрудничестве от 28.11.2025
          </a>
          <p className={styles.text}>Международной аккредитации образовательных программ в МБУ ДО «ЦЭВ «Песнохорки» нет.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
