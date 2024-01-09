import UserPrimary from "./UserPrimary";

const HeaderLeft = () => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="text-white font-bold text-[24px]">Staying.com</div>
      <div className="hidden 2md:block">
        <UserPrimary />
      </div>
    </div>
  );
};

export default HeaderLeft;
