import { Link } from "react-router-dom";
import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { socialCertAssets } from "../../lib/socialCertAssets";
import styles from "./SocialCertPage.module.css";

export default function SocialCertPage() {
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
            <span>Социальный сертификат</span>
          </nav>
        </div>
      </section>

      <main className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>
            Социальный сертификат дополнительного образования
          </h1>

          <div className={styles.mainRow}>
            <div className={styles.textContent}>
              <p className={styles.text}>
                <span className={styles.bold}>
                  Социальный сертификат дополнительного образования
                </span>
                {" — это официальный именной электронный документ (идентификационный номер в реестре), подтверждающий право ребенка на получение образовательных услуг в рамках системы персонифицированного финансирования за счет средств государственного или муниципального бюджета."}
              </p>

              <p className={styles.text}>
                <span className={styles.bold}>Основные положения и правовое регулирование</span>
              </p>
              <ul className={styles.text}>
                <li>
                  Правовая база: Реализация сертификатов осуществляется в соответствии с Федеральным законом № 189-ФЗ «О государственном (муниципальном) социальном заказе на оказание услуг в социальной сфере» и Федеральным законом № 273-ФЗ «Об образовании в Российской Федерации».
                </li>
                <li>
                  Целевая аудитория: Дети в возрасте от 5 до 17 лет включительно.
                </li>
                <li>
                  Номинал: Объем средств или учебных часов, закрепленных за сертификатом на календарный год. Сумма определяется индивидуально каждым муниципалитетом.
                </li>
              </ul>

              <p className={styles.text}>
                <span className={styles.bold}>Порядок оформления и использования</span>
              </p>
              <ol className={styles.text}>
                <li>
                  Получение: Осуществляется через портал «Госуслуги» или региональные информационные системы (Навигаторы дополнительного образования). Заявление подается единожды; ежегодное подтверждение права на сертификат не требуется.
                </li>
                <li>
                  Активация: После подачи заявки документ необходимо активировать в уполномоченной организации или через личный кабинет (зависит от региональных правил).
                </li>
                <li>
                  Выбор программ: Сертификатом можно оплатить занятия по программам, прошедшим независимую оценку качества и включенным в соответствующие реестры (технические, художественные, физкультурно-спортивные и др.).
                </li>
                <li>
                  Ограничения:
                  <ul>
                    <li>
                      Количество одновременно посещаемых кружков по «значимым» программам может быть ограничено (обычно до 3-х).
                    </li>
                    <li>
                      Сертификат, как правило, не распространяется на предпрофессиональные программы в школах искусств и спортивных школах (ДШИ, ДХШ), реализуемые за счет бюджетных ассигнований.
                    </li>
                  </ul>
                </li>
              </ol>

              <p className={styles.text}>
                <span className={styles.bold}>Преимущества для граждан</span>
              </p>
              <ul className={styles.text}>
                <li>
                  Доступность: Возможность обучаться в частных организациях и у индивидуальных предпринимателей, имеющих соответствующую лицензию и включенных в систему социального заказа.
                </li>
                <li>
                  Прозрачность: Контроль остатка средств и учет посещаемости через личный кабинет родителя.
                </li>
                <li>
                  Целевое использование: Денежные средства не выдаются наличными, а перечисляются напрямую образовательной организации за фактически оказанные услуги.
                </li>
              </ul>

              <div className={styles.linksSection}>
                <p className={styles.text}>
                  <span className={styles.bold}>Полезные ссылки:</span>
                </p>
                <a
                  href="https://altai22.pfdo.ru/app/munitipality-info/884"
                  target="_blank"
                  rel="noreferrer"
                  className={[styles.text, styles.link].join(" ")}
                >
                  Портал персонифицированного дополнительного образования Алтайского края
                </a>
                <a
                  href="https://www.gosuslugi.ru/help/faq/sections/102906"
                  target="_blank"
                  rel="noreferrer"
                  className={[styles.text, styles.link].join(" ")}
                >
                  Что такое сертификат дополнительного образования (госуслуги)
                </a>
              </div>
            </div>

            <img
              src={socialCertAssets.imgCertificate}
              alt="Социальный сертификат"
              className={styles.certImg}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
