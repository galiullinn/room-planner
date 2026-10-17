import type { StateCreator } from "zustand";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";
import type { PrimitiveObject, PrimitiveType, SceneObject, WallObject } from "./types";

interface InitialState {
  objects: SceneObject[];
  selectedObjectId: string | null;
};

interface Actions {
  addPrimitive: (type: PrimitiveType) => void;
  addWall: () => void;
  deleteObject: (id: string) => void;
  selectObject: (id: string) => void;
  clearSelection: () => void;
  toggleVisibility: (id: string) => void;
};

interface ObjectState extends InitialState, Actions { };

const generateId = (): string => {
  if (typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
};

const createPrimitive = (type: PrimitiveType): PrimitiveObject => {
  return {
    id: generateId(),
    type: "primitive",
    name: "Объект",
    locked: false,
    visible: true,
    primitiveType: type,
    color: "#8b9db6",
    transform: {
      position: { x: 0, y: 0.5, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    },
  };
};

const createWall = (): WallObject => {
  return {
    id: generateId(),
    name: "Стена",
    type: "wall",
    locked: false,
    visible: true,
    start: { x: -2, z: 0 },
    end: { x: 2, z: 0 },
    thickness: 0.2,
    height: 2.7,
  };
};

const initialState: InitialState = {
  objects: [],
  selectedObjectId: null,
};

const objectStore: StateCreator<ObjectState> = (set) => ({
  ...initialState,
  addPrimitive: (type: PrimitiveType) => set((state) => ({ objects: [...state.objects, createPrimitive(type)]})),
  addWall: () => set((state) => ({ objects: [...state.objects, createWall()] })),
  deleteObject: (id: string) => set((state) => ({
    objects: state.objects.filter((object) => object.id !== id),
    selectedObjectId: state.selectedObjectId === id ? null : state.selectedObjectId,
  })),
  selectObject: (id: string) => set({ selectedObjectId: id }),
  clearSelection: () => set({ selectedObjectId: null }),
  toggleVisibility: (id: string) => set((state) => ({ 
    objects: state.objects.map((object) => 
      object.id === id
        ? { ...object, visible: !object.visible }
        : object,
    ),
  }))
});

const useObjectStore = create<ObjectState>()(
  persist(objectStore, {
    name: "objects-store",
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({ objects: state.objects }),
  }),
);

export const useObjects = () => useObjectStore((state) => state.objects);
export const useSelectObjectId = () => useObjectStore((state) => state.selectedObjectId);

export const addPrimitive = (type: PrimitiveType) => useObjectStore.getState().addPrimitive(type);
export const addWall = () => useObjectStore.getState().addWall();
export const deleteObject = (id: string) => useObjectStore.getState().deleteObject(id);
export const selectObject = (id: string) => useObjectStore.getState().selectObject(id);
export const clearSelection = () => useObjectStore.getState().clearSelection();
export const toggleVisibility = (id: string) => useObjectStore.getState().toggleVisibility(id);