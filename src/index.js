import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoginButton from "../src/login"; //❗ add this
import LogoutButton from "../src/logout"; //❗ add this
import { Auth0Provider } from "@auth0/auth0-react"; //❗ add this

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-em588mv6rm6jy6hn.us.auth0.com"
      clientId="ujpnyMULbFNoqRJY06kn5JKZAz7t56CM"
      redirectUri={window.location.origin}
      audience="https://dev-em588mv6rm6jy6hn.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <App />
      <div className="landing-page-btns-div">
        <LoginButton className="login-btn" />
        <LogoutButton className="logout-btn" />
      </div>
    </Auth0Provider>{" "}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
