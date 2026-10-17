import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { deleteObject, useObjects } from "@/entities/object";
import ToggleIcon from "@/shared/assets/icons/toggle.svg?react";
import styles from "./PlannerSidebar.module.css";

interface PlannerSidebarProps {
  className?: string;
}

export const PlannerSidebar = (props: PlannerSidebarProps) => {
  const { className } = props;
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const toggleCollpased = () => setIsCollapsed(prev => !prev);
  const objects = useObjects();

  return (
    <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""} ${className ?? ""}`}>
      <div className={styles.header}>
        <Button
          onClick={toggleCollpased}
          title={isCollapsed ? "Развернуть сайдбар" : "Свернуть сайдбар"}
        >
          <ToggleIcon width={20} height={20} />
        </Button>
      </div>
      <div className={`${styles.content} ${isCollapsed ? "visually-hidden" : ""}`}>
        {objects.map((object) => (
          <div
            key={object.id}
          >
            <span>{object.id}</span>
            <Button onClick={() => deleteObject(object.id)}>Удалить</Button>
          </div>
        ))}
      </div>
    </div>
  );
};
