import { useState } from "react";
import { Link } from "react-router-dom";
import { figmaAssets } from "../../../lib/figmaAssets";
import styles from "./MobileHeader.module.css";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.root}>
      <div className={styles.bar}>
        {/* Left: burger + logo */}
        <div className={styles.left}>
          <button
            className={styles.burger}
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isOpen ? (
              <span className={styles.burgerClose}>✕</span>
            ) : (
              <span className={styles.burgerLines}>
                <span />
                <span />
                <span />
              </span>
            )}
          </button>
          <Link to="/" className={styles.logoLink} onClick={() => setIsOpen(false)}>
            <img alt="Песнохорки" className={styles.logoImg} src={figmaAssets.imgPesno311} />
          </Link>
        </div>

        {/* Right: social icons + user */}
        <div className={styles.right}>
          <div className={styles.socialIcons}>
            <img alt="" className={styles.socialIcon} src={figmaAssets.imgTablerIconBrandVk} />
            <img alt="" className={styles.socialIcon} src={figmaAssets.imgTablerIconDeviceMobile} />
            <img alt="" className={styles.socialIcon} src={figmaAssets.imgTablerIconBrandTelegram} />
          </div>
          <img alt="" className={styles.userIcon} src={figmaAssets.imgTablerIconUser} />
        </div>
      </div>

      {/* Slide-out menu */}
      {isOpen && (
        <>
          <div className={styles.overlay} onClick={() => setIsOpen(false)} />
          <nav className={styles.menu}>
            <Link to="/news" className={styles.menuLink} onClick={() => setIsOpen(false)}>
              Новости
            </Link>
            <Link to="/parents" className={styles.menuLink} onClick={() => setIsOpen(false)}>
              Родителям
            </Link>
            <Link to="/about-info" className={styles.menuLink} onClick={() => setIsOpen(false)}>
              Сведения об образовательной организации
            </Link>
            <Link to="/about" className={styles.menuLink} onClick={() => setIsOpen(false)}>
              О центре
            </Link>
            <Link to="/contacts" className={styles.menuLink} onClick={() => setIsOpen(false)}>
              Контакты
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}
