import { Redirect, Route } from "react-router";

const PrivateRoute = ({ children, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
