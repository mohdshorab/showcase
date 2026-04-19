import type React from "react";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Home />
      </Provider>
    </>
  );
};
export default App;
