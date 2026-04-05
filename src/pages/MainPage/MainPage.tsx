import { Navbar } from "../../components/news/Navbar/Navbar";
import { Footer } from "../../components/news/Footer/Footer";
import styles from "./MainPage.module.css";
import { Heading } from "../../components/ui/Heading/Heading";

export default function MainPage() {
  return (
    <div className={styles.page}>
      <header className={styles.navbarPos}>
        <Navbar />
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <Heading as="h2" className={styles.heroTitle}>
            Песнохорки
          </Heading>
        </section>

        <Heading as="h1" className={styles.title}>
          Главная страница
        </Heading>
        <p className={styles.subtitle}>
          Здесь будет основной контент сайта: новости, анонсы, направления и блоки центра.
        </p>
      </main>

      <Footer className={styles.footerPos} />
    </div>
  );
}
