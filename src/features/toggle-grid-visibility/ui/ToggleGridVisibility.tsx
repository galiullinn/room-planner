import { toggleGridVisibility, useGridVisibility } from "@/entities/scene";
import { Button } from "@/shared/ui/button";
import styles from "./ToggleGridVisibility.module.css";
import GridIcon from "@/shared/assets/icons/grid.svg?react";
import GridOffIcon from "@/shared/assets/icons/grid-off.svg?react";

interface ToggleGridVisibilityProps {
  className?: string;
}

export const ToggleGridVisibility = (props: ToggleGridVisibilityProps) => {
  const { className } = props;
  const gridVisibility = useGridVisibility();

  return (
    <Button
      className={`${styles.ToggleGridVisibility} ${className ?? ""}`}
      onClick={toggleGridVisibility}
      title="Изменить видимость сетки"
    >
      {gridVisibility
        ? <GridIcon width={20} height={20} />
        : <GridOffIcon width={20} height={20} />
      }
    </Button>
  );
};

