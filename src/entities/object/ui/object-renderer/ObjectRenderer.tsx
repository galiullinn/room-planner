import type { SceneObject } from "../../model/types";
import { Primitive } from "../primitive-object/Primitive";
import { Wall } from "../wall-object/Wall";

interface ObjectRendererProps {
  object: SceneObject;
}

export const ObjectRenderer = (props: ObjectRendererProps) => {
  const { object } = props;

  if (!object.visible) {
    return null;
  }

  switch (object.type) {
    case "primitive":
      return <Primitive object={object} />;
    case "wall":
      return <Wall object={object} />;
    default:
      return null;
  };
};
