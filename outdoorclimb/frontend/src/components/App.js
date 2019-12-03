import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Header from "./layout/Header";
import Dashboard from "./users/Dashboard";
import RouteBrowse from "./routes/RoutesBrowser";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import ParksBrowse from "./parks/ParksBrowse";
import RoutesBrowser from "./routes/RoutesBrowser";
import PrivateRoute from "./common/PrivateRoute";
import AddRoute from "./adders/AddRoute";
import RoutesViewer from "./routes/RoutesViewer";
import RoutesTest from "./routes/RoutesTest";
import AddPark from "./adders/AddPark";
import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";
import ExplorerLogin from "./accounts/ExplorerLogin";
import ExplorerRegister from "./accounts/ExplorerRegister";

const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute
                    exact
                    path="/routesviewer"
                    component={RoutesViewer}
                  />
                  <PrivateRoute exact path="/addroute" component={AddRoute} />
                  <PrivateRoute
                    exact
                    path="/routestest"
                    component={RoutesTest}
                  />
                  <PrivateRoute exact path="/addroute" component={AddRoute} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <PrivateRoute exact path="/addpark" component={AddPark} />
                  <Route
                    exact
                    path="/explorerlogin"
                    component={ExplorerLogin}
                  />
                  <Route
                    exact
                    path="/explorerregister/"
                    component={ExplorerRegister}
                  />
                  <PrivateRoute
                    exact
                    path="/routesbrowser"
                    component={RoutesBrowser}
                  />
                  <Route exact path="/register" component={Register} />
                  <PrivateRoute
                    exact
                    path="/parksbrowse"
                    component={ParksBrowse}
                  />
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <PrivateRoute
                    exact
                    path="/parksbrowse"
                    component={ParksBrowse}
                  />
                  <PrivateRoute exact path="/" component={Dashboard} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
