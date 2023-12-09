import PropTypes from "prop-types";

function Tr({ name, title }) {
  return (
    <td className="w-full 2md:w-auto pt-4 pb-4 pr-3 pl-3 border-b-[1px] 2md:border-none">
      <span className="text-[12px] flex items-center justify-between 2md:justify-center">
        <span className="block 2md:hidden text-[14px]">{name}</span>
        <span className="pr-[50%] 2md:pr-0">{title}</span>
      </span>
    </td>
  );
}

Tr.propTypes = {
  name: PropTypes.string,
  title: PropTypes.number,
};

export default Tr;
