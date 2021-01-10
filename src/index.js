import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./fonts/Roboto-Regular.ttf";
import * as Sentry from "@sentry/react";
import {Integrations} from "@sentry/tracing";
import * as serviceWorker from "./serviceWorker";

// Sentry.init({
//   dsn: "https://b26ceabab4ed4ec891469e213f0894d6@o416540.ingest.sentry.io/5565878",
//   autoSessionTracking: true,
//   integrations: [new Integrations.BrowserTracing()],

//   tracesSampleRate: 1.0,
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
