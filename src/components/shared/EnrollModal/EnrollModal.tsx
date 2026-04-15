import { useEffect, useCallback } from "react";
import { EnrollForm } from "../EnrollForm/EnrollForm";
import styles from "./EnrollModal.module.css";

type EnrollModalProps = {
  isOpen: boolean;
  onClose: () => void;
  collectiveName?: string;
};

export function EnrollModal({ isOpen, onClose, collectiveName }: EnrollModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} type="button" onClick={onClose}>
          &times;
        </button>
        <EnrollForm collectiveName={collectiveName} />
      </div>
    </div>
  );
}
