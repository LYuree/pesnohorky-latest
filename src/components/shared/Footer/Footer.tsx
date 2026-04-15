import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFooter, type FooterData } from "../../../lib/api";
import styles from "./Footer.module.css";

export function Footer() {
  const [data, setData] = useState<FooterData | null>(null);

  useEffect(() => {
    fetchFooter().then(setData).catch(() => {});
  }, []);

  const contacts = data?.contacts ?? [];
  const links = data?.links ?? [];
  const col1 = links.filter((l) => l.col === 1);
  const col2 = links.filter((l) => l.col === 2);
  const col3 = links.filter((l) => l.col === 3);

  return (
    <footer className={styles.root}>
      <div className={styles.footerRed}>
        <div className={styles.footerRedContent}>
          <h2 className={styles.footerTitle}>Контакты</h2>
          <div className={styles.footerColumns}>
            {contacts.length > 0 ? (
              <div className={styles.footerCol}>
                {contacts.map((c) => {
                  if (c.field === "phone") {
                    return <a key={c.id} href={`tel:${c.value}`}>{c.value}</a>;
                  }
                  if (c.field === "email") {
                    return <a key={c.id} href={`mailto:${c.value}`}>{c.value}</a>;
                  }
                  if (c.field === "social") {
                    return <a key={c.id} href={c.value} target="_blank" rel="noreferrer">{c.value}</a>;
                  }
                  return <p key={c.id}>{c.value}</p>;
                })}
              </div>
            ) : (
              <>
                <div className={styles.footerCol}>
                  <p>г. Барнаул, Павловский тракт, 134</p>
                  <p>Пн–Сб 08:00–17:00</p>
                </div>
                <div className={styles.footerCol}>
                  <a href="tel:+73852569463">+7 (3852) 569-463</a>
                  <a href="mailto:pesnohorki@yandex.ru">pesnohorki@yandex.ru</a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {(col1.length > 0 || col2.length > 0 || col3.length > 0) ? (
        <div className={styles.footerLinks}>
          {[col1, col2, col3].map((col, i) =>
            col.length > 0 ? (
              <div className={styles.footerLinkCol} key={i}>
                {col.map((link) =>
                  link.is_external ? (
                    <a key={link.id} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                  ) : (
                    <Link key={link.id} to={link.url}>{link.label}</Link>
                  )
                )}
              </div>
            ) : null
          )}
        </div>
      ) : (
        <div className={styles.footerLinks}>
          <div className={styles.footerLinkCol}>
            <Link to="/about-info">Сведения об образовательной организации</Link>
            <Link to="/about-info/structure">Структура</Link>
            <Link to="/teachers">Педсостав</Link>
          </div>
          <div className={styles.footerLinkCol}>
            <Link to="/about-info/education">Образование</Link>
            <Link to="/parents/anti-corruption">Противодействие коррупции</Link>
            <Link to="/parents/anti-extremism">Противодействие экстремизму</Link>
          </div>
          <div className={styles.footerLinkCol}>
            <Link to="/about-info/finances">Фин-хоз деятельность</Link>
            <Link to="/departments">Объединения</Link>
            <Link to="/contacts">Контакты</Link>
          </div>
        </div>
      )}

      <p className={styles.footerCopyright}>© Песнохорки, 2026</p>
    </footer>
  );
}
