import React, { useEffect } from "react";
import Tabs from "../../../components/tab/tabs";
import styles from "./trip.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import "react-notifications/lib/notifications.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getListCourseLesson } from "../../../store/actions/course.action";

function Trip() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { listCourseLesson } = useSelector((state) => state.course);
  useEffect(() => {
    dispatch(getListCourseLesson(id));
    // eslint-disable-next-line
  }, [id]);
  return (
    <div className={styles.newTrip}>
      {!(listCourseLesson.length > 0)  ? (
        "no lesson"
      ) : (
        <>
          <div className="w_i- w_hM">
            <div style={{ width: "100%", height: "100%", display: "flex" }}>
              <Tabs>
                {listCourseLesson[0] &&
                  listCourseLesson.map((l, i) => (
                    <div label={`lesson: ${i + 1}`} Icon={FaLongArrowAltRight}>
                      <div className={styles.courseLessonLink}>
                        <iframe
                          title="title"
                          src={`https://www.youtube.com/embed/${l.link}`}
                          width="100%"
                          height="100%"
                          frameborder="1"
                        ></iframe>
                      </div>
                    </div>
                  ))}
              </Tabs>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Trip;
