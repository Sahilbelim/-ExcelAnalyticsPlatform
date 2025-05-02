
const xlsx = require("xlsx");

module.exports = function parseExcel(buffer, originalName) {
  const extension = originalName.split(".").pop().toLowerCase();
  let workbook;

  if (extension === "csv") {
    const csvString = buffer.toString("utf-8");
    workbook = xlsx.read(csvString, { type: "string" });
  } else if (extension === "xlsx" || extension === "xls") {
    workbook = xlsx.read(buffer, { type: "buffer" });
  } else {
    throw new Error("Unsupported file format");
  }

  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return xlsx.utils.sheet_to_json(sheet);
};
