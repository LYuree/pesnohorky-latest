import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import styles from "./VacanciesPage.module.css";

export default function VacanciesPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <div className={styles.breadcrumbs}>
            <span>Главная</span><span>/</span>
            <span>Cведения об образовательной организации</span><span>/</span>
            <span>Вакантные места для приема (перевода) обучающихся</span>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>Вакантные места для приема (перевода) обучающихся</h1>
          <p className={styles.text}>На места, финансируемые за счёт местного бюджета по дополнительным общеобразовательным (общеразвивающим) программам вакантных мест для приёма (перевода) нет.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
