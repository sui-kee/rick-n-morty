import "./App.css";
import { Route, Routes } from "react-router-dom";
import Intro from "./components/Intro";
import CharacterLayout from "./layouts/characterLayout";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV !== "production") {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/characters" element={<CharacterLayout />} />
    </Routes>
  );
}

export default App;
