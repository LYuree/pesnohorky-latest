import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import styles from "./AntiExtremismPage.module.css";

export default function AntiExtremismPage() {
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
            <span>Профилактика экстремизма и терроризма</span>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.title}>Профилактика экстремизма и терроризма</h1>

          <p className={styles.text}>
            <a
              className={styles.link}
              href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc02485020240212090617.pdf"
              rel="noreferrer"
              target="_blank"
            >
              <u>
                Порядок работы со служебной информацией ограниченного распространения в МБУ ДО «ЦЭВ «Песнохорки»
              </u>
            </a>
          </p>

          <p className={styles.text}>
            <a
              className={styles.link}
              href="https://xn--e1agflfadmf6b.xn--p1ai/uploads/files/doc02485120240212090652(1).pdf"
              rel="noreferrer"
              target="_blank"
            >
              <u>
                Инструкция о порядке обращения со служебной информацией ограниченного распространения в МБУ ДО «ЦЭВ «Песнохорки»
              </u>
            </a>
          </p>

          <p className={styles.text}>&nbsp;</p>

          <p className={styles.text}>
            С целью профилактики экстремизма несовершеннолетних, предлагаем вниманию педагогов и родителей видеофильм
            «Чёрное пятно», разработанный{" "}
            <a className={styles.link} href="http://potencial22.ru/" rel="noreferrer" target="_blank">
              МБУ ДО ГППЦ «Потенциал»
            </a>{" "}
            совместно с комитетом по образованию города Барнаула в рамках реализации программы «Комплексные меры по
            профилактике зависимых состояний и противодействию незаконному обороту наркотиков в городе Барнауле на
            2015-2020 годы».
          </p>

          <p className={styles.text}>
            Возрастная классификация данного видеофильма 18+, поэтому для просмотра необходима регистрация на
            видеохостинге YouTube для подтверждения своего возраста. (из письма{" "}
            <a className={styles.link} href="http://potencial22.ru/" rel="noreferrer" target="_blank">
              МБУ ДО ГППЦ «Потенциал»
            </a>{" "}
            (орфография и пунктуация авторская))
          </p>

          <div className={styles.videoPlaceholder}>
            <span className={styles.videoPlaceholderText}>Видео</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
