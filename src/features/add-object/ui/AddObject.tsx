import { useState } from "react";
import { addPrimitive, addWall, type PrimitiveType } from "@/entities/object";
import { Button } from "@/shared/ui/button";
import { Modal } from "@/shared/ui/modal";
import AddObjectIcon from "@/shared/assets/icons/add-object.svg?react";
import styles from "./AddObject.module.css";

interface AddObjectProps {
  className?: string;
}

export const AddObject = (props: AddObjectProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const addPrimitiveObject = (type: PrimitiveType) => {
    addPrimitive(type);
    setIsOpen(false);
  };

  const addWallObject = () => {
    addWall();
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        title="Добавить объект"
      >
        <AddObjectIcon width={20} height={20} />
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className={`${styles.addObject} ${className ?? ""}`}
      >
        <h2 className={styles.title}>Добавить объект</h2>
        <div className={styles.content}>
          <Button onClick={addWallObject}>Стена</Button>
          <Button onClick={() => addPrimitiveObject("box")}>Куб</Button>
          <Button onClick={() => addPrimitiveObject("cone")}>Конус</Button>
          <Button onClick={() => addPrimitiveObject("cylinder")}>Цилиндр</Button>
          <Button onClick={() => addPrimitiveObject("sphere")}>Сфера</Button>
        </div>
      </Modal>
    </>
  );
};
