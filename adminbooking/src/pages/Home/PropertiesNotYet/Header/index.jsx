import { IoIosArrowUp } from "react-icons/io";
import Button from "../../../../components/Buttons/Button";
import Title from "../../../../components/Title/Title";
function Header() {
  return (
    <div className="flex flex-col 2md:flex-row justify-between gap-3 items-start 2md:items-center box-border w-full">
      <Title title="Properties not yet on Staying.com (7)" fontBold xxxl />
      <div>
        <Button title="Hide section" icon={IoIosArrowUp} xl className="hover:underline" />
      </div>
    </div>
  );
}

export default Header;
