import { Link, useHistory } from "react-router-dom";
import {
  IoEarthSharp,
  IoSearch,
  IoLocationSharp,
} from "react-icons/io5";
import FormLogout from "./formLogout";
import styles from "./header.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useIsLogin } from "../../hooks/useIsLogin";


export default function Header() {

  const { user } = useIsLogin();
  const [state, setState] = useState({});
  const [text, setText] = useState("");

  const history = useHistory();
  // useEffect(
  //   () => {
  //     axios
  //       .get(
  //         `${process.env.REACT_APP_API_URL}/api/users/${user.username}/trips`
  //       )
  //       .then((res) => {
  //         const persons = res.data;
  //         setState(persons);
  //       })
  //       .catch((error) => console.log(error));
  //   },
  //   // eslint-disable-next-line
  //   []
  // );


  const onSearch = (e) => {
    e.preventDefault();
    if (!text || text.length === 0) {
      return;
    }
    setText("");
    history.push(`/search?text=${text}`);
  };

  const src =
    state.profileImageUrl == null
      ? "https://wrld-se-prod.b-cdn.net/images/user-empty.svg"
      : state.profileImageUrl;


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
        <div className={styles.menu}>
          <form
            onSubmit={onSearch}
            className={styles.search}
            aria-describedby="popup-1"
          >
            <div className={styles.searchAll}>
              <div className={styles.searchInput}>
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  type="text"
                  placeholder="Search here..."
                />
              </div>
              <div className={styles.searchIcon}>
                <button type="submit">
                  <div>
                    <div style={{ color: "#343a40" }}>
                      <IoSearch />
                    </div>
                    <span />
                  </div>
                </button>
              </div>
            </div>
          </form>
          <div className={styles.grow} />
          <Link to="/">
            <div className={styles.menuIcon}>
              <IoEarthSharp />
            </div>
            <span>Home</span>
          </Link>
          <Link to="/trip">
            <div className={styles.menuIcon}>
              <IoLocationSharp />
            </div>
            <span>Create</span>
          </Link>
          <div
            className={styles.menuButton}
            aria-describedby="popup-3"
            style={{ position: "relative" }}
          ></div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profileList}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to={`/profile/${user.username}`}>
                <div className={styles.profileIcon}>
                  <img className="w_km" alt="profile" src={src} />
                </div>
                <div>
                  <span>username</span>
                </div>
              </Link>
              <FormLogout />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
