import { Navbar } from "../../components/news/Navbar/Navbar";
import { MobileHeader } from "../../components/shared/MobileHeader/MobileHeader";
import { Footer } from "../../components/shared/Footer/Footer";
import { Pagination } from "../../components/news/Pagination/Pagination";
import { FilterChip } from "../../components/news/FilterChip/FilterChip";
import { NewsCardLight } from "../../components/news/NewsCardLight/NewsCardLight";
import { NewsCardFeatured } from "../../components/news/NewsCardFeatured/NewsCardFeatured";
import { NewsCardMedium } from "../../components/news/NewsCardMedium/NewsCardMedium";
import { NewsCardEvent } from "../../components/news/NewsCardEvent/NewsCardEvent";
import { figmaAssets } from "../../lib/figmaAssets";
import styles from "./NewsLandingPage.module.css";
import { Heading } from "../../components/ui/Heading/Heading";

export default function NewsLandingPage() {
  return (
    <div className={styles.page} data-page="NewsLandingPage">
      <MobileHeader />

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Hero / Header Red ── */}
      <section className={styles.hero}>
        {/* Decorative elements — absolute is justified here */}
        <div className={styles.heroDecor} aria-hidden="true">
          <img
            className={styles.heroDecorImg1}
            src={figmaAssets.imgGroup12}
            alt=""
          />
          <img
            className={styles.heroDecorImg2}
            src={figmaAssets.imgGroup10}
            alt=""
          />
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
              <img
                className={styles.filterChipIcon}
                src={figmaAssets.imgVector}
                alt=""
              />
            </button>

            <button className={styles.filterChip} type="button">
              <span className={styles.filterChipLabel}>Преподаватели</span>
              <img
                className={styles.filterChipIcon}
                src={figmaAssets.imgVector}
                alt=""
              />
            </button>
          </div>

          {/* Search + date filters */}
          <div className={styles.controlsRow}>
            <div className={styles.dateFilters}>
              <span className={styles.dateLabel}>За все время</span>

              <img
                className={styles.dateSep}
                src={figmaAssets.imgFrame18114650}
                alt=""
              />

              <button className={styles.dateChip} type="button">
                <span>2026</span>
                <img
                  className={styles.dateChipIcon}
                  src={figmaAssets.imgVector}
                  alt=""
                />
              </button>

              <img
                className={styles.dateSep}
                src={figmaAssets.imgFrame18114650}
                alt=""
              />

              <button className={styles.dateChip} type="button">
                <span>Март</span>
                <img
                  className={styles.dateChipIcon}
                  src={figmaAssets.imgVector}
                  alt=""
                />
              </button>

              <img
                className={styles.dateSep}
                src={figmaAssets.imgFrame18114650}
                alt=""
              />

              <button className={styles.dateChip} type="button">
                <span>23</span>
                <img
                  className={styles.dateChipIcon}
                  src={figmaAssets.imgVector}
                  alt=""
                />
              </button>

              <img
                className={styles.dateSep}
                src={figmaAssets.imgFrame18114650}
                alt=""
              />

              <img
                className={styles.calendarIcon}
                src={figmaAssets.imgTablerIconCalendarWeek}
                alt=""
              />
            </div>

            <div className={styles.searchBox}>
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Поиск новостей"
              />
              <button className={styles.searchBtn} type="button">
                <img
                  className={styles.searchBtnIcon}
                  src={figmaAssets.imgFrame382}
                  alt="Поиск"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── News row (3 medium cards) ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.mediumCardsRow}>
            <NewsCardMedium />
            <NewsCardMedium />
            <NewsCardMedium />
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
        <img
          className={styles.newsBandDecor}
          src={figmaAssets.imgGroup54}
          alt=""
          aria-hidden="true"
        />
      </div>

      {/* ── Featured + Light cards ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.featuredRow}>
            <NewsCardFeatured />
            <div className={styles.lightColumn}>
              <NewsCardLight />
              <NewsCardLight />
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
            {new Array(8).fill(null).map((_, idx) => (
              <NewsCardEvent key={idx} />
            ))}
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
