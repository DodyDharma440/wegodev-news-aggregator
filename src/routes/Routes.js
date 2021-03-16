import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

import Layout from "components/layout/Layout";
import HomePage from "pages/HomePage";
import CategoryPage from "pages/CategoryPage";
import ExplorePage from "pages/ExplorePage";
import BookmarksPage from "pages/BookmarksPage";

const routes = [
  {
    path: "/",
    exact: true,
    components: <HomePage />,
  },
  {
    path: "/category",
    components: <CategoryPage />,
  },
  {
    path: "/explore",
    components: <ExplorePage />,
  },
  {
    path: "/bookmarks",
    components: <BookmarksPage />,
  },
];

const Routes = () => {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
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
