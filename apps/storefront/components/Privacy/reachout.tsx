import styles from "./privacy.module.css";

export default function Reachout() {
  return (
    <>
      <div className={styles.lastupdate}>
        <div style={{ fontSize: "1.73vw" }}>Reach Out</div>
        <hr className={styles.reachhr} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2vw" }}>
        <ul className={styles.reachlist}>
          <li>Point 1</li>
          <li>Point 2</li>
          <li>Point 3</li>
        </ul>
      </div>
    </>
  );
}
