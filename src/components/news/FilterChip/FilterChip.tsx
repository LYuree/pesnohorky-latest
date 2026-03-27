import { Button } from "../../ui/Button/Button";
import styles from "./FilterChip.module.css";

type FilterChipProps = {
  className?: string;
  label?: string;
};

export function FilterChip({ className, label = "Все" }: FilterChipProps) {
  return (
    <Button className={[styles.root, className].filter(Boolean).join(" ")}>
      <div className={styles.label}>{label}</div>
    </Button>
  );
}

