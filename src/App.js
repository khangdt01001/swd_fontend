import { BrowserRouter, Switch } from "react-router-dom";
import { mainRouter, signRouter } from "./configs/router";
import RouterMainTemplate from "./templates/main";
import RouterSignTemplate from "./templates/login";
import { ModalContainer } from "./components/Modal";

function App() {
  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, Component }) => {
      return (
        <RouterMainTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterMainTemplate>
      );
    });
  };
  const renderSignRouter = () => {
    return signRouter.map(({ path, exact, Component }) => {
      return (
        <RouterSignTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterSignTemplate>
      );
    });
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {renderSignRouter()}
          {renderMainRouter()}
        </Switch>
        <ModalContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
