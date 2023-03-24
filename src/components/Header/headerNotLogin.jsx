import { Link } from "react-router-dom";
import styles from "./header.module.css";
export default function HeaderNotLogin() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerLogo}>
          <div>
            <Link to="/">
              <h1>LEARNING</h1>
            </Link>
          </div>
        </div>
        <div className={styles.menu}></div>
        <div className={styles.profile}>
          <div className={styles.profileList}>
            <div
              className={styles.headerNotLogin}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Link to="/login" style={{ color: "#202d3d" }}>
                <div>
                  <span>login</span>
                </div>
              </Link>
              <Link to="/signUp" style={{ background: "#202d3d" }}>
                <div>
                  <span>Join Learning</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
