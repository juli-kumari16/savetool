import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MergePdf from "./Pages/MergePdf";
import Split from "./Pages/Split";
import CompressPdf from "./Pages/CompressPdf";
import WordToPdf from "./Pages/WordToPdf";
import PdfToWord from "./Pages/PdfToWord";
import PdfToPpt from "./Pages/PdfToPpt";
import PdfToExcel from "./Pages/PdfToExcel";
import PptToPdf from "./Pages/PptToPdf";
import ExcelToPdf from "./Pages/ExcelToPdf";
import EditPdf from "./Pages/EditPdf";
import PdfToJpg from "./Pages/PdfToJpg";
import JpgToPdf from "./Pages/JpgToPdf";
import SignPdf from "./Pages/SignPdf";
import WaterMark from "./Pages/WaterMark";
import RotatePdf from "./Pages/RotatePdf";
import HtmlToPdf from "./Pages/HtmlToPdf";
import UnlockPdf from "./Pages/UnlockPdf";
import ProtectPdf from "./Pages/ProtectPdf";
import OrganizePdf from "./Pages/OrganizePdf";
import PdfToPdfA from "./Pages/PdfToPdfA";
import RepairPdf from "./Pages/RepairPdf";
import PageNoPdf from "./Pages/PageNoPdf";
import ScanPdf from "./Pages/ScanPdf";
import OcrPdf from "./Pages/OcrPdf";
import ComparePdf from "./Pages/ComparePdf";
import RedactPdf from "./Pages/RedactPdf";
import JpgToWebp from "./Pages/JpgToWebp";
import ImageBgRemoval from "./Pages/ImageBgRemoval";
import RemoveTextFromImage from "./Pages/RemoveTextFromImage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="split-pdf-online-free" element={<Split />} />
          <Route path="merge-pdf-in-one-file-online" element={<MergePdf />} />
          <Route path="compress-pdf-online-free" element={<CompressPdf />} />
          <Route
            path="word_to_pdf-converter-free-online"
            element={<WordToPdf />}
          />
          <Route path="pdf-to-word-converter" element={<PdfToWord />} />
          <Route path="pdf-to-powerpoint-converter" element={<PdfToPpt />} />
          <Route
            path="pdf-to-excel-converter-online-free"
            element={<PdfToExcel />}
          />
          <Route path="Convert-ppt-to-pdf" element={<PptToPdf />} />
          <Route
            path="excel-to-pdf-converter-online-free"
            element={<ExcelToPdf />}
          />
          <Route path="edit-pdf-online" element={<EditPdf />} />
          <Route path="pdf-to-jpg-converter" element={<PdfToJpg />} />
          <Route path="jpg-to-pdf-converter" element={<JpgToPdf />} />
          <Route path="sign-pdf-online" element={<SignPdf />} />
          <Route path="add-watermark-to-pdf" element={<WaterMark />} />
          <Route path="rotate-pdf-online" element={<RotatePdf />} />
          <Route path="convert-html-to-pdf" element={<HtmlToPdf />} />
          <Route path="unlock-pdf" element={<UnlockPdf />} />
          <Route path="protect-pdf" element={<ProtectPdf />} />
          <Route path="organize-pdf" element={<OrganizePdf />} />
          <Route path="convert-pdf-to-pdfa" element={<PdfToPdfA />} />
          <Route path="repair-pdf-online" element={<RepairPdf />} />
          <Route path="add-page-numbers-in-pdf" element={<PageNoPdf />} />
          <Route path="scan-to-pdf-online" element={<ScanPdf />} />
          <Route path="ocr-pdf-to-searcheable-file" element={<OcrPdf />} />
          <Route path="compare-pdf-online" element={<ComparePdf />} />
          <Route path="redact-pdf-online" element={<RedactPdf />} />
          <Route path="jpg-to-webp" element={<JpgToWebp />} />
          <Route path="image-background-remover" element={<ImageBgRemoval />} />
          <Route
            path="remove-text-from-an-Image"
            element={<RemoveTextFromImage />}
          />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
