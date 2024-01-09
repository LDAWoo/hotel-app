import HeaderLeft from "../Header/HeaderLeft";
import HeaderRight from "../Header/HeaderRight";
import MobileTrigger from "./MobileTrigger";

const Header = () => {
  return (
    <div className="flex items-center justify-center bg-hotel-600 w-full">
      <header className="flex box-border items-center m-auto pt-2 pb-1 w-full bg-hotel-600 lg:max-w-[var(--max-width)] p-[10px]">
        <div className="relative flex items-center flex-1 pt-1 pb-1 pr-3 bg-hotel-600">
          <MobileTrigger />
          <HeaderLeft />
        </div>
        <div className="flex flex-row items-center justify-end">
          <HeaderRight />
        </div>
      </header>
    </div>
  );
};

export default Header;
