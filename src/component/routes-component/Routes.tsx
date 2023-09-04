import {
  pathsPublic,
  pathsPrivate,
  pathsRegistration,
} from "../paths-component/paths";
import Login from "../../pages/page-login/Login";
import { Navigate } from "react-router-dom";
import Todolist from "../../pages/todo-list/TodoList";
import Registration from "../../pages/page-registration/Registration";

export const publicRoutes = [
  {
    pathsPublic: pathsPublic.Starting,
    element: <Navigate to={pathsPublic.Login} replace />,
  },
  { pathsPublic: pathsPublic.Login, element: <Login /> },
];

export const privateRoutes = [
  { pathsPrivate: pathsPrivate.Todo, element: <Todolist /> },
];

export const registrationRoutes = [
  {
    pathsRegistration: pathsRegistration.Registration,
    element: <Registration />,
  },
];
