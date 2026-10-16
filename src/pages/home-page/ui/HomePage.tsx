import styles from "./HomePage.module.css";

interface HomePageProps {
  className?: string;
}

const HomePage = (props: HomePageProps) => {
  const { className } = props;

  return (
    <div className={`${styles.HomePage} ${className ?? ""}`}>
      Home
    </div>
  );
};

export default HomePage;