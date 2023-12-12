import TableDraggable from "../../../../components/TableDraggable";
import useRegisterDataFinance from "../../../../hooks/Finance/useRegisterDataFinance";
import Item from "../../../../components/TableDraggable/Item";
import PropTypes from "prop-types";

function Header({ initData, onClick }) {
  const { setItems, currentData, setCurrentData } = useRegisterDataFinance();
  return (
    <div>
      <div className="flex justify-start 2md:justify-end mb-2">
        <TableDraggable initData={initData} setItems={setItems} currentData={currentData} setCurrentData={setCurrentData} component={Item} onClick={onClick} />
      </div>
    </div>
  );
}

Header.propTypes = {
  initData: PropTypes.array,
  onClick: PropTypes.func,
};

export default Header;
