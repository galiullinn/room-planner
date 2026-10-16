import type { StateCreator } from "zustand";
import type { ViewMode } from "./types";
import { create } from "zustand";

interface InitialState {
  viewMode: ViewMode;
  gridVisibility: boolean;
};

interface Actions {
  toggleViewMode: () => void;
  toggleGridVisibility: () => void;
};

interface SceneState extends InitialState, Actions { };

const initialState: InitialState = {
  viewMode: "3d",
  gridVisibility: true,
};

const sceneStore: StateCreator<SceneState> = (set) => ({
  ...initialState,
  toggleViewMode: () => set((state) => ({ viewMode: state.viewMode === "2d" ? "3d" : "2d" })),
  toggleGridVisibility: () => set((state) => ({ gridVisibility: !state.gridVisibility })),
});

const useSceneStore = create<SceneState>()(sceneStore);

export const useViewMode = () => useSceneStore((state) => state.viewMode);
export const useGridVisibility = () => useSceneStore((state) => state.gridVisibility);

export const toggleViewMode = () => useSceneStore.getState().toggleViewMode();
export const toggleGridVisibility = () => useSceneStore.getState().toggleGridVisibility();