import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { fetchStaticPage } from "../../lib/api";
import type { StaticPage as StaticPageType } from "../../lib/api";
import styles from "./StaticPage.module.css";

const sectionLabels: Record<string, { label: string; path: string }> = {
  parents: { label: "Родителям", path: "/parents" },
  "about-info": {
    label: "Сведения об образовательной организации",
    path: "/about-info",
  },
};

export default function StaticPage() {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, "");

  const [page, setPage] = useState<StaticPageType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchStaticPage(slug)
      .then((data) => setPage(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug]);

  const sectionInfo = page?.section ? sectionLabels[page.section] : null;

  return (
    <div className={styles.page}>
      <MobileHeader />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <nav className={styles.breadcrumbs}>
            <Link to="/">Главная</Link>
            <span>/</span>
            {sectionInfo && (
              <>
                <Link to={sectionInfo.path}>{sectionInfo.label}</Link>
                <span>/</span>
              </>
            )}
            <span>{page?.title || "..."}</span>
          </nav>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.contentInner}>
          {loading && <p className={styles.loading}>Загрузка...</p>}
          {error && <p className={styles.error}>{error}</p>}
          {page && (
            <>
              <h1 className={styles.title}>{page.title}</h1>
              <div
                className={styles.body}
                dangerouslySetInnerHTML={{ __html: page.content }}
              />
            </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
