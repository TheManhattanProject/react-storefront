import styles from "./privacy.module.css";

export default function OtherPolicies() {
  return (
    <div className={styles.other}>
      <div className={styles.innerOther}>Other Policies</div>
      <div className={styles.policiesouter}>
        <div className={styles.policies}>
          Return Policy<div className={styles.arrow}></div>
        </div>
        <div className={styles.policies}>
          Return Policy<div className={styles.arrow}></div>
        </div>
        <div className={styles.policies}>
          Return Policy<div className={styles.arrow}></div>
        </div>
      </div>
    </div>
  );
}
