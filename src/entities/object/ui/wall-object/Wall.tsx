import { Outlines } from "@react-three/drei";
import { selectObject, useSelectObjectId } from "../../model/object.store";
import type { WallObject } from "../../model/types";

interface WallProps {
  object: WallObject;
}

export const Wall = (props: WallProps) => {
  const { object } = props;

  const selectedObjectId = useSelectObjectId();
  const isSelected = selectedObjectId === object.id;

  const dx = object.end.x - object.start.x;
  const dz = object.end.z - object.start.z;

  const lendth = Math.hypot(dx, dz);
  const centerX = (object.start.x + object.end.x) / 2;
  const centerZ = (object.start.z + object.end.z) / 2;
  const angle = -Math.atan2(dz, dx);
  
  return (
    <mesh
      position={[centerX, object.height / 2, centerZ]}
      rotation={[0, angle, 0]}
      onClick={(event) => {
        event.stopPropagation();
        selectObject(object.id);
      }}
    >
      <boxGeometry args={[lendth, object.height, object.thickness]} />
      <meshStandardMaterial color="#b8b0a3" />
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
