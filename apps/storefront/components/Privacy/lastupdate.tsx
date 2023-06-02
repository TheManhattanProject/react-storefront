import styles from "./privacy.module.css";

export default function LastUpdate() {
  return (
    <div className={styles.lastupdate}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div>Privacy Policy</div>
        <hr className={styles.updatehr} />
      </div>
      <div>Last Updated: 28th February, 2023</div>
    </div>
  );
}
