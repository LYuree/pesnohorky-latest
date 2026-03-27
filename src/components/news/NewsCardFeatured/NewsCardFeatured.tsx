import styles from "./NewsCardFeatured.module.css";
import { figmaAssets } from "../../../lib/figmaAssets";

type NewsCardFeaturedProps = {
  className?: string;
  day?: string;
  month?: string;
  year?: string;
  headline?: string;
  description?: string;
  tagLeft?: string;
  tagRight?: string;
};

export function NewsCardFeatured({
  className,
  day = "21",
  month = "февраля",
  year = "2026",
  headline = `Коллективы центра "Песнохорки" выступили на торжественном открытии Чемпионата и Первенства СФО Региональные соревнования «Кубок Алтайского края» (РС) по спортивному ориентированию (лыжные дисциплины)`,
  description = `Церемония состоялась в минувшую субботу и собрала более 200 юных спортсменов из Красноярского края, Новосибирской и Томской, Кемеровской и Омской, Иркутской областей, Алтайского края, Республики Алтай`,
  tagLeft = "песнохорки",
  tagRight = "спорт",
}: NewsCardFeaturedProps) {
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} data-component="NewsCardFeatured">
      <div className={styles.imageWrap}>
        <img alt="" className={styles.image} src={figmaAssets.imgRectangle1221} />
      </div>

      <div className={styles.dateCol}>
        <div className={styles.dateRow}>
          <div className={styles.day}>{day}</div>
          <div className={styles.monthYear}>
            <div className={styles.month}>{month}</div>
            <div className={styles.year}>{year}</div>
          </div>
        </div>
        <div className={styles.lineWrap}>
          <img alt="" className={styles.lineImg} src={figmaAssets.imgLine12} />
        </div>
      </div>

      <div className={styles.textCol}>
        <div className={styles.headline}>{headline}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.tags}>
          <div className={styles.tag}>{tagLeft}</div>
          <div className={styles.tag}>{tagRight}</div>
        </div>
      </div>
    </div>
  );
}

