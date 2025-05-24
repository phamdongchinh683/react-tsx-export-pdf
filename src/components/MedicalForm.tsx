import React from "react";
import { Doctor } from "../models/Doctor";
import { Patient } from "../models/Patient";
import { Service } from "../services";

interface MedicalRecordFormProps {
  formData: {
    patientName: string;
    age: number | string;
    gender: string;
    date: string;
    idNumber: string;
    phone: string;
    address: string;
    doctor: string;
    symptoms: string;
    diagnosis: string;
    treatment: string;
    notes: string;
  };
  handleChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

export default function MedicalRecordForm({
  formData,
  handleChange,
}: MedicalRecordFormProps) {
  const [patients, setPatients] = React.useState([] as Patient[]);
  const [doctors, setDoctors] = React.useState([] as Doctor[]);

  React.useEffect(() => {
    const fetchData = async () => {
      const patientData: Patient[] = await Service.getPatients();
      const doctorData: Doctor[] = await Service.getDoctors();
      setPatients(patientData);
      setDoctors(doctorData);
    };

    fetchData();
  }, []);
  return (
    <div className="w-full max-w-3xl bg-white p-6 rounded-md shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Thông tin hồ sơ bệnh án</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Bệnh nhân</option>
          {patients.map((patient: Patient) => (
            <option key={patient._id} value={patient.fullName}>
              {patient.fullName}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="age"
          placeholder="Tuổi bệnh nhân"
          min={0}
          value={formData.age}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
          <option value="Khác">Khác</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="idNumber"
          minLength={9}
          placeholder="Số CMND/CCCD"
          value={formData.idNumber}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Số điện thoại"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="address"
          placeholder="Địa chỉ liên hệ"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Bác sĩ</option>
          {doctors.map((doctor: Doctor) => (
            <option key={doctor._id} value={doctor.fullName}>
              {doctor.fullName}
            </option>
          ))}
        </select>
      </div>
      <textarea
        name="symptoms"
        placeholder="Triệu chứng ban đầu"
        value={formData.symptoms}
        onChange={handleChange}
        className="border p-2 rounded mt-4 w-full"
        rows={3}
      />
      <textarea
        name="diagnosis"
        placeholder="Chẩn đoán lâm sàng"
        value={formData.diagnosis}
        onChange={handleChange}
        className="border p-2 rounded mt-2 w-full"
        rows={3}
      />
      <textarea
        name="treatment"
        placeholder="Phác đồ điều trị / Thuốc đã dùng"
        value={formData.treatment}
        onChange={handleChange}
        className="border p-2 rounded mt-2 w-full"
        rows={3}
      />
      <textarea
        name="notes"
        placeholder="Ghi chú thêm (nếu có)"
        value={formData.notes}
        onChange={handleChange}
        className="border p-2 rounded mt-2 w-full"
        rows={2}
      />
    </div>
  );
}
