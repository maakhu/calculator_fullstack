import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main  from "./components/Main";
import NotFound from "./components/pages/NotFound";
import Calculator from "./components/pages/Calculator";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/calculator" element={<Calculator/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
