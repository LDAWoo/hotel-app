import { PiDownloadSimpleThin, PiPauseThin } from "react-icons/pi";
import exportToExcel from "../../../hooks/Excel/export";
import Header from "./Header";
import Table from "./Table";

const initData = [
  {
    id: "downloadAllInvoice(pdf)",
    title: "Download all invoices(pdf files)",
    icon: PiDownloadSimpleThin,
  },
  {
    id: "downloadInvoice(excel)",
    title: "Download invoices table (Excel files)",
    icon: PiDownloadSimpleThin,
  },
  {
    id: "downloadFullReservationStatement(excel)",
    title: "Download full reservation statement (Excel files)",
    icon: PiDownloadSimpleThin,
  },
  {
    id: "customize_data",
    title: "Customize data",
    menu: [
      { id: "invoice", name: "Invoice", sortBy: "invoice", status: true },
      { id: "propertyId", name: "Property ID", sortBy: "propertyId", status: true },
      { id: "propertyName", name: "Property Name", sortBy: "propertyName", status: true },
      { id: "invoiceDate", name: "Invoice Date", sortBy: "invoiceDate", status: true },
      { id: "amount", name: "Amount", sortBy: "amount", status: true },
      { id: "dateDue", name: "Date due", sortBy: "dateDue", status: true },
      { id: "status", name: "Status", sortBy: "status", status: true },
      { id: "invoiceType", name: "InvoiceType", sortBy: "invoiceType", status: true },
    ],
    icon: PiPauseThin,
  },
];

const fakeData = [
  {
    invoice: "100",
    propertyId: "111111",
    propertyName: "Hotel",
    invoiceDate: "Mon Dec 11 2023 09:24:54 GMT+0700 (Giờ Đông Dương)",
    amount: 120000,
    dateDue: "Mon Dec 11 2023 09:24:54 GMT+0700 (Giờ Đông Dương)",
    status: true,
    invoiceType: "invoiceType",
  },
  {
    invoice: "200",
    propertyId: "22222",
    propertyName: "The Hotel",
    invoiceDate: "Mon Dec 11 2023 09:24:54 GMT+0700 (Giờ Đông Dương)",
    amount: 200000,
    dateDue: "Mon Dec 11 2023 09:24:54 GMT+0700 (Giờ Đông Dương)",
    status: false,
    invoiceType: "invoiceType",
  },
];

function TableFinance() {
  const handleClick = (id) => {
    if (id === "downloadInvoice(excel)") {
      exportToExcel(fakeData, "Finance");
    }
  };

  return (
    <div>
      <Header onClick={handleClick} initData={initData} />
      <Table data={fakeData} />
    </div>
  );
}

export default TableFinance;
