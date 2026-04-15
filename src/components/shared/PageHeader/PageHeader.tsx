import { Link } from "react-router-dom";
import { Navbar } from "../../news/Navbar/Navbar";
import styles from "./PageHeader.module.css";

type Crumb = {
  label: string;
  to?: string;
};

type PageHeaderProps = {
  crumbs?: Crumb[];
};

export function PageHeader({ crumbs }: PageHeaderProps) {
  return (
    <div className={styles.root}>
      <Navbar />
      {crumbs && crumbs.length > 0 && (
        <div className={styles.inner}>
          <nav className={styles.breadcrumbs} aria-label="Навигация">
            {crumbs.map((crumb, i) => (
              <span key={i}>
                {i > 0 && <span className={styles.sep}>/</span>}
                {crumb.to ? (
                  <Link to={crumb.to} className={styles.link}>{crumb.label}</Link>
                ) : (
                  <span className={styles.current}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
