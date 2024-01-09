import { CiSearch } from "react-icons/ci";
import Icon from "../../../components/Icon/Icon";
import InputStaying from "../../../components/Staying/Input";

function FilterProperties() {
  return (
    <div className="mb-4">
      <div className="relative flex max-w-[320px]">
        <InputStaying type="text" placeholder="Filter by property ID, name or location" />
        <Icon classIcon="absolute top-[8px] right-2 text-primary-700" size={22} icon={CiSearch} />
      </div>
    </div>
  );
}

export default FilterProperties;
