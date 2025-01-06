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
          <Route path="pdf_to_powerpoint" element={<PdfToPpt />} />
          <Route path="pdf_to_excel" element={<PdfToExcel />} />
          <Route path="powerpoint_to_pdf" element={<PptToPdf />} />
          <Route path="excel_to_pdf" element={<ExcelToPdf />} />
          <Route path="edit_to_pdf" element={<EditPdf />} />
          <Route path="pdf_to_jpg" element={<PdfToJpg />} />
          <Route path="jpg_to_pdf" element={<JpgToPdf />} />
          <Route path="sign_pdf" element={<SignPdf />} />
          <Route path="watermark" element={<WaterMark />} />
          <Route path="rotate_pdf" element={<RotatePdf />} />
          <Route path="html_to_pdf" element={<HtmlToPdf />} />
          <Route path="unlock_pdf" element={<UnlockPdf />} />
          <Route path="protect_pdf" element={<ProtectPdf />} />
          <Route path="organize_pdf" element={<OrganizePdf />} />
          <Route path="convert_pdf_to_pdfa" element={<PdfToPdfA />} />
          <Route path="repair_pdf" element={<RepairPdf />} />
          <Route path="add_pdf_page_number" element={<PageNoPdf />} />
          <Route path="scan_to_pdf" element={<ScanPdf />} />
          <Route path="ocr_pdf" element={<OcrPdf />} />
          <Route path="compare_pdf" element={<ComparePdf />} />
          <Route path="redact_pdf" element={<RedactPdf />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
