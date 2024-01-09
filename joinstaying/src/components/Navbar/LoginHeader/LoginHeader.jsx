import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./headerRight/HeaderRight";

function LoginHeader() {
  return (
    <div className="flex items-center bg-hotel-600 w-full">
      <header className="w-full">
        <nav className="flex box-border items-center m-auto pt-1 pb-1 w-full bg-hotel-600 lg:max-w-[var(--max-width)] p-[10px]">
          <div className="flex-1 pt-1 pb-1 pr-3 bg-hotel-600">
            <HeaderLeft />
          </div>
          <div className="flex items-end">
            <HeaderRight />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default LoginHeader;
