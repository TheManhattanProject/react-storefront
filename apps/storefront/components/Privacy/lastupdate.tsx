import styles from "./privacy.module.css";

export default function LastUpdate() {
  return (
    <div className={styles.lastupdate}>
      <div>Privacy Policy</div>
      <hr className={styles.updatehr} />
      <div>Last Updated: 28th February, 2023</div>
    </div>
  );
}
