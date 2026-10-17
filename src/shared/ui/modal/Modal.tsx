import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.type === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.overlay}>
        <div className={`${styles.content} ${className ?? ""}`} onClick={(event) => event.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};
