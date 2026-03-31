import { Link } from "react-router-dom";
import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { antiCorruptionAssets } from "../../lib/antiCorruptionAssets";
import styles from "./AntiCorruptionPage.module.css";

const legalLinks = [
  {
    text: 'Федеральный закон от 25.12.2008 №273-ФЗ «О противодействии коррупции». Закон Алтайского края от 03.06.2010 № 46-ЗС «О противодействии коррупции в Алтайском крае»',
    linkLabel: "Скачать для подробного просмотра",
    href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Protiv__korr__v_OO.ppt",
  },
];

const docLinks = [
  {
    label: "Просмотреть на сайте Министерства Образования и Науки",
    href: "http://www.educaltai.ru/about_main/anti_corruption/methodical_materials/index.php",
  },
  {
    label: "Приказ о утверждении и вводе в действие нормативно-правовых актов",
    href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/prikaz(1).pdf",
  },
  {
    label: "Антикоррупционная политика МБУ ДО «ЦЭВ «Песнохорки»",
    href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/antikorruptsionnaya_politika(1).pdf",
  },
  {
    label: "Положение о конфликте интересов в МБУ ДО «ЦЭВ «Песнохорки»",
    href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/polozhenie_o_konflikte_interesov.pdf",
  },
  {
    label: "Положение о порядке уведомления руководителя о фактах обращения в целях склонения к совершению коррупционных правонарушений",
    href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/polozhenie_o_poryadke_uvedomleniya(1).pdf",
  },
  {
    label: "Кодекс этики и служебного поведения работников МБУ ДО «ЦЭВ «Песнохорки»",
    href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/kodeks_etiki.pdf",
  },
  {
    label: "План мероприятий по противодействию коррупции МБУ ДО «ЦЭВ «Песнохорки» на 2023-2024 учебный год",
    href: "https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/plan_meropriyatiy_po_protivodkystviyu_korruptsii.pdf",
  },
];

export default function AntiCorruptionPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />

      <section className={styles.header}>
        <div className={styles.headerInner}>
          <Navbar />
          <nav className={styles.breadcrumbs} aria-label="Навигация">
            <Link to="/" className={styles.breadcrumbLink}>Главная</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <Link to="/parents" className={styles.breadcrumbLink}>Родителям</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span>Противодействие коррупции</span>
          </nav>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.mainInner}>
          <h1 className={styles.title}>Противодействие коррупции</h1>

          {/* Top 2-column × 3-row image grid */}
          <div className={styles.topGrid}>
            {antiCorruptionAssets.topGrid.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className={styles.topGridImg}
              />
            ))}
          </div>

          {/* Middle 3-column grid */}
          <div className={styles.middleGrid}>
            {antiCorruptionAssets.middleGrid.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className={styles.middleGridImg}
              />
            ))}
          </div>

          {/* Standalone document image */}
          <img
            src={antiCorruptionAssets.docImg}
            alt=""
            className={styles.docImg}
          />

          {/* Legal text + links section */}
          <div className={styles.linksSection}>
            {legalLinks.map((item) => (
              <p key={item.href} className={styles.legalText}>
                {item.text}{" "}
                <a
                  href={item.href}
                  className={styles.docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.linkLabel}
                </a>
              </p>
            ))}

            {docLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.docLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
