import React from "react";
import ReactDOM from "react-dom/client";
import { DataRender } from "./components/DataRender";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
<GoogleOAuthProvider clientId="707388191855-tturdiog152fhkeabnsnf84mkjflbb2k.apps.googleusercontent.com">
  <React.StrictMode>
    <DataRender />
  </React.StrictMode>
  </GoogleOAuthProvider>
);
