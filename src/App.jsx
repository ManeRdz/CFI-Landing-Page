import { useState } from "react";
import "./App.css";
import MainRouter from "./router/MainRouter.routes";
import Layout from "./Layout/Layout";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Layout isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <MainRouter setIsDrawerOpen={setIsDrawerOpen} />
    </>
  );
}

export default App;
