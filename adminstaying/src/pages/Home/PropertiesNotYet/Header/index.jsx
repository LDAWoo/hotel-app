import PropTypes from "prop-types";
import { IoIosArrowUp } from "react-icons/io";
import Button from "../../../../components/Buttons/Button";
import Title from "../../../../components/Title/Title";

function Header({ show, setShow }) {
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="flex flex-col 2md:flex-row justify-between gap-3 items-start 2md:items-center box-border w-full">
      <Title title="Properties not yet on Staying.com (7)" fontBold xxxl />
      <div>
        <Button onClick={handleClick} title={`${show ? "Hide section" : "Show section"}`} classButton="ml-0 mr-0" icon={IoIosArrowUp} classIcon={`${show ? "" : "rotate-180"} translate-y-[1px]`} xl className="hover:underline border-[3px] duration-200 border-transparent focus:border-hotel-75/50" />
      </div>
    </div>
  );
}

Header.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default Header;
