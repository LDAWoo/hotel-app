import Search from "../Search";

function Header({ onOpen }) {
  return (
    <header className="fixed left-0 top-0 right-0 z-10 flex items-center p-[16px_24px_16px_16px] bg-secondary-n shadow-[4px_10px_32px_0px_rgba(17,19,21,0.05)] dark:bg-secondary-n7 dark:shadow-[1px_0px_0px_0px_rgba(17,19,21,1)] sm:left-[96px] xl:left-[300px] xl:pt-[16px] xl:pb-[24px]">
      <button className="" onClick={onOpen}></button>
      <Search />
    </header>
  );
}

export default Header;
