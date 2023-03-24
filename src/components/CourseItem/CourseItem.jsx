import React from "react";
import { Link } from "react-router-dom";
import styles from "./CourseItem.module.css";
const CourseItem = (props) => {

  return (
    <div className={styles.outer}>
      <div className={styles["item-image"]}>
        <img alt="thumbnailUrl" src={props.listCourse.image} />
      </div>
      <div className={styles.inner}>
        <div className={styles.top}></div>
        <div className={styles.bottom}>
          <Link
            to={`/course/${props.listCourse.id}`}
            className={styles["trip-name"]}
          >
            <div>
              <span>{props.listCourse.name}</span>
            </div>
          </Link>
          <br />
          {/* <Link
            to={"/"}
            className={styles["trip-name"]}
            style={{ fontSize: "1rem", fontWeight: "400" }}
          >
            <div>
              <span>owner</span>
            </div>
          </Link>
          <div className={styles["destination-info"]}>
            <span> days</span>
            <span> photos</span>
            <span> places</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
