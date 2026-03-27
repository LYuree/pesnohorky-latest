import styles from "./Card.module.css";
import type { ReactNode } from "react";

type CardProps = {
  className?: string;
  children: ReactNode;
};

export function Card({ className, children }: CardProps) {
  return <div className={[styles.root, className].filter(Boolean).join(" ")}>{children}</div>;
}

