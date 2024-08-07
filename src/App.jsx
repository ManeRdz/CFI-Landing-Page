import { useState } from "react";
import "./App.css";
import MainRouter from "./router/MainRouter.routes";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <Layout />
      <MainRouter />
    </>
  );
}

export default App;
