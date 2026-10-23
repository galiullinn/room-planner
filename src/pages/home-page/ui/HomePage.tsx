import styles from "./HomePage.module.css";

interface HomePageProps {
  className?: string;
}

const HomePage = (props: HomePageProps) => {
  const { className } = props;

  return (
    <div className={`${styles.homePage} ${className ?? ""}`}>
      <h1>Home</h1>      
    </div>
  );
};

export default HomePage;