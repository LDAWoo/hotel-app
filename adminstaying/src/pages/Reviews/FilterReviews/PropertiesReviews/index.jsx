import Title from "../../../../components/Title/Title";
import InputStaying from "../../../../components/Staying/Input";
import Icon from "../../../../components/Icon/Icon";
import { CiSearch } from "react-icons/ci";
function PropertiesReviews() {
  return (
    <div className="flex flex-col gap-2 w-full 2md:w-auto">
      <Title title="Filter by one or more property IDs" xl fontMedium />
      <div className="relative flex w-full 2md:w-[320px]">
        <InputStaying type="text" placeHolder="Enter one on more properties Id" className="h-[37px]" />
        <Icon classIcon="absolute top-[8px] right-2 text-primary-700" size={22} icon={CiSearch} />
      </div>
    </div>
  );
}

export default PropertiesReviews;
