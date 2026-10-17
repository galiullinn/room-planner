import { ToggleViewMode } from "@/features/toggle-view-mode";
import styles from "./PlannerToolbar.module.css";
import { Button } from "@/shared/ui/button";
import { addPrimitive, addWall } from "@/entities/object";

interface PlannerToolbarProps {
  className?: string;
}

export const PlannerToolbar = (props: PlannerToolbarProps) => {
  const { className } = props;

  return (
    <div className={`${styles.toolbar} ${className ?? ""}`}>
      <ToggleViewMode />
      <Button onClick={addWall}>Стена</Button>
      <Button onClick={() => addPrimitive("box")}>Примитив</Button>
    </div>
  );
};
