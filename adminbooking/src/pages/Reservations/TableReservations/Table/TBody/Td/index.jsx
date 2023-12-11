import PropTypes from "prop-types";

function Td({ children }) {
  return (
    <td className="w-full 2md:w-auto pt-4 pb-4 pr-3 pl-3 border-b-[1px] 2md:border-none">
      <span className="text-[12px] flex items-center justify-start 2md:justify-center gap-1">{children}</span>
    </td>
  );
}

Td.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Td;
