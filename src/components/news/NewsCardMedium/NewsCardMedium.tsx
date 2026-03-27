import styles from "./NewsCardMedium.module.css";
import { figmaAssets } from "../../../lib/figmaAssets";

type NewsCardMediumProps = {
  className?: string;
  title?: string;
  day?: string;
  month?: string;
  year?: string;
};

export function NewsCardMedium({
  className,
  title = `Театральная студия "Маска" поставит спектакль по повести Владимира Железникова "Чучело"`,
  day = "21",
  month = "января",
  year = "2026",
}: NewsCardMediumProps) {
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} data-component="NewsCardMedium">
      <div className={styles.imageWrap}>
        <img alt="" className={styles.image} src={figmaAssets.imgRectangle1211} />
      </div>

      <div className={styles.dateWrap}>
        <div className={styles.dateRow}>
          <div className={styles.day}>{day}</div>
          <div className={styles.monthYear}>
            <div className={styles.month}>{month}</div>
            <div className={styles.year}>{year}</div>
          </div>
        </div>

        <div className={styles.lineTop}>
          <img alt="" className={styles.decorLine} src={figmaAssets.imgLine3} />
        </div>

        <div className={styles.lineCorner}>
          <img alt="" className={styles.decorLine} src={figmaAssets.imgLine4} />
        </div>
      </div>

      <p className={styles.title}>{title}</p>
    </div>
  );
}

