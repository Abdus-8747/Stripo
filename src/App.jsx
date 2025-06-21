import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import BarcodeGenerator from "./BarcodeGeneratorScanner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/generate" element={<BarcodeGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
