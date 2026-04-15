import styles from "./Pagination.module.css";

type PaginationProps = {
  current: number;
  total: number;
  onChange: (page: number) => void;
  className?: string;
};

export function Pagination({ current, total, onChange, className }: PaginationProps) {
  if (total <= 1) return null;

  const pages: (number | "...")[] = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - 1 && i <= current + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} data-component="Pagination">
      <button
        className={styles.arrowBtn}
        disabled={current <= 1}
        onClick={() => onChange(current - 1)}
        aria-label="Назад"
      >
        ‹
      </button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span className={styles.dots} key={`dots-${i}`}>...</span>
        ) : (
          <button
            className={p === current ? styles.pageBtnActive : styles.pageBtn}
            key={p}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        )
      )}

      <button
        className={styles.arrowBtn}
        disabled={current >= total}
        onClick={() => onChange(current + 1)}
        aria-label="Вперёд"
      >
        ›
      </button>
    </div>
  );
}
