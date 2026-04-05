import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { fetchNewsDetail, type NewsDetail } from "../../lib/api";
import styles from "./NewsDetailPage.module.css";

function formatDate(dateStr: string) {
  const months = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря",
  ];
  const d = new Date(dateStr);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [news, setNews] = useState<NewsDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;
    fetchNewsDetail(slug)
      .then(setNews)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <div className={styles.page}>
      <MobileHeader />

      {/* ── Hero section (red) ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Navbar />
          <div className={styles.breadcrumbs}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Главная</Link>
            <span>/</span>
            <Link to="/news" style={{ color: "inherit", textDecoration: "none" }}>Новости</Link>
            <span>/</span>
            <span>{news?.title ?? "..."}</span>
          </div>

          {news && (
            <>
              <div className={styles.heroMeta}>
                <span className={styles.heroSection}>Наши новости</span>
              </div>

              <div className={styles.heroDateRow}>
                <span>{formatDate(news.date)}</span>
              </div>

              <h1 className={styles.heroTitle}>{news.title}</h1>

              {news.image_url && (
                <div className={styles.heroImgWrap}>
                  <img alt="" className={styles.heroImg} src={news.image_url} />
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Article body ── */}
      <section className={[styles.articleSection, styles.articleSectionWhite].join(" ")}>
        <div className={styles.articleInner}>
          {loading && <p className={styles.articleText}>Загрузка...</p>}
          {error && <p className={styles.articleText}>Ошибка: {error}</p>}

          {news && (
            <div
              className={styles.articleMain}
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          )}
        </div>
      </section>

      {/* ── Back link ── */}
      <section className={styles.relatedSection}>
        <div className={styles.relatedInner}>
          <Link to="/news" className={styles.backLink}>
            ← Назад к новостям
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
