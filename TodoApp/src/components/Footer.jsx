import styles from "./Footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      Completed tasks: {completedTodos} & Total Tasks:{totalTodos}
    </div>
  );
}
