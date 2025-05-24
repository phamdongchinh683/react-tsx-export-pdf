import axios from "axios";
import { Doctor } from "../models/Doctor";
import { Patient } from "../models/Patient";

async function getPatients(): Promise<Patient[]> {
  try {
    const res = await axios.get(
      "https://backend-medical-record.onrender.com/api/v1/public/patients"
    );
    return res.data.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách bệnh nhân:", error);
    return [];
  }
}

async function getDoctors(): Promise<Doctor[]> {
  try {
    const res = await axios.get(
      "https://backend-medical-record.onrender.com/api/v1/public/doctors"
    );
    return res.data.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách bác sĩ:", error);
    return [];
  }
}

export const Service = {
  getPatients,
  getDoctors,
};
