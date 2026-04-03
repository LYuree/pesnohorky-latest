import { Link } from "react-router-dom";
import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { leadershipPageAssets } from "../../lib/leadershipPageAssets";
import styles from "./LeadershipPage.module.css";

export default function LeadershipPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <nav className={styles.breadcrumbs}>
            <Link to="/">Главная</Link>
            <span>/</span>
            <Link to="/about-info">Cведения об образовательной организации</Link>
            <span>/</span>
            <span>Руководство</span>
          </nav>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>Руководство</h1>

          {/* Person 1 — Камалова: photo left, text right */}
          <div className={styles.personRow}>
            <img
              src={leadershipPageAssets.imgKamalova}
              alt=""
              className={styles.personPhoto}
            />
            <div className={styles.personInfo}>
              <p className={styles.personName}>Камалова Ольга Николаевна</p>
              <p className={styles.personDetail}>Директор организации</p>
              <p className={styles.personDetail}>
                контактный телефон: (3852) 56-94-61
              </p>
              <p className={styles.personDetail}>
                адрес электронной почты:{" "}
                <a href="mailto:pesnohorki@yandex.ru" target="_blank" rel="noreferrer">
                  pesnohorki@yandex.ru
                </a>
              </p>
            </div>
          </div>
          <div className={styles.personDivider} />

          {/* Person 2 — Кем: text left, photo right */}
          <div className={styles.personRow}>
            <div className={styles.personInfo}>
              <p className={styles.personName}>Кем Анастасия Сергеевна</p>
              <p className={styles.personDetail}>
                Заместитель директора по учебно-воспитательной работе
              </p>
              <p className={styles.personDetail}>
                контактный телефон: (3852) 56-94-63
              </p>
              <p className={styles.personDetail}>
                адрес электронной почты:{" "}
                <a href="mailto:pesnohorki@yandex.ru" target="_blank" rel="noreferrer">
                  pesnohorki@yandex.ru
                </a>
              </p>
            </div>
            <img
              src={leadershipPageAssets.imgKem}
              alt=""
              className={styles.personPhoto}
            />
          </div>
          <div className={styles.personDivider} />

          {/* Person 3 — Койнова: no photo */}
          <div className={styles.personRow}>
            <div className={styles.personInfo}>
              <p className={styles.personName}>Койнова Лариса Владимировна</p>
              <p className={styles.personDetail}>Заведующий хозяйством</p>
              <p className={styles.personDetail}>
                контактные телефоны: 8(3852) 56-94-63
              </p>
              <p className={styles.personDetail}>
                адрес электронной почты:{" "}
                <a href="mailto:pesnohorki@yandex.ru" target="_blank" rel="noreferrer">
                  pesnohorki@yandex.ru
                </a>
              </p>
            </div>
          </div>
          <div className={styles.personDivider} />

          <p className={styles.footerNote}>
            Сведения о педагогическом составе и руководителях{" "}
            <a
              href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/svedeniya_o_rukovodyashchih_i_pedagogichechskih_rabotnikah.pdf"
              target="_blank"
              rel="noreferrer"
            >
              (посмотреть)
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
