import type { StateCreator } from "zustand";
import type { Theme } from "./types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";

interface InitialState {
  theme: Theme;
};

interface Actions {
  toggle: () => void;
};

interface ThemeState extends InitialState, Actions { };

const initialState: InitialState = {
  theme: "light",
};

const applyTheme = (theme: Theme) => {
  document.body.classList.add("disabled-transitions");
  document.body.classList.toggle("dark", theme === "dark");
  requestAnimationFrame(() => {
    document.body.classList.remove("disabled-transitions");
  });
};

const themeStore: StateCreator<ThemeState> = (set) => ({
  ...initialState,
  toggle: () => set((state) => {
    const nextTheme = state.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    return { theme: nextTheme };
  }),
});

const useThemeStore = create<ThemeState>()(
  persist(themeStore, {
    name: "theme-store",
    storage: createJSONStorage(() => localStorage),
    onRehydrateStorage: () => (state) => {
      if (state) applyTheme(state.theme);
    },
  }),
);

export const useTheme = () => useThemeStore((state) => state.theme);
export const toggleTheme = () => useThemeStore.getState().toggle();