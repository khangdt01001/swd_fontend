import Err from "../pages/main/err";
import Feed from "../pages/main/feed";
import Login from "../pages/main/login";
import Trip from "../pages/main/Trip";
import Register from "../pages/main/register";
export const signRouter = [
  {
    path: "/login",
    exact: false,
    Component: Login,
  },
  {
    path: "/signUp",
    exact: false,
    Component: Register,
  }
];

export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Feed,
  },
  {
    path: "/course/:id?",
    exact: true,
    Component: Trip,
  },
  {
    Component: Err,
  },
];
