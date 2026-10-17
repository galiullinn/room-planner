import { useObjects } from "@/entities/object";
import { OutlinerItem } from "../outliner-item/OutlinerItem";
import styles from "./OutlinerList.module.css";

interface OutlinerListProps {
  className?: string;
}

export const OutlinerList = (props: OutlinerListProps) => {
  const { className } = props;
  const objects = useObjects();
  
  return (
    <div className={`${styles.list} ${className ?? ""}`}>
      {objects.map((object) => (
        <OutlinerItem
          key={object.id}
          object={object}
        />
      ))}
    </div>
  );
};
