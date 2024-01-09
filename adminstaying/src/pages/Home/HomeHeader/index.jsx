import Title from "../../../components/Title/Title";
import Button from "../../../components/Buttons/Button";

function HomeHeader() {
  return (
    <div className="flex flex-col 2md:flex-row items-start 2md:items-center gap-3 justify-between pb-4 pt-6 relative">
      <Title title="Group homepage" fontBold extraLarge6 nowrap={false} />
      <div className="w-full 2md:w-auto">
        <Button title="Add new property" xl fontMedium background classButton="justify-center" className=" pt-[6px] pb-[6px] pr-4 pl-4" />
      </div>
    </div>
  );
}

export default HomeHeader;
