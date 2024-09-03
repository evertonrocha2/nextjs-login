import styles from "./loginCard.module.css";

const LoginCard = ({ children, title }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

export default LoginCard;
