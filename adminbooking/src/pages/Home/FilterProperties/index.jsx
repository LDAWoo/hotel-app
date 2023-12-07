import { CiSearch } from "react-icons/ci";
import Icon from "../../../components/Icon/Icon";
function FilterProperties() {
  return (
    <div className="mb-4">
      <div className="relative flex max-w-[320px]">
        <input
          // onFocus={handleFocus}
          type="text"
          className={`outline-none border-[1px] focus:border-[2px] focus:border-hotel-75 border-primary-400 rounded-[2px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)] w-full h-9 box-border pl-[8px] pr-9 pt-0 pb-0 text-[14px]  bg-white text-primary-700 placeholder:text-primary-100`}
          placeholder="Filter by property ID, name or location"
          autoComplete="off"
          // value={search}
          // onChange={handleChange}
        />
        <Icon classIcon="absolute top-[8px] right-2 text-primary-700" size={22} icon={CiSearch} />
      </div>
    </div>
  );
}

export default FilterProperties;
