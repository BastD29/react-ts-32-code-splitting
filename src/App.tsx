import { Route, Routes } from "react-router-dom";
import NavWrapper from "./components/NavWrapper";
// import Home from "./components/Home";
import Home from "./components/Home2";
import Store from "./components/Store";
import About from "./components/About";

// * without code splitting

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
