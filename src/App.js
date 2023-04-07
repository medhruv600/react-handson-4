import logo from "./logo.svg";
import "./App.css";
import Home from "./cmp/Home";
import Student from "./cmp/Student";
import Contact from "./cmp/Contact";
import Navbar from "./cmp/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      }
    </div>
  );
}

export default App;
