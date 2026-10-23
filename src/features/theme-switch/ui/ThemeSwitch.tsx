import { Button } from "@/shared/ui/button";
import { toggleTheme, useTheme } from "../model/theme.store";
import DarkThemeIcon from "@/shared/assets/icons/dark-theme.svg?react";
import LightThemeIcon from "@/shared/assets/icons/light-theme.svg?react";
import styles from "./ThemeSwitch.module.css";

interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch = (props: ThemeSwitchProps) => {
  const { className } = props;
  const theme = useTheme();

  return (
    <Button 
      className={`${styles.themeSwitch} ${className ?? ""}`}
      onClick={toggleTheme}
      title={theme === "dark" ? "Сменить на темную тему" : "Сменить на светлую тему"}
    >
      {
        theme === "light" 
        ? <LightThemeIcon width={20} height={20} />
        : <DarkThemeIcon width={20} height={20} />
      }
    </Button>
  );
};