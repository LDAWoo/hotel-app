import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center bg-hotel-600 w-full">
      <header className="flex w-full">
        <nav className="flex items-center m-auto pt-0 pb-0 w-full bg-hotel-600 lg:max-w-[var(--max-width)] p-[10px]">
          <Navigation />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
