import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import styles from "./TeachersStaffPage.module.css";

export default function TeachersStaffPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <div className={styles.breadcrumbs}>
            <span>Главная</span><span>/</span>
            <span>Cведения об образовательной организации</span><span>/</span>
            <span>Педагогический состав</span>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>Педагогический состав</h1>
          <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/svedeniya_o_rukovodyashchih_i_pedagogichechskih_rabotnikah_1_.pdf" target="_blank" rel="noreferrer" className={styles.link}>
            Сведения о руководящем и педагогическом составе МБУ ДО "ЦЭВ "Песнохорки"
          </a>
          <a href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/perechen_programm(2).pdf" target="_blank" rel="noreferrer" className={styles.link}>
            Перечень дополнительных общеобразователных (общеразвивающих) программ
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
