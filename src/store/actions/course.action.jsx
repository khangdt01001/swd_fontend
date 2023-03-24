import axios from "axios";
// import { NotificationManager } from "react-notifications";
import {
  LIST_COURSE_SUCCESS,
  LIST_COURSE_FAILED,
  LIST_COURSE_LESSON_SUCCESS,
  LIST_COURSE_LESSON_FAILED,
} from "../constants/course.const";
import { startLoading, stopLoading } from "./common.action";
const API_URL = process.env.REACT_APP_API_URL;

export const getListCourse = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url: `${API_URL}/course/get_list`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(postLoginSuccess(res.data.Object));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postLoginFailed(err));
      });
  };
};

export const postLoginSuccess = (listCourse) => {
  return {
    type: LIST_COURSE_SUCCESS,
    payload: listCourse,
  };
};

const postLoginFailed = (err) => {
  return {
    type: LIST_COURSE_FAILED,
    payload: err,
  };
};


export const getListCourseLesson = (id) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url: `${API_URL}/course_lesson/get_list?id=${id}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(getListCourseLessonSuccess(res.data.Object[0] ?res.data.Object:[]));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getListCourseLessonFailed(err));
      });
  };
};

export const getListCourseLessonSuccess = (listCourseLesson) => {
  return {
    type: LIST_COURSE_LESSON_SUCCESS,
    payload: listCourseLesson,
  };
};

const getListCourseLessonFailed = (err) => {
  return {
    type: LIST_COURSE_LESSON_FAILED,
    payload: err,
  };
};

