import styles from "./privacy.module.css";

export default function PrivacyHeading() {
  return (
    <div className={styles.outer}>
      <div className={styles.background}>Privacy Policy</div>
      <div className={styles.front}>Privacy Policy</div>
      <hr className={styles.horizontal} />
    </div>
  );
}
