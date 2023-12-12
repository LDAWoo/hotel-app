import { useEffect, useState } from "react";
import THead from "../../../../components/Table/THead";
import useRegisterDataFinance from "../../../../hooks/Finance/useRegisterDataFinance";
import useRegisterSortById from "../../../../hooks/Finance/useRegisterSortById";
import TBody from "../../../../components/Table/TBody";
import Body from "./Body";
import PropTypes from "prop-types";

function Table({ data }) {
  const { items } = useRegisterDataFinance();
  const [headRow, setHeadRow] = useState([]);
  useEffect(() => {
    setHeadRow(items[3]?.menu);
  }, [items]);

  return (
    <div>
      <table className="w-full table border-b-0">
        <THead data={headRow} useRegister={useRegisterSortById} />
        <TBody useRegisterSortById={useRegisterSortById} dataHeader={headRow} data={data} body={Body} />
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.array,
};

export default Table;
