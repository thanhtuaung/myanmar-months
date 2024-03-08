import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MonthDetail from "./pages/MonthDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/months/:id" element={<MonthDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
