import Title from "../../../Title/Title";

const UserPrimary = () => {
  return (
    <div className="flex flex-row gap-2 relative ml-0 2md:ml-4 pt-4 2md:pt-0 pb-4 2md:pb-0 pr-4 2md:pr-0 pl-4 bg-hotel-600 text-white before:content-[''] before:top-[50%] before:w-[1px] before:absolute before:left-0 before:h-[16px] before:translate-y-[-30%] 2md:before:bg-transparent 2md:before:bg-white">
      <Title title="Vu Lee" xl />
      <div className="bg-success-50 rounded-sm">
        <span className="text-[12px] ml-1 mr-1">
          <span>Primary account</span>
        </span>
      </div>
    </div>
  );
};

export default UserPrimary;
