import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Stories } from "./pages";
import { Footer, Header } from "./components";

function App() {
  return (
    <div className="font-inter">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
