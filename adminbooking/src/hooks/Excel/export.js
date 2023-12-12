import * as XLSX from "xlsx";

const exportToExcel = (data, name) => {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
  XLSX.writeFile(wb, name);
};

export default exportToExcel;
