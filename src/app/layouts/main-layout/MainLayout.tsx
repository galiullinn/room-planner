import { Outlet } from "react-router";
import { Navbar } from "@/widgets/navbar";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  className?: string;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { className } = props;

  return (
    <div className={`${styles.layout} ${className ?? ""}`}>
      <Navbar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};
