import { Route, Routes } from "react-router-dom";
import { Home, Stories } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="font-inter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </div>
  );
}

export default App;
