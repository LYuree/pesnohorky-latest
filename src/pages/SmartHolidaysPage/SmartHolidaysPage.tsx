import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import styles from "./SmartHolidaysPage.module.css";

export default function SmartHolidaysPage() {
  return (
    <div className={styles.page}>
      <MobileHeader />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <div className={styles.breadcrumbs}>
            <span>Главная</span>
            <span>/</span>
            <span>Родителям</span>
            <span>/</span>
            <span>Умные каникулы</span>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>Умные каникулы</h1>

          <p className={styles.textBold}>Добро пожаловать на "Умные Каникулы"!</p>

          <p className={styles.text}>
            УМНЫЕ КАНИКУЛЫ – это не просто профессионально организованный удаленный детский отдых
            вместе с МБУДО ЦЭВ «Песнохорки», но также занятия и масер-классы в игровой форме и
            увлекательная занятость детей в течение всего дня.
          </p>

          <p className={styles.text}>
            Сотрудники УМНЫХ КАНИКУЛ – это педагоги нашего центра, хорошо образованные и творческие
            кадры. Они работают и создают веселые уроки для ваших детей, чтобы они могли чувствовать
            себя на творческом подъеме в не простых для детей условиях самоизоляции.
          </p>

          <p className={styles.textBold}>Умные каникулы</p>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              Педагог дополнительного образования Терентьева А.Ю.{" "}
              <a
                className={styles.link}
                href="https://disk.yandex.ru/i/DILkFqAZNyyLsw"
                rel="noreferrer"
                target="_blank"
              >
                Пальчиковые игры
              </a>
            </li>
            <li className={styles.listItem}>
              Педагог дополнительного образования Косилова Н.В.{" "}
              <a
                className={styles.link}
                href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/master_klass_umnie_kanikuli_mishka.docx"
                rel="noreferrer"
                target="_blank"
              >
                Мастер-класс
              </a>
            </li>
            <li className={styles.listItem}>
              Педагог дополнительного образования Ясевич Н.И.{" "}
              <a
                className={styles.link}
                href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Master-klass_po_lepke_Ovsyannikov_I_.pptx"
                rel="noreferrer"
                target="_blank"
              >
                Мастер-класс по лепке
              </a>
            </li>
            <li className={styles.listItem}>
              Педагог дополнительного образования Мельникова Л.В. презентация и{" "}
              <a
                className={styles.link}
                href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/Prazdniki_oseni__1_.pptx"
                rel="noreferrer"
                target="_blank"
              >
                аудиоурок
              </a>{" "}
              по теме «Народный календарь. Осень»
            </li>
            <li className={styles.listItem}>
              Педагог дополнительного образования Пятибратова Н.С. мастер-класс по
              декоративно-прикладному творчеству{" "}
              <a
                className={styles.link}
                href="http://https://cloud.mail.ru/stock/fQFRsZxSh964S8jvTvbrpGgc"
                rel="noreferrer"
                target="_blank"
              >
                «Цыпленок из помпона»
              </a>
            </li>
            <li className={styles.listItem}>
              Педагог дополнительного образования Заркова О.С.{" "}
              <a
                className={styles.link}
                href="https://disk.yandex.ru/i/DILkFqAZNyyLsw"
                rel="noreferrer"
                target="_blank"
              >
                Разминка перед хореографическим занятием
              </a>
            </li>
            <li className={styles.listItem}>
              Педагог дополнительного образования Горопах Е.С.{" "}
              <a
                className={styles.link}
                href="https://disk.yandex.ru/i/DILkFqAZNyyLsw"
                rel="noreferrer"
                target="_blank"
              >
                Видеоурок
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
