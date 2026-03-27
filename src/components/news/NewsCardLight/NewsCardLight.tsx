import styles from "./NewsCardLight.module.css";
import { figmaAssets } from "../../../lib/figmaAssets";

type NewsCardLightProps = {
  className?: string;
  day?: string;
  month?: string;
  year?: string;
  title?: string;
  tagLeft?: string;
  tagRight?: string;
};

export function NewsCardLight({
  className,
  day = "21",
  month = "февраля",
  year = "2026",
  title = "Концерт ко Дню матери состоялся на базе школы №135",
  tagLeft = "песнохорки",
  tagRight = "спорт",
}: NewsCardLightProps) {
  return (
    <div className={[className || "", styles.root].filter(Boolean).join(" ")} data-component="NewsCardLight">
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.dateBadge}>
            <div className={styles.dateCol}>{day}</div>
            <div className={styles.dateCol}>{month}</div>
            <div className={styles.dateCol}>{year}</div>
          </div>

          <div className={styles.imageWrap}>
            <img alt="" className={styles.image} src={figmaAssets.imgFrame18114697} />
          </div>
        </div>

        <div className={styles.title}>{title}</div>

        <div className={styles.tags}>
          <div className={styles.tag}>{tagLeft}</div>
          <div className={styles.tag}>{tagRight}</div>
        </div>
      </div>
    </div>
  );
}

