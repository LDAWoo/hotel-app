import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import OutsideClickHandler from "react-outside-click-handler";
import useRegisterWindowSizeStore from "../../../../hooks/useRegisterWindowSizeStore";
import Button from "../../../Buttons/Button";
const Search = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const { width } = useRegisterWindowSizeStore();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFocus = () => {
    setActive(true);
  };

  const handleShowSearch = () => {
    setShow(true);
  };

  const handleUnShowSearch = () => {
    setShow(false);
  };

  const handleClearSearchText = () => {
    if (search !== "") {
      setSearch("");
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    if (show) {
      width <= 900 ? setShow(true) : setShow(false);
    }

    if (active) {
      width >= 900 ? setActive(true) : setActive(false);
    }
  }, [width, show, active]);

  return (
    <OutsideClickHandler onOutsideClick={() => setActive(false)}>
      <Button className="flex w-10 h-10 text-white 2md:hidden" size={24} icon={CiSearch} onClick={handleShowSearch} />
      <div className={`fixed top-0 left-0 right-0 bottom-0 w-full ${show ? "block" : active ? "2md:w-[360px]" : "2md:w-[272px] hidden 2md:block"} 2md:relative transition-all duration-500 ease-out`}>
        <div className={`${show ? "bg-hotel-600 p-[8px] w-full flex items-center relative animate" : ""}`}>
          <input
            onFocus={handleFocus}
            type="text"
            className={`outline-none border-none rounded-[2px] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)] w-full h-10 box-border pl-[8px] pr-[8px] pt-0 pb-0 text-[14px]  ${show ? "bg-white text-primary-700 placeholder:text-primary-50" : active ? "bg-white text-primary-700" : " text-white bg-[hsla(0,0%,100%,0.07)]"} placeholder:text-white`}
            placeholder="Search pages and reservations"
            autoComplete="off"
            value={search}
            onChange={handleChange}
          />
          {!show && <>{active ? <Button className="absolute top-0 right-0 w-10 h-10 text-primary-50 z-10 duration-1000 bg-transparent" size={20} icon={IoMdClose} onClick={handleClearSearchText} /> : <Button className="flex absolute top-0 right-0 w-10 h-10 text-white" size={20} icon={CiSearch} />}</>}
          {show && width <= 900 && (
            <>
              <Button className="flex absolute top-2 right-16 w-10 h-10 text-primary-50 duration-1000 bg-transparent z-10" size={20} icon={IoMdClose} onClick={handleClearSearchText} />
              <Button xl className="w-auto text-white" title="Cancel" onClick={handleUnShowSearch} />
            </>
          )}
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Search;
