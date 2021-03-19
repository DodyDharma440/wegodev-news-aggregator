import React from "react";

import Routes from "./routes/Routes";
import { GlobalProvider } from "./context/globalContext";

const App = () => {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
};

export default App;
