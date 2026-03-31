import { Link } from "react-router-dom";
import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { qualityAssessmentAssets } from "../../lib/qualityAssessmentAssets";
import styles from "./QualityAssessmentPage.module.css";

export default function QualityAssessmentPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <nav className={styles.breadcrumbs} aria-label="Навигация">
            <Link to="/" className={styles.link}>Главная</Link>
            <span>/</span>
            <Link to="/parents" className={styles.link}>Родителям</Link>
            <span>/</span>
            <span>Независимая оценка качества</span>
          </nav>
        </div>
      </section>

      <main className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>
            Независимая оценка качества работы образовательных организаций
          </h1>

          <div className={styles.videoPlaceholder} />

          <p className={styles.text}>
            Видеоролик о проведении независимой оценки качества условий осуществления образовательной деятельности образовательными организациями.
          </p>

          <p className={styles.text}>
            <a
              href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/tsentr_pesnohorki.pdf"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              План мероприятий по улучшению качества работы образовательной организации, по результатам независимой оценки качества деятельности. Открыть для просмотра
            </a>
          </p>

          <div className={styles.docsRow}>
            <img
              src={qualityAssessmentAssets.imgDoc1}
              alt=""
              className={styles.docImg}
            />
            <img
              src={qualityAssessmentAssets.imgDoc2}
              alt=""
              className={styles.docImg}
            />
          </div>

          <p className={styles.text}>
            Независимая оценка качества предоставления образовательных услуг образовательными организациями{" "}
            <a
              href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/nok_OD_2017_reiting_barnaul.xls"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              (скачать EXCEL)
            </a>
          </p>

          <p className={styles.text}>
            <a
              href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/svodnye_dannye_NOK_barnaul.xls"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Информация о деятельности общеобразовательных организаций
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
