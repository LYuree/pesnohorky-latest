import styles from "./Pagination.module.css";
import { figmaAssets } from "../../../lib/figmaAssets";

type PaginationProps = {
  className?: string;
};

export function Pagination({ className }: PaginationProps) {
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} data-component="Pagination">
      <div className={styles.arrowWrap}>
        <img alt="" className={styles.arrowImg} src={figmaAssets.imgFrame18114684} />
      </div>

      <div className={styles.pageBtn}>
        <p className={styles.pageBtnText}>1</p>
      </div>
      <div className={styles.pageBtn}>
        <p className={styles.pageBtnText}>2</p>
      </div>
      <div className={styles.pageBtnActive}>
        <p className={styles.pageBtnActiveText}>3</p>
      </div>
      <div className={styles.pageBtn}>
        <p className={styles.pageBtnText}>4</p>
      </div>
      <div className={styles.pageBtn}>
        <p className={styles.pageBtnText}>...</p>
      </div>
      <div className={styles.pageBtn}>
        <p className={styles.pageBtnText}>10</p>
      </div>

      <div className={styles.arrowWrap}>
        <img alt="" className={styles.arrowImg} src={figmaAssets.imgFrame18114683} />
      </div>
    </div>
  );
}

