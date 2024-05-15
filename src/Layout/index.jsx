import { Route, Routes } from "react-router-dom";
import Join from "../pages/Join";
import Menu from "../pages/Menu";
import Welcome from "../pages/Welcome";
import Kobi from "../test/Kobi";
import Ronini from "../test/Ronini";
import Refael from "../test/Refael";
import ChoosePlayer from "../pages/ChoosePlayer";
import Waiting from "../pages/Waiting";
import BoardWithPlayers from "../pages/BoardWithPlayers";
import { useState } from "react";

export default function Layout() {

  const [roomCode, setRoomCode] = useState('');


  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/menu" element={<Menu setRoomCode={setRoomCode}/>} />
      <Route path="/waiting" element={<Waiting />} />
      <Route path="/join" element={<Join />} />
      <Route path="/board" element={<BoardWithPlayers />} />
      <Route path="/choose" element={<ChoosePlayer />} />
      <Route path="/kobi" element={<Kobi />} />
      <Route path="/ronini" element={<Ronini />} />
      <Route path="/refael" element={<Refael />} />
    </Routes>
  );
}
