import styles from "./privacy.module.css";
import { useState, useEffect } from "react";

export default function OtherPolicies() {
  const [winWidth, setWinWidth] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 640) {
      setWinWidth(true);
    } else {
      setWinWidth(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 640) {
        setWinWidth(true);
      } else {
        setWinWidth(false);
      }
    });
  }, []);

  return !winWidth ? (
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
  ) : (
    <select aria-label="View Other Policies" className={styles.other}>
      <option>View Other Policies</option>
      <option className={styles.dropdown}>Return Policy</option>
      <option className={styles.dropdown}>Return Policy1</option>
      <option className={styles.dropdown}>Return Policy2</option>
    </select>
  );
}
