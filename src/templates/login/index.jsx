import React from "react";
import { Route } from "react-router-dom";
function LoginTemplate(props) {
  return <main>{props.children}</main>;
}

const RouterSignTemplate = ({ path, exact, Component }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() => (
        <LoginTemplate>
          <Component />
        </LoginTemplate>
      )}
    />
  );
};

export default RouterSignTemplate;
