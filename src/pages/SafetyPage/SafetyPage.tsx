import { Link } from "react-router-dom";
import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { safetyPageAssets } from "../../lib/safetyPageAssets";
import styles from "./SafetyPage.module.css";

const safetyLinks = [
  {
    label: "Анализ аварийности с участием детей на дорогах за 5 месяцев 2025 года",
    href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Analiz_deti_gorod_5_mesyatsev_2025_May__1_.doc",
  },
  {
    label: "Ответственность за ложные звонки",
    href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/avgust_otvetstvennost_za_lozhnie_soobshcheniya.pdf",
  },
  {
    label: "Памятка безопасности в зимний период Прочитать",
    href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/besopasnost_simoi.pdf",
  },
  {
    label: "Внимание — лёд! Прочитать",
    href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/vnimanie_led.pdf",
  },
  {
    label: "Осторожно сосульки! Прочитать",
    href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/sosulki.pdf",
  },
  {
    label: "Организация детского досуга на зимних горках",
    href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Gorki.docx",
  },
];

export default function SafetyPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <nav className={styles.breadcrumbs}>
            <Link to="/">Главная</Link>
            <span>/</span>
            <Link to="/parents">Родителям</Link>
            <span>/</span>
            <span>Безопасность и ответственность</span>
          </nav>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>Безопасность и ответственность</h1>
          <div className={styles.imagesRow}>
            <img
              src={safetyPageAssets.imgFamily1}
              alt=""
              className={styles.safetyImage}
            />
            <img
              src={safetyPageAssets.imgFamily2}
              alt=""
              className={styles.safetyImage}
            />
          </div>
          <div className={styles.linksList}>
            {safetyLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.safetyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
