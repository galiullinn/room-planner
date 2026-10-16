import styles from "./PlannerPage.module.css";

interface PlannerPageProps {
  className?: string;
}

const PlannerPage = (props: PlannerPageProps) => {
  const { className } = props;

  return (
    <div className={`${styles.PlannerPage} ${className ?? ""}`}>
      Planner
    </div>
  );
};

export default PlannerPage;