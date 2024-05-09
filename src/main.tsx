import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.ts";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Autenticacion de google - rafael */}
    <Provider store={store}>
    <Auth0Provider
      domain="dev-lnoda07jj1wqfmje.us.auth0.com"
      clientId="jqitWEg6LjOSIj6TlHvEQIGD5crvlSDr"
      authorizationParams={{ redirect_uri: window.location.origin }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
    </Provider>
  </React.StrictMode>
);
