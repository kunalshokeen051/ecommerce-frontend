import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
    domain="dev-16cqaqhzb21o4drt.us.auth0.com"
    clientId="HlQs3bP7smnJ1ndqpbFZR7FbZHPQzQxz"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
