import { useState } from "react";
import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { EnrollModal } from "../../components/shared/EnrollModal/EnrollModal";
import { contactsAssets } from "../../lib/contactsAssets";
import styles from "./ContactsPage.module.css";

export default function ContactsPage() {
  const [showEnroll, setShowEnroll] = useState(false);
  return (
    <div className={styles.page}>
      <MobileHeader />
      <div className={styles.header}>
        <Navbar />
        <div className={styles.breadcrumbs}>
          <span>Главная</span>
          <span>/</span>
          <span>Контакты</span>
        </div>
      </div>

      <main className={styles.main}>
        <section className={styles.contactsSection}>
          <div className={styles.contactsContent}>
            <h1 className={styles.title}>Контакты</h1>

            <div className={styles.body}>
              <p>
                <strong>Наш приоритет&nbsp;—</strong> создание единого
                воспитательно-образовательного этнографического пространства!
              </p>
              <p>&nbsp;</p>
              <p><strong>Адреса (г. Барнаул):</strong></p>
              <ul>
                <li>
                  <strong>административный корпус:</strong> Павловский тракт, 134;
                </li>
                <li>
                  <strong>учебный корпус:</strong> ул. Энтузиастов, 5.
                </li>
              </ul>
              <p>&nbsp;</p>
              <p><strong>Телефоны:</strong></p>
              <ul>
                <li>
                  <strong>бухгалтер&nbsp;—</strong>{" "}
                  <a href="tel:+73852569463">+7 (3852) 569-463</a>;
                </li>
                <li>
                  <strong>директор&nbsp;—</strong>{" "}
                  <a href="tel:+73852569461">+7 (3852) 569-461</a>;
                </li>
                <li>
                  <strong>вахта&nbsp;—</strong>{" "}
                  <a href="tel:+73852569464">+7 (3852) 569-464</a>.
                </li>
              </ul>
              <p>&nbsp;</p>
              <p>
                <strong>E-mail:</strong>{" "}
                <a href="mailto:pesnohorki@yandex.ru">pesnohorki@yandex.ru</a>
              </p>
              <p>&nbsp;</p>
              <p><strong>Социальные сети:</strong> VK</p>
              <p>&nbsp;</p>
              <p><strong>График работы:</strong></p>
              <p>
                <strong>Пн-Сб:</strong> 08.00&nbsp;— 17.00, обед с 12.00 до 12.48
              </p>
              <p>
                <strong>Воскресенье</strong>&nbsp;— выходной
              </p>
            </div>
          </div>

          <div className={styles.branchDeco}>
            <div className={styles.branchDecoInner}>
              <img alt="" className={styles.branchImg} src={contactsAssets.imgBranch1} />
              <img alt="" className={styles.branchImg} src={contactsAssets.imgBranch2} />
              <img alt="" className={styles.branchImg} src={contactsAssets.imgBranch3} />
            </div>
          </div>
        </section>

        <section className={styles.mapSection}>
          <h2 className={styles.mapTitle}>Карта</h2>
          <div className={styles.mapPlaceholder} />
        </section>
        <section style={{ textAlign: "center", padding: "40px 0" }}>
          <button
            type="button"
            onClick={() => setShowEnroll(true)}
            style={{
              background: "#a51312",
              color: "#fff",
              border: "none",
              padding: "14px 36px",
              borderRadius: "8px",
              fontSize: "16px",
              fontFamily: "'Montserrat Alternates', sans-serif",
              cursor: "pointer",
            }}
          >
            Оставить заявку
          </button>
        </section>
      </main>

      <EnrollModal isOpen={showEnroll} onClose={() => setShowEnroll(false)} />
      <Footer />
    </div>
  );
}
