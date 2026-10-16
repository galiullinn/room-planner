import { Button } from "@/shared/ui/button";
import { toggleTheme, useTheme } from "../model/theme.store";
import LightThemeIcon from "@/shared/assets/icons/light-theme.svg?react";
import DarkThemeIcon from "@/shared/assets/icons/dark-theme.svg?react";
import styles from "./ToggleTheme.module.css";

interface ToggleThemeProps {
  className?: string;
}

export const ToggleTheme = (props: ToggleThemeProps) => {
  const { className } = props;
  const theme = useTheme();
  
  return (
    <Button
      className={`${styles.toggle} ${className ?? ""}`}
      onClick={toggleTheme}
    >
      {
        theme === "dark"
          ? <DarkThemeIcon width={20} height={20} />
          : <LightThemeIcon width={20} height={20} />
      }
    </Button>
  );
};
