import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { Pagination } from "../../components/news/Pagination/Pagination";
import { PageHeader } from "../../components/shared/PageHeader/PageHeader";
import { fetchNewsList, type NewsItem } from "../../lib/api";
import styles from "./NewsLandingPage.module.css";

const PER_PAGE = 9;

function parseDate(dateStr: string) {
  const months = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря",
  ];
  const d = new Date(dateStr);
  return {
    day: String(d.getDate()),
    month: months[d.getMonth()] ?? "",
    year: String(d.getFullYear()),
  };
}

export default function NewsLandingPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchNewsList()
      .then(setNews)
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  const totalPages = Math.ceil(news.length / PER_PAGE);
  const pageItems = news.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className={styles.page}>
      <MobileHeader />

      <PageHeader crumbs={[
        { label: "Главная", to: "/" },
        { label: "Новости" },
      ]} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Новости и Анонсы</h1>
        </div>
      </section>

      {/* News grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          {!loaded && <p className={styles.emptyMsg}>Загрузка...</p>}
          {loaded && news.length === 0 && <p className={styles.emptyMsg}>Новостей пока нет</p>}

          {loaded && pageItems.length > 0 && (
            <>
              <div className={styles.newsGrid}>
                {pageItems.map((n) => {
                  const d = parseDate(n.date);
                  return (
                    <Link key={n.id} to={`/news/${n.id}`} className={styles.newsCard}>
                      <div className={styles.newsCardImgWrap}>
                        {n.image_url ? (
                          <img src={n.image_url} alt={n.title} className={styles.newsCardImg} />
                        ) : (
                          <div className={styles.newsCardImgPlaceholder} />
                        )}
                      </div>
                      <div className={styles.newsCardDate}>
                        <span className={styles.newsCardDay}>{d.day}</span>
                        <span className={styles.newsCardMonth}>{d.month} {d.year}</span>
                      </div>
                      <h3 className={styles.newsCardTitle}>{n.title}</h3>
                      {n.preview && <p className={styles.newsCardPreview}>{n.preview}</p>}
                    </Link>
                  );
                })}
              </div>

              <Pagination current={page} total={totalPages} onChange={setPage} />
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
