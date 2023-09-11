import { pathsPublic, pathsPrivate } from "../paths-component/paths";
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
  { pathsPublic: pathsPublic.Registration, element: <Registration /> },
];

export const privateRoutes = [
  { pathsPrivate: pathsPrivate.Todo, element: <Todolist /> },
];
