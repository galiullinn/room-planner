import { Link } from "react-router";
import { ROUTES } from "@/shared/config/routes.config";
import LogoIcon from "@/shared/assets/icons/logo.svg?react";
import styles from "./Header.module.css";

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className } = props;

  return (
    <div className={`${styles.header} ${className ?? ""}`}>
      <Link to={ROUTES.HOME} className={styles.logo}>
        <LogoIcon width={32} height={32} />
        <span>Room Planner</span>
      </Link>
      <div className={styles.actions}>
        <nav className={styles.nav}>
          <Link to={ROUTES.HOME}>Home</Link>
          <Link to={ROUTES.PLANNER}>Planner</Link>
          <Link to={ROUTES.GUIDE}>Guide</Link>
        </nav>
        <div className={styles.tools}>

        </div>
      </div>
    </div>
  );
};