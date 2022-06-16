import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import PetForm from "./components/PetForm";
import EditPet from "./components/EditPet";
import DisplayPetDetails from "./components/DisplayPetDetails";
import Player from "./components/Player";
import PlayerApp from "./components/PlayerApp";


function App() {
  return (
    <div className="">


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayerApp />} />
          <Route path="/tracks" element={<DisplayAll />} />
          <Route path="/details/:id" element={<DisplayPetDetails />} />
          <Route path="/new" element={<PetForm/>} />
          <Route path="/edit/:id" element={<EditPet />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
