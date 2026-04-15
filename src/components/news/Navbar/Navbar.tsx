import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} data-component="Navbar">
      <Link to="/" className={styles.logoWrap} data-name="pesno3_logo">
        <img alt="Песнохорки" className={styles.logoImg} src="/images/pesno3_1 1.png" />
      </Link>

      <div className={styles.links} data-name="nav_links">
        <Link to="/news" className={styles.linkItem}>
          <p className={styles.linkText}>Новости</p>
        </Link>
        <Link to="/departments" className={styles.linkItem}>
          <p className={styles.linkText}>Коллективы</p>
        </Link>
        <Link to="/teachers" className={styles.linkItem}>
          <p className={styles.linkText}>Педагоги</p>
        </Link>
        <Link to="/parents" className={styles.linkItem}>
          <p className={styles.linkText}>Родителям</p>
        </Link>
        <Link to="/about-info" className={styles.linkItem}>
          <p className={styles.linkText}>Сведения об организации</p>
        </Link>
        <Link to="/about" className={styles.linkItem}>
          <p className={styles.linkText}>О центре</p>
        </Link>
        <Link to="/contacts" className={styles.linkItem}>
          <p className={styles.linkText}>Контакты</p>
        </Link>
      </div>

    </div>
  );
}

