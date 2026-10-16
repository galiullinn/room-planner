import { Link } from "react-router";
import styles from "./NotFoundPage.module.css";
import { ROUTES } from "@/shared/config/routes.config";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;

  return (
    <div className={`${styles.page} ${className ?? ""}`}>
      <span>Not Found</span>
      <Link to={ROUTES.HOME}>to home</Link>
    </div>
  );
};

export default NotFoundPage;