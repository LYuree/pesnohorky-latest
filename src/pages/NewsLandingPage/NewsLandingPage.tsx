import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { Pagination } from "../../components/news/Pagination/Pagination";
import { FilterChip } from "../../components/news/FilterChip/FilterChip";
import { NewsCardMedium } from "../../components/news/NewsCardMedium/NewsCardMedium";
import { NewsCardFeatured } from "../../components/news/NewsCardFeatured/NewsCardFeatured";
import { NewsCardLight } from "../../components/news/NewsCardLight/NewsCardLight";
import { NewsCardEvent } from "../../components/news/NewsCardEvent/NewsCardEvent";
import { figmaAssets } from "../../lib/figmaAssets";
import { fetchNewsList, type NewsItem } from "../../lib/api";
import styles from "./NewsLandingPage.module.css";
import { Heading } from "../../components/ui/Heading/Heading";

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

  useEffect(() => {
    fetchNewsList()
      .then(setNews)
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  // Split into sections: first 3 = medium, next 1 = featured, next 2 = light, rest = events
  const mediumItems = news.slice(0, 3);
  const featuredItem = news[3];
  const lightItems = news.slice(4, 6);
  const eventItems = news.slice(6);

  return (
    <div className={styles.page} data-page="NewsLandingPage">
      <MobileHeader />

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Hero / Header Red ── */}
      <section className={styles.hero}>
        {/* Decorative elements */}
        <div className={styles.heroDecor} aria-hidden="true">
          <img className={styles.heroDecorImg1} src={figmaAssets.imgGroup12} alt="" />
          <img className={styles.heroDecorImg2} src={figmaAssets.imgGroup10} alt="" />
        </div>

        <div className={styles.container}>
          <Heading as="h1" className={styles.heroTitle}>
            Новости и Анонсы
          </Heading>

          {/* Filter row */}
          <div className={styles.filterRow}>
            <FilterChip className={styles.filterAll} label="Все" />

            <button className={styles.filterChip} type="button">
              <span className={styles.filterChipLabel}>Направления</span>
              <img className={styles.filterChipIcon} src={figmaAssets.imgVector} alt="" />
            </button>

            <button className={styles.filterChip} type="button">
              <span className={styles.filterChipLabel}>Преподаватели</span>
              <img className={styles.filterChipIcon} src={figmaAssets.imgVector} alt="" />
            </button>
          </div>

          {/* Search + date filters */}
          <div className={styles.controlsRow}>
            <div className={styles.dateFilters}>
              <span className={styles.dateLabel}>За все время</span>

              <img className={styles.dateSep} src={figmaAssets.imgFrame18114650} alt="" />

              <button className={styles.dateChip} type="button">
                <span>2026</span>
                <img className={styles.dateChipIcon} src={figmaAssets.imgVector} alt="" />
              </button>

              <img className={styles.dateSep} src={figmaAssets.imgFrame18114650} alt="" />

              <button className={styles.dateChip} type="button">
                <span>Март</span>
                <img className={styles.dateChipIcon} src={figmaAssets.imgVector} alt="" />
              </button>

              <img className={styles.dateSep} src={figmaAssets.imgFrame18114650} alt="" />

              <button className={styles.dateChip} type="button">
                <span>23</span>
                <img className={styles.dateChipIcon} src={figmaAssets.imgVector} alt="" />
              </button>

              <img className={styles.dateSep} src={figmaAssets.imgFrame18114650} alt="" />

              <img className={styles.calendarIcon} src={figmaAssets.imgTablerIconCalendarWeek} alt="" />
            </div>

            <div className={styles.searchBox}>
              <input className={styles.searchInput} type="text" placeholder="Поиск новостей" />
              <button className={styles.searchBtn} type="button">
                <img className={styles.searchBtnIcon} src={figmaAssets.imgFrame382} alt="Поиск" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── News row (3 medium cards) ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.mediumCardsRow}>
            {loaded && mediumItems.length > 0
              ? mediumItems.map((n) => {
                  const d = parseDate(n.date);
                  return (
                    <Link key={n.id} to={`/news/${n.id}`} style={{ textDecoration: "none" }}>
                      <NewsCardMedium title={n.title} day={d.day} month={d.month} year={d.year} />
                    </Link>
                  );
                })
              : <>
                  <NewsCardMedium />
                  <NewsCardMedium />
                  <NewsCardMedium />
                </>
            }
          </div>
        </div>
      </section>

      {/* ── News band ── */}
      <div className={styles.newsBand}>
        <div className={styles.container}>
          <Heading as="h2" className={styles.newsBandTitle}>
            Новости
          </Heading>
        </div>
        <img className={styles.newsBandDecor} src={figmaAssets.imgGroup54} alt="" aria-hidden="true" />
      </div>

      {/* ── Featured + Light cards ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.featuredRow}>
            {loaded && featuredItem ? (
              <Link to={`/news/${featuredItem.id}`} style={{ textDecoration: "none" }}>
                <NewsCardFeatured
                  headline={featuredItem.title}
                  description={featuredItem.preview}
                  {...parseDate(featuredItem.date)}
                />
              </Link>
            ) : (
              <NewsCardFeatured />
            )}
            <div className={styles.lightColumn}>
              {loaded && lightItems.length > 0
                ? lightItems.map((n) => {
                    const d = parseDate(n.date);
                    return (
                      <Link key={n.id} to={`/news/${n.id}`} style={{ textDecoration: "none" }}>
                        <NewsCardLight title={n.title} day={d.day} month={d.month} year={d.year} />
                      </Link>
                    );
                  })
                : <>
                    <NewsCardLight />
                    <NewsCardLight />
                  </>
              }
            </div>
          </div>
        </div>
      </section>

      {/* ── Closest events ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <Heading as="h2" className={styles.sectionTitle}>
            Ближайшие события
          </Heading>

          <div className={styles.eventsList}>
            {loaded && eventItems.length > 0
              ? eventItems.map((n) => {
                  const d = parseDate(n.date);
                  return (
                    <Link key={n.id} to={`/news/${n.id}`} style={{ textDecoration: "none" }}>
                      <NewsCardEvent
                        title={n.title}
                        description={n.preview}
                        day={d.day}
                        month={d.month}
                        year={d.year}
                      />
                    </Link>
                  );
                })
              : new Array(8).fill(null).map((_, idx) => (
                  <NewsCardEvent key={idx} />
                ))
            }
          </div>

          <div className={styles.paginationWrap}>
            <Pagination />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
