import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef, useState } from "react";
import MedicalRecordForm from "./MedicalForm";
import MedicalRecordPreview from "./MedicalPreview";

export default function MedicalRecordExport() {
  const printRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "Nam",
    date: new Date().toISOString().split("T")[0],
    idNumber: "",
    phone: "",
    address: "",
    doctor: "",
    symptoms: "",
    diagnosis: "",
    treatment: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");

    const imgProps = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`HoSoBenhAn_${formData.patientName || "BenhNhan"}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
      <MedicalRecordForm formData={formData} handleChange={handleChange} />
      <div ref={printRef}>
        <MedicalRecordPreview data={formData} />
      </div>
      <button
        onClick={handleDownloadPdf}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Xuất hồ sơ PDF
      </button>
    </div>
  );
}
