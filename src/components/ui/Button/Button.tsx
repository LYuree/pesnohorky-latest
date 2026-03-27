import styles from "./Button.module.css";
import type { ReactNode } from "react";

type ButtonProps = {
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
};

export function Button({ className, children, type = "button" }: ButtonProps) {
  return (
    <button type={type} className={[styles.root, className].filter(Boolean).join(" ")}>
      {children}
    </button>
  );
}

