import { useEffect, useState } from "react";
import THead from "../../../../components/Table/THead";
import useRegisterDataFinance from "../../../../hooks/Finance/useRegisterDataFinance";
import useRegisterSortById from "../../../../hooks/Finance/useRegisterSortById";
import TBody from "../../../../components/Table/TBody";
import Body from "./Body";

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
];

function Table() {
  const { items } = useRegisterDataFinance();
  const [headRow, setHeadRow] = useState([]);
  console.log(items);
  useEffect(() => {
    setHeadRow(items[3]?.menu);
  }, [items]);
  return (
    <div>
      <table className="w-full table border-b-0">
        <THead data={headRow} useRegister={useRegisterSortById} />
        <TBody useRegisterSortById={useRegisterSortById} dataHeader={headRow} data={fakeData} body={Body} />
      </table>
    </div>
  );
}

export default Table;
