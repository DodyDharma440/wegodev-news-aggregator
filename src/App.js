import React from "react";

import Routes from "./routes/Routes";
import { GlobalProvider } from "./hooks/Context";

const App = () => {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
};

export default App;
