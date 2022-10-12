import { Route, Routes } from "react-router-dom";
import { Player } from "./pages/Player";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/player" element={<Player />} />
      <Route path="/player/option/:videoId" element={<Player />} />
    </Routes>
  )
}