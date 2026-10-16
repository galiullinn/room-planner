import { ToggleViewMode } from "@/features/toggle-view-mode";
import styles from "./PlannerToolbar.module.css";

interface PlannerToolbarProps {
  className?: string;
}

export const PlannerToolbar = (props: PlannerToolbarProps) => {
  const { className } = props;

  return (
    <div className={`${styles.toolbar} ${className ?? ""}`}>
      <ToggleViewMode />
    </div>
  );
};
