type Vector3 = {
  x: number;
  y: number;
  z: number;
};

type Vector2 = {
  x: number;
  z: number;
};

type Transform = {
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
};

export type PrimitiveType = "box" | "cylinder" | "cone" | "sphere";

export type SceneObjectBase = {
  id: string;
  locked: boolean;
  visible: boolean;
};

export type PrimitiveObject = SceneObjectBase & {
  type: "primitive";
  transform: Transform;
  primitiveType: PrimitiveType;
  color: string;
};

export type WallObject = SceneObjectBase & {
  type: "wall";
  start: Vector2;
  end: Vector2;
  thickness: number;
  height: number;
};

export type WindowObject = SceneObjectBase & {
  type: "window";
  wallId: string;
  width: number;
  height: number;
  offsetBottom: number;
  offsetFromStart: number;
};

export type DoorObject = SceneObjectBase & {
  type: "door";
  wallId: string;
  width: number;
  height: number;
  offsetFromStart: number;
};

export type FurnitureObject = SceneObjectBase & {
  type: "furniture";
  transform: Transform;
  modelUrl: string;
};

export type SceneObject = PrimitiveObject | WallObject | DoorObject | WindowObject | FurnitureObject;