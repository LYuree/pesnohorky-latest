import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { figmaAssets } from "../../../lib/figmaAssets";

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} data-component="Navbar">
      <div className={styles.logoWrap} data-name="pesno3_logo">
        <img alt="" className={styles.logoImg} src={figmaAssets.imgPesno311} />
      </div>

      <div className={styles.links} data-name="nav_links">
        <Link to="/news" className={styles.linkItem}>
          <p className={styles.linkText}>Новости</p>
        </Link>
        <Link to="/parents" className={styles.linkItem}>
          <p className={styles.linkText}>Родителям</p>
        </Link>
        <Link to="/about-info" className={styles.linkItem}>
          <p className={styles.linkText}>Cведения об образовательной организации</p>
        </Link>
        <Link to="/about" className={styles.linkItem}>
          <p className={styles.linkText}>О центре</p>
        </Link>
        <Link to="/contacts" className={styles.linkItem}>
          <p className={styles.linkText}>Контакты</p>
        </Link>
      </div>

      <div className={styles.right} data-name="nav_right">
        <div className={styles.socialIcons}>
          <div className={styles.iconWrap}>
            <img alt="" className={styles.iconImg} src={figmaAssets.imgTablerIconBrandVk} />
          </div>
          <div className={styles.iconWrap}>
            <img alt="" className={styles.iconImg} src={figmaAssets.imgTablerIconDeviceMobile} />
          </div>
          <div className={styles.iconWrap}>
            <img alt="" className={styles.iconImg} src={figmaAssets.imgTablerIconBrandTelegram} />
          </div>
          <div className={styles.iconWrap}>
            <img alt="" className={styles.iconImg} src={figmaAssets.imgTablerIconBrandWhatsapp} />
          </div>
        </div>

        <div className={styles.userWrap}>
          <img alt="" className={styles.userImg} src={figmaAssets.imgTablerIconUser} />
        </div>
      </div>
    </div>
  );
}

