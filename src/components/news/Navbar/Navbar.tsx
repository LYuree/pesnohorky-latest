import styles from "./Navbar.module.css";
import { figmaAssets } from "../../../lib/figmaAssets";

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  const navLinks = [
    { label: "Новости", href: "#news" },
    { label: "Родителям", href: "#parents" },
    { label: "Cведения об образовательной организации", href: "#organization" },
    { label: "О центре", href: "#about" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} data-component="Navbar">
      <div className={styles.logoWrap} data-name="pesno3_logo">
        <img alt="" className={styles.logoImg} src={figmaAssets.imgPesno311} />
      </div>

      <div className={styles.links} data-name="nav_links">
        {navLinks.map((link) => (
          <div className={styles.linkItem} key={link.href}>
            <a className={styles.linkText} href={link.href}>
              {link.label}
            </a>
          </div>
        ))}
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

