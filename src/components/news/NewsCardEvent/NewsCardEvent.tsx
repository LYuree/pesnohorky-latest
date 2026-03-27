import styles from "./NewsCardEvent.module.css";
import { figmaAssets } from "../../../lib/figmaAssets";

type NewsCardEventProps = {
  className?: string;
  title?: string;
  description?: string;
  day?: string;
  month?: string;
  year?: string;
};

export function NewsCardEvent({
  className,
  title = "Заголовок новостной карточки",
  description = `Педагоги центра "Песнохорки" провели методический выход в школе №117, где они поделились своими знаниями и опытом с учениками и учителями, организовав интересные и познавательные мероприятия, которые способствовали развитию творческих способностей и навыков у детей.`,
  day = "14",
  month = "Декабря",
  year = "2026",
}: NewsCardEventProps) {
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} data-component="NewsCardEvent">
      <div className={styles.inner}>
        <div className={styles.contents}>
          <div className={styles.texts}>
            <div className={styles.textBlock}>
              <p className={styles.heading}>{title}</p>
              <p className={styles.paragraph}>{description}</p>
            </div>

            <div className={styles.dateRow}>
              <div className={styles.dateCol}>
                <p className={styles.dateDay}>{day}</p>
              </div>
              <div className={styles.dateCol}>
                <p className={styles.dateMonth}>{month}</p>
              </div>
              <div className={styles.dateCol}>
                <p className={styles.dateYear}>{year}</p>
              </div>
            </div>
          </div>

          <div className={styles.media}>
            <img alt="" className={styles.mediaImg} src={figmaAssets.imgFrame18114697} />
          </div>
        </div>

        <div className={styles.bottomLine}>
          <img alt="" className={styles.bottomLineImg} src={figmaAssets.imgLine5} />
        </div>
      </div>
    </div>
  );
}

