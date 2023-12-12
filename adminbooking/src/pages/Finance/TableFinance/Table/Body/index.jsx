import { Link } from "react-router-dom";
import Td from "../../../../../components/Table/TBody/Td";
import { format } from "date-fns";

function Body({ dataHeader, row }) {
  return (
    <>
      {dataHeader &&
        dataHeader.map((column) => (
          <>
            {column?.id === "invoice" && (
              <Td>
                <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
                <span className="text-[12px] whitespace-nowrap">{row?.invoice}</span>
              </Td>
            )}

            {column?.id === "propertyId" && (
              <td className="w-full 2md:w-auto pl-3 2md:pl-8 pt-4 pb-4 pr-3 table-cell align-top border-b-[1px] 2md:border-none">
                <Link className="flex items-center justify-start hover:underline">{row.propertyId}</Link>
              </td>
            )}

            {column?.id === "propertyName" && (
              <td className="w-full 2md:w-auto pl-3 2md:pl-3 pt-4 pb-4 pr-3 table-cell align-top border-b-[1px] 2md:border-none">
                <Link className="flex items-center justify-start hover:underline">{row?.propertyName}</Link>
              </td>
            )}

            {column?.id === "amount" && (
              <Td>
                <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
                <span className="text-[14px]">{row?.amount}</span>
              </Td>
            )}

            {column?.id === "invoiceDate" && (
              <Td>
                <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
                <span className="text-[12px] whitespace-nowrap">{format(new Date(row?.invoiceDate), "yyyy-MM-dd")}</span>
              </Td>
            )}

            {column?.id === "dateDue" && (
              <Td>
                <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
                <span className="text-[12px] whitespace-nowrap">{format(new Date(row?.dateDue), "yyyy-MM-dd")}</span>
              </Td>
            )}

            {column?.id === "status" && (
              <Td>
                <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
                <span className="text-[14px] whitespace-nowrap">{row?.status ? "On" : "Off"}</span>
              </Td>
            )}

            {column?.id === "invoiceType" && (
              <Td>
                <span className="w-[50%] block 2md:hidden text-[14px]">{column?.name}</span>
                <span className="text-[14px] whitespace-nowrap">{row?.invoiceType}</span>
              </Td>
            )}
          </>
        ))}
    </>
  );
}

export default Body;
