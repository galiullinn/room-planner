import { ToggleGridVisibility } from "@/features/toggle-grid-visibility";
import styles from "./PlannerFooter.module.css";

interface PlannerFooterProps {
  className?: string;
}

export const PlannerFooter = (props: PlannerFooterProps) => {
  const { className } = props;

  return (
    <div className={`${styles.footer} ${className ?? ""}`}>
      <ToggleGridVisibility />
    </div>
  );
};
