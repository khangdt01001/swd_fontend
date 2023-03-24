import {
  LIST_COURSE_SUCCESS,
  LIST_COURSE_FAILED,
  LIST_COURSE_LESSON_SUCCESS,
  LIST_COURSE_LESSON_FAILED,
} from "../constants/course.const";

export const tripInitialState = {
  listCourse: [],
  listCourseLesson: [],
};

const courseReducer = (state = tripInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_COURSE_SUCCESS: {
      return { ...state, listCourse: payload };
    }
    case LIST_COURSE_FAILED: {
      return { ...state, errors: payload };
    }
    case LIST_COURSE_LESSON_SUCCESS: {
      return { ...state, listCourseLesson: payload };
    }
    case LIST_COURSE_LESSON_FAILED: {
      return { ...state, errors: payload };
    }
    default:
      return state;
  }
};

export default courseReducer;
