import Language from "./Language/Language";
import Search from "./Search";
import User from "./User";

const HeaderRight = () => {
  return (
    <div className="flex flex-row w-full items-center gap-5">
      <Search />
      <Language />
      <User />
    </div>
  );
};

export default HeaderRight;
