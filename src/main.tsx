import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/GlobalStyles.ts";
import AppLayout from "./layout/components/AppLayout.tsx";
import GithubProvider from "./context/index.tsx";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <GithubProvider>
      <GlobalStyles />
      <AppLayout />
    </GithubProvider>
);
