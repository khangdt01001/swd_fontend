import React, { useEffect, useState } from "react";
import CourseItem from "../CourseItem/CourseItem";
import { useDispatch, useSelector } from "react-redux";
import { getListCourse } from "../../store/actions/course.action";
export default function RenderCourseItem() {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  const { listCourse } = useSelector((state) => state.course);
  useEffect(() => {
    dispatch(getListCourse());
    // eslint-disable-next-line
  }, []);
    useEffect(() => {
     setCourses(listCourse.slice(0, 3));
      // eslint-disable-next-line
    }, [listCourse]);
  return listCourse.length === 0 ? (
    <div className="w_cw">
      <div className="w_cW w_cX ">load</div>
    </div>
  ) : (
    <div className="w_cw">
      <div className="w_cW w_cX ">
        <label className="w_rI w_rT">New Course</label>
        <div
          // className="w_cx"
          style={{
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
            margin: "16px 0",
          }}
        >
          {courses &&
            courses.map((listCourse, index) => (
              <CourseItem listCourse={listCourse} key={index} />
            ))}
        </div>
        <div className="w_i-" style={{ justifyContent: "center" }}>
          {courses.length < listCourse.length && (
            <button
              onClick={() =>
                setCourses([
                  ...courses,
                  ...listCourse.slice(courses.length, courses.length + 3),
                ])
              }
              className="w_ih w_ik w_cy"
              style={{ width: "auto" }}
            >
              <span className="w_ia">Load More</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
