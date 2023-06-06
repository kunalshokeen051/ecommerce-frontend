import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <GoogleOAuthProvider clientId="121371373582-0i8ttgfiiri5s6gqo1nr2a9ct2ttigcj.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>,
);
