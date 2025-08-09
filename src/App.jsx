import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import BarcodeGenerator from "./BarcodeGeneratorScanner";
import QRCodeGenerator from "./QrcodeGenerator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/generate-barcode" element={<BarcodeGenerator />} />
      <Route path="/generate-qrcode" element={<QRCodeGenerator />} />
    </Routes>
  );
}

export default App;
