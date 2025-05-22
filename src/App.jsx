import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Stories, Writers } from "./pages";

function App() {
  return (
    <div className="font-inter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writers" element={<Writers />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/:id" element={<Stories />} />
        {/* <Route path="/categories" element={<Categories />} /> */}
      </Routes>
    </div>
  );
}

export default App;
