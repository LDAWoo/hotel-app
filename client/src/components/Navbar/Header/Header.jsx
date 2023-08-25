import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

function Header() {
    return ( 
        <div className="flex items-center flex-grow justify-center bg-hotel-200 w-full">
            <header className="flex items-center justify-center flex-1 pt-2 pl-3 pr-3 w-full lg:max-w-[1100px] bg-hotel-200 ">
                <nav className="flex items-center justify-center pt-1 pb-1 pl-2 pr-2 w-full bg-hotel-200 ">
                    <div className="flex flex-1 items-center justify-start w-full bg-hotel-200">
                        <HeaderLeft/>
                    </div>
                    <div className="flex flex-row">
                        <HeaderRight/>
                    </div>
                </nav>
            </header>
        </div>
     );
}

export default Header;