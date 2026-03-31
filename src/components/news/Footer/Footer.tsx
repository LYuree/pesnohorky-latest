import styles from "./Footer.module.css";
import { Heading } from "../../ui/Heading/Heading";

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  return (
    <footer className={[styles.root, className].filter(Boolean).join(" ")}>
      <div className={styles.top}>
        <Heading as="h3" className={styles.title}>
          Контакты
        </Heading>
        <p className={styles.text}>г. Барнаул, ул. Ленина, 100</p>
        <a className={styles.textLink} href="tel:+79131234567">
          +7 (913) 123-45-67
        </a>
        <a className={styles.textLink} href="mailto:mail@pesnohorki.ru">
          mail@pesnohorki.ru
        </a>
      </div>
      <div className={styles.bottom}>
        <a className={styles.link} href="#organization">
          Сведения об образовательной организации
        </a>
        <a className={styles.link} href="#privacy">
          Политика конфиденциальности
        </a>
        <a className={styles.link} href="#feedback">
          Формы обратной связи
        </a>
      </div>
    </footer>
  );
}
