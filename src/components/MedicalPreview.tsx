interface MedicalRecordData {
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
  notes?: string;
}

export default function MedicalRecordPreview({
  data,
}: {
  data: MedicalRecordData;
}) {
  return (
    <div
      className="w-[794px] min-h-[1123px] mx-auto bg-white px-12 py-10 border border-gray-300 text-[13px] leading-relaxed font-sans text-black"
      style={{ fontFamily: "Arial, sans-serif" }}
      id="pdf-content"
    >
      <div className="border-b border-black pb-4 mb-6">
        <h1 className="text-center text-2xl font-bold uppercase">
          Hồ Sơ Bệnh Án
        </h1>
        <p className="text-center text-sm italic">Mẫu bệnh án điện tử</p>
      </div>

      <div className="grid grid-cols-2 gap-x-10 gap-y-2">
        <p>
          <strong>Họ tên bệnh nhân:</strong>{" "}
          {data.patientName || "Họ tên bệnh nhân chưa được cập nhật"}
        </p>
        <p>
          <strong>Tuổi:</strong> {data.age || ""} &nbsp;&nbsp;{" "}
          <strong>Giới tính:</strong> {data.gender}
        </p>
        <p>
          <strong>Ngày khám:</strong> {data.date}
        </p>
        <p>
          <strong>Số CMND/CCCD:</strong> {data.idNumber}
        </p>
        <p>
          <strong>Số điện thoại:</strong> {data.phone}
        </p>
        <p>
          <strong>Địa chỉ:</strong> {data.address}
        </p>
        <p>
          <strong>Bác sĩ điều trị:</strong> {data.doctor}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold underline mb-1">Triệu chứng ban đầu:</h3>
        <p className="whitespace-pre-line border border-gray-300 p-2 rounded min-h-[50px]">
          {data.symptoms ||
            "Triệu chứng sẽ được cập nhật sau khi có kết quả khám."}
        </p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold underline mb-1">Chẩn đoán:</h3>
        <p className="whitespace-pre-line border border-gray-300 p-2 rounded min-h-[50px]">
          {data.diagnosis ||
            "Chẩn đoán sẽ được cập nhật sau khi có kết quả khám."}
        </p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold underline mb-1">Điều trị:</h3>
        <p className="whitespace-pre-line border border-gray-300 p-2 rounded min-h-[50px]">
          {data.treatment ||
            "Phác đồ điều trị sẽ được cập nhật sau khi có kết quả chẩn đoán."}
        </p>
      </div>

      {data.notes && (
        <div className="mt-4">
          <h3 className="font-semibold underline mb-1">Ghi chú thêm:</h3>
          <p className="whitespace-pre-line border border-gray-300 p-2 rounded min-h-[30px]">
            {data.notes}
          </p>
        </div>
      )}
    </div>
  );
}
