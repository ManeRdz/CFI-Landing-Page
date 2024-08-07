import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/About/AboutUs";
import Story from "../Pages/Story/Story";
import Culture from "../Pages/Culture/Culture";
import Inversionists from "../Pages/Inversionists/Inversionists";
import Services from "../Pages/Services/Services";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quienes-somos" element={<AboutUs />} />
        <Route path="nuestra-historia" element={<Story />} />
        <Route path="cultura-organizacional" element={<Culture />} />
        <Route path="equipo-directivo" element={<Inversionists />} />
        <Route path="servicios" element={<Services />} />
      </Routes>
    </>
  );
};

export default MainRouter;
