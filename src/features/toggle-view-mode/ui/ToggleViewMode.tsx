import { Button } from "@/shared/ui/button";
import styles from "./ToggleViewMode.module.css";
import { toggleViewMode, useViewMode } from "@/entities/scene";

interface ToggleViewModeProps {
  className?: string;
}

export const ToggleViewMode = (props: ToggleViewModeProps) => {
  const { className } = props;
  const viewMode = useViewMode();
  
  return (
    <Button
      className={`${styles.toggle} ${className ?? ""}`}
      onClick={toggleViewMode}
      title={viewMode === "2d" ? "Переключить на 3D вид" : "Переключить на 2D вид"}
    >
      {viewMode === "2d" ? "2D" : "3D"}
    </Button>
  );
};
