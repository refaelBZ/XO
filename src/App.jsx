import { Route, Routes } from "react-router-dom";
import "./App.css";
import Test from "./test";
import Join from "./pages/Join";
import Menu from "./pages/Menu";
import Welcome from "./pages/Welcome";
import Kobi from "./test/Kobi";
import Ronini from "./test/Ronini";
import Refael from "./test/Refael";
import Board from "./pages/Board";
import ChoosePlayer from "./pages/ChoosePlayer";
import Waiting from "./pages/Waiting";

import Layout from "./Layout";

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/waiting" element={<Waiting />} />
        <Route path="/join" element={<Join />} />
        <Route path="/board" element={<Board />} />
        <Route path="/choose" element={<ChoosePlayer />} />
        <Route path="/kobi" element={<Kobi />} />
        <Route path="/ronini" element={<Ronini />} />
        <Route path="/refael" element={<Refael />} />
      </Routes>

      <Test />
      <Layout />
    </main>
  );
}
