import { homeAssets } from "../../../lib/homeAssets";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.footerRed}>
        <div className={styles.footerRedContent}>
          <h2 className={styles.footerTitle}>Контакты</h2>
          <div className={styles.footerColumns}>
            <div className={[styles.footerCol, styles.footerColFirst].join(" ")}>
              <p>11 11 11, г. Барнаул, ул. Ленина, 100</p>
              <div className={styles.footerHoursRow}>
                <span className={styles.footerHoursTime}>08:00 - 18:00</span>
                <span>Пн-Сб</span>
              </div>
            </div>
            <div className={styles.footerCol}>
              <p>+7 (913) 123-45-67</p>
              <p>mail@pesnohorki.ru</p>
              <p>https://vk.com/pesnohorki</p>
            </div>
            <div className={styles.footerCol}>
              <p>Пользовательское соглашение</p>
              <p>Политика конфиденциальности</p>
              <p>Обработка персональных данных</p>
            </div>
          </div>
        </div>
        <div className={styles.footerBranch}>
          <div className={styles.footerBranchInner}>
            <img alt="" className={styles.branchImg} src= '../../img/footer/branchred.svg' />
          </div>
        </div>
        <p className={styles.footerYod}>ЙОD@2026</p>
      </div>

      <div className={styles.footerLinks}>
        <div className={[styles.footerLinkCol, styles.footerLinkColFirst].join(" ")}>
          <p>Сведения об образовательной организации</p>
          <p>Основные сведения</p>
          <p>Педсостав</p>
        </div>
        <div className={styles.footerLinkCol}>
          <p>Образование</p>
          <p>Противодействие коррупции</p>
          <p>Противодействие терроризму</p>
        </div>
        <div className={styles.footerLinkCol}>
          <p>Фин-хоз деятельность</p>
          <p>Образовательные стандарты</p>
          <p>Формы обратной связи</p>
        </div>
      </div>

      <p className={styles.footerCopyright}>ЙОD@2026</p>
    </footer>
  );
}
