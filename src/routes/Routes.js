import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "components/common/layout";

const Routes = ({ routes }) => {
  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route key={index} exact={route.exact} path={route.path}>
                {route.components}
              </Route>
            );
          })}
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
