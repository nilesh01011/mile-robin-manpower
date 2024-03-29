import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import StartingPage from "./pages/startingPage";
import LoginPage from "./pages/login";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* antd */}
    {/* <ConfigProvider
      theme={{
        inherit: true,
        token: {
          colorBgLayout: "red",
          colorPrimary: "red",
        },
        components: {
          DatePicker: {
            colorPrimary: "red",
          },
        },
      }}
    > */}
      <Provider store={store}>
        {/* redux persist */}
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              {/* Starting Page */}
              <Route exact path="/" element={<StartingPage />}></Route>
              {/* Login Page */}
              <Route path="/login" element={<LoginPage />}></Route>
              {/* Other Routes */}
              <Route path="/*" element={<App />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    {/* </ConfigProvider> */}
  </React.StrictMode>
);
