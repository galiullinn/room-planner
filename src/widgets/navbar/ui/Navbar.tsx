import { Link } from "react-router";
import { ROUTES } from "@/shared/config/routes.config";
import LogoIcon from "@/shared/assets/icons/logo.svg?react";
import styles from "./Navbar.module.css";
import { ToggleTheme } from "@/features/toggle-theme";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={`${styles.navbar} ${className ?? ""}`}>
      <Link to={ROUTES.HOME} className={styles.logo}>
        <LogoIcon width={30} height={30} />
        <span>Room Planner</span>
      </Link>
      <div className={styles.actions}>
        <nav className={styles.nav}>
          <Link to={ROUTES.HOME}>Home</Link>
          <Link to={ROUTES.PLANNER}>Planner</Link>
          <Link to={ROUTES.GUIDE}>Guide</Link>
        </nav>
        <div className={styles.tools}>
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};
