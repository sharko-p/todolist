import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../routes-component/Routes";

const Navigation: React.FC = () => {
  return (
    <>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            path={route.pathsPublic}
            element={route.element}
            key={route.pathsPublic}
          />
        ))}

        {privateRoutes.map((route) => (
          <Route
            path={route.pathsPrivate}
            element={route.element}
            key={route.pathsPrivate}
          />
        ))}
      </Routes>
    </>
  );
};

export default Navigation;
