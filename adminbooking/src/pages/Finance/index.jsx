import Title from "../../components/Title/Title";
import Invoices from "./Invoices";
import TableFinance from "./TableFinance";

function Finance() {
  return (
    <div>
      <div className="mt-0 mb-0 ml-auto mr-auto max-w-[var(--max-width)] p-4 relative">
        <div className="mb-4">
          <Title title="Finance" fontBold extraLarge5 />
        </div>
        <Invoices />
        <TableFinance />
      </div>
    </div>
  );
}

export default Finance;
