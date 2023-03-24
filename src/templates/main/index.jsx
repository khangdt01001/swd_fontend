import React from "react";
import {  Route, useRouteMatch } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useIsLogin } from "../../hooks/useIsLogin";
import HeaderNotLogin from "../../components/Header/headerNotLogin";

function MainTemplate(props) {
  const useRoutePastTrip = useRouteMatch("/course");
  const { isLogin } = useIsLogin();
  return (
    <>
      {isLogin
        ?    <Header />
        :    <HeaderNotLogin />}
      <main style={{paddingTop: "80px"}}>{props.children}</main>
      {!useRoutePastTrip && <Footer />}
    </>
  );
}

const RouterMainTemplate = ({ path, exact, Component }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() => (
        <MainTemplate>
          <Component />
        </MainTemplate>
      )}
    />
  );
};

export default RouterMainTemplate;
