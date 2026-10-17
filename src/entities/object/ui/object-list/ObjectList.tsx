import { useObjects } from "../../model/object.store";
import { ObjectRenderer } from "../object-renderer/ObjectRenderer";

export const ObjectList = () => {
  const objects = useObjects();

  return (
    <>
      {objects.map((object) => (
        <ObjectRenderer
          key={object.id}
          object={object}
        />
      ))}
    </>
  );
};
