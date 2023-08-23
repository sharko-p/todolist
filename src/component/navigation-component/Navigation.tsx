import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes,registrationRoutes } from "../routes-component/Routes";

const Navigation = () => {
  return (
    <>
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.pathsPublic} element={route.element} key={route.pathsPublic} />
        ))}

        {privateRoutes.map((route) => (
          <Route path={route.pathsPrivate} element={route.element} key={route.pathsPrivate} />
        ))}
        {registrationRoutes.map((route) => (
          <Route path={route.pathsRegistration} element={route.element} key={route.pathsRegistration} />
        ))}
      </Routes>

      
    </>
  );
};

export default Navigation;
