import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import SongForm from "./components/SongForm";
import EditTrack from "./components/EditTrack";
import DisplaysongDetails from "./components/DisplaysongDetails";
import Player from "./components/Player";
import PlayerApp from "./components/PlayerApp";
import FileUpload from "./components/FileUpload";


function App() {
  return (
    <div className="">


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayerApp />} />
          <Route path="/tracks" element={<DisplayAll />} />
          <Route path="/details/:id" element={<DisplaysongDetails />} />
          <Route path="/new" element={<SongForm/>} />
          <Route path="/edit/:id" element={<EditTrack />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
