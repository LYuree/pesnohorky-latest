import type { ReactNode } from "react";
import styles from "./Heading.module.css";

type HeadingProps = {
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
};

export function Heading({ className, as = "h2", children }: HeadingProps) {
  const Tag = as;
  return <Tag className={[styles.root, className].filter(Boolean).join(" ")}>{children}</Tag>;
}

