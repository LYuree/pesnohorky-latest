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

      <div className={styles.topRed} data-name="header_red">
        <div className={styles.decorVLine1}>
          <img alt="" className={styles.decorVLineImg} src={figmaAssets.img} />
        </div>
        <div className={styles.decorVLine2}>
          <img alt="" className={styles.decorVLineImg} src={figmaAssets.img} />
        </div>

        <Heading as="h1" className={styles.topTitle}>
          Новости и Анонсы
        </Heading>

        <div className={styles.filterChip1}>
          <img alt="" className={styles.filterChipBg} src={figmaAssets.imgFrame18114623} />
          <div className={styles.filterChipLabel}>Направления</div>
          <div className={styles.filterChipIcon}>
            <div className={styles.filterChipIconInner}>
              <img alt="" className={styles.filterChipIconImg} src={figmaAssets.imgVector} />
            </div>
          </div>
        </div>

        <div className={styles.filterChip2}>
          <img alt="" className={styles.filterChipBg} src={figmaAssets.imgFrame18114623} />
          <div className={styles.filterChipLabel}>Преподаватели</div>
          <div className={styles.filterChipIcon}>
            <div className={styles.filterChipIconInner}>
              <img alt="" className={styles.filterChipIconImg} src={figmaAssets.imgVector} />
            </div>
          </div>
        </div>

        <div className={styles.searchBox}>
          <div className={styles.searchPlaceholder}>Поиск новостей</div>
          <div className={styles.searchIconBox}>
            <div className={styles.searchIconInner}>
              <img alt="" className={styles.searchIconImg} src={figmaAssets.imgFrame382} />
            </div>
          </div>
        </div>

        <FilterChip className={styles.filterAll} label="Все" />

        <div className={styles.filterDateRow}>
          <div className={styles.filterAllTime}>
            <p className={styles.filterDateText}>За все время</p>
          </div>

          <div className={styles.sep5}>
            <img alt="" className={styles.sepImg} src={figmaAssets.imgFrame18114650} />
          </div>

          <div className={styles.yearChip}>
            <p className={styles.filterChipText}>2026</p>
            <div className={styles.smallIcon}>
              <div className={styles.smallIconInner}>
                <img alt="" className={styles.smallIconImg} src={figmaAssets.imgVector} />
              </div>
            </div>
          </div>

          <div className={styles.sep5}>
            <img alt="" className={styles.sepImg} src={figmaAssets.imgFrame18114650} />
          </div>

          <div className={styles.monthChip}>
            <p className={styles.filterChipText}>Март</p>
            <div className={styles.smallIcon}>
              <div className={styles.smallIconInner}>
                <img alt="" className={styles.smallIconImg} src={figmaAssets.imgVector} />
              </div>
            </div>
          </div>

          <div className={styles.sep5}>
            <img alt="" className={styles.sepImg} src={figmaAssets.imgFrame18114650} />
          </div>

          <div className={styles.dayChip}>
            <p className={styles.dayChipText}>23</p>
            <div className={styles.daySmallIcon}>
              <div className={styles.smallIconInner}>
                <img alt="" className={styles.smallIconImg} src={figmaAssets.imgVector} />
              </div>
            </div>
          </div>

          <div className={styles.sep5}>
            <img alt="" className={styles.sepImg} src={figmaAssets.imgFrame18114650} />
          </div>

          <div className={styles.calendarIcon}>
            <img alt="" className={styles.calendarIconImg} src={figmaAssets.imgTablerIconCalendarWeek} />
          </div>
        </div>

        <div className={styles.decorGroups}>
          <div className={styles.decorGroup1}>
            <div className={styles.decorGroup1Inner}>
              <img alt="" className={styles.decorGroupImg} src={figmaAssets.imgGroup10} />
            </div>
          </div>
          <div className={styles.decorGroup2}>
            <div className={styles.decorGroup2Inner}>
              <img alt="" className={styles.decorGroupImg} src={figmaAssets.imgGroup12} />
            </div>
          </div>
        </div>
      </div>

      <Navbar className={styles.navbarPos} />

      <Heading as="h2" className={styles.closestEventsTitle}>
        Ближайшие события
      </Heading>

      <div className={styles.newsBand}>
        <Heading as="h2" className={styles.newsBandTitle}>
          Новости
        </Heading>
        <div className={styles.newsBandDecor}>
          <img alt="" className={styles.newsBandDecorImg} src={figmaAssets.imgGroup54} />
        </div>
      </div>

      <div className={styles.eventsList}>
        {new Array(8).fill(null).map((_, idx) => (
          <NewsCardEvent key={idx} />
        ))}
      </div>

      <div className={styles.sideFeatured}>
        <NewsCardFeatured />
        <div className={styles.sideColumn}>
          <NewsCardLight />
          <NewsCardLight />
        </div>
      </div>

      <Footer />

      <div className={styles.paginationPos}>
        <Pagination />
      </div>

      <div className={styles.footerNewsRowPos}>
        <NewsCardMedium />
        <NewsCardMedium />
        <NewsCardMedium />
      </div>
    </div>
  );
}

