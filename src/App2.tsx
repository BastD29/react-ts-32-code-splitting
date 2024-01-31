import { Route, Routes } from "react-router-dom";
// import NavWrapper from "./components/NavWrapper";
import NavWrapper from "./components/NavWrapper2";
// import Home from "./components/Home";
import Store from "./components/Store";
// import { About } from "./components/About";
import { lazy } from "react";
import { wait } from "./utils/wait";

// const Home = lazy(() => import("./components/Home")); // how to lazy load a default exported component
const Home = lazy(() => wait(1000).then(() => import("./components/Home4"))); // just in order to show the "Loading..." fallback message
const About = lazy(() =>
  import("./components/About").then((module) => {
    return { default: module.About };
  })
);

// * with code splitting

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NavWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
