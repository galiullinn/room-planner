import styles from "./GuidePage.module.css";

interface GuidePageProps {
  className?: string;
}

const GuidePage = (props: GuidePageProps) => {
  const { className } = props;

  return (
    <div className={`${styles.GuidePage} ${className ?? ""}`}>
      Guide
    </div>
  );
};

export default GuidePage;