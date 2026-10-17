import { useMemo } from "react";
import type { PrimitiveObject } from "../../model/types";
import { selectObject, useSelectObjectId } from "../../model/object.store";
import { Outlines } from "@react-three/drei";

interface PrimitiveProps {
  object: PrimitiveObject;
}

export const Primitive = (props: PrimitiveProps) => {
  const { object } = props;
  const { id, transform, primitiveType, color } = object;
  const selectedObjectId = useSelectObjectId();
  const isSelected = selectedObjectId === id;

  const geometry = useMemo(() => {
    switch (primitiveType) {
      case "box":
        return <boxGeometry args={[1, 1, 1]} />;
      case "cylinder":
        return <cylinderGeometry args={[0.5, 0.5, 1, 32]} />;
      case "cone":
        return <coneGeometry args={[0.5, 1, 32]} />;
      case "sphere":
        return <sphereGeometry args={[0.5, 32, 16]} />;
      default:
        return null;
    };
  }, [primitiveType]);
  
  return (
    <mesh
      position={[
        transform.position.x,
        transform.position.y,
        transform.position.z,
      ]}
      rotation={[
        transform.rotation.x,
        transform.rotation.y,
        transform.rotation.z,
      ]}
      scale={[
        transform.scale.x,
        transform.scale.y,
        transform.scale.z,
      ]}
      onClick={(event) => {
        event.stopPropagation();
        selectObject(id);
      }}
    >
      {geometry}
      <meshStandardMaterial color={color} />
      {isSelected && (
        <Outlines
          color="yellow"
          thickness={0.05}
          screenspace
        />
      )}
    </mesh>
  );
};
