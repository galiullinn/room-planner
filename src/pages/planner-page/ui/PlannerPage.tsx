import { PlannerViewport } from "@/widgets/planner-viewport";
import { PlannerSidebar } from "@/widgets/planner-sidebar";
import { PlannerToolbar } from "@/widgets/planner-toolbar";
import { PlannerFooter } from "@/widgets/planner-footer";
import styles from "./PlannerPage.module.css";

interface PlannerPageProps {
  className?: string;
}

const PlannerPage = (props: PlannerPageProps) => {
  const { className } = props;

  return (
    <div className={`${styles.page} ${className ?? ""}`}>
      <PlannerViewport className={styles.viewport} />
      <PlannerSidebar className={styles.sidebar} />
      <PlannerToolbar className={styles.toolbar} />
      <PlannerFooter className={styles.footer} />
    </div>
  );
};

export default PlannerPage;