import { PiDownloadSimpleThin, PiPauseThin } from "react-icons/pi";
import TableDraggable from "../../../../components/TableDraggable";
import useRegisterDataFinance from "../../../../hooks/Finance/useRegisterDataFinance";
import Item from "../../../../components/TableDraggable/Item";
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

function Header() {
  const { setItems, currentData, setCurrentData } = useRegisterDataFinance();
  return (
    <div>
      <div className="flex justify-start 2md:justify-end mb-2">
        <TableDraggable initData={initData} setItems={setItems} currentData={currentData} setCurrentData={setCurrentData} component={Item} />
      </div>
    </div>
  );
}

export default Header;
