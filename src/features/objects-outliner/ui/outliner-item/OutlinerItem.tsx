import { deleteObject, selectObject, toggleVisibility, type SceneObject } from "@/entities/object";
import { Button } from "@/shared/ui/button";
import VisibleIcon from "@/shared/assets/icons/visible.svg?react";
import VisibleOffIcon from "@/shared/assets/icons/visible-off.svg?react";
import DeleteIcon from "@/shared/assets/icons/delete.svg?react";
import styles from "./OutlinerItem.module.css";

interface OutlinerItemProps {
  className?: string;
  object: SceneObject;
}

export const OutlinerItem = (props: OutlinerItemProps) => {
  const { className, object } = props;

  return (
    <div className={`${styles.item} ${className ?? ""}`}
      onClick={() => selectObject(object.id)}
    >
      <span>{object.name}</span>
      <Button onClick={() => deleteObject(object.id)}>
        <DeleteIcon width={20} height={20} />
      </Button>
      <Button onClick={() => toggleVisibility(object.id)}>
        {object.visible
          ? <VisibleIcon width={20} height={20} />
          : <VisibleOffIcon width={20} height={20} />
        }
      </Button>
    </div>
  );
};
