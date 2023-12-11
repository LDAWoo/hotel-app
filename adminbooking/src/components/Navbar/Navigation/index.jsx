import { useCallback, useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink, useLocation } from "react-router-dom";
import useRegisterMobileTrigger from "../../../hooks/Header/useRegisterMobileTrigger";
import useRegisterWindowSizeStore from "../../../hooks/useRegisterWindowSizeStore";
import Button from "../../Buttons/Button";
import Title from "../../Title/Title";
import UserPrimary from "../../Header/HeaderLeft/UserPrimary";

const items = [
  {
    menu: [
      {
        title: "Group homepage",
        url: "/",
      },
      {
        title: "Reservations",
        url: "/reservations",
      },
      {
        title: "Reviews",
        url: "/reviews",
      },
      {
        title: "Finance",
        url: "/finance",
      },
      {
        title: "Bulk editing",
        url: "/bulk-editing",
      },
      {
        title: "Group Opportunity Center",
        url: "/group-opportunity-center",
      },
      {
        title: "Analytics",
        menu: [
          {
            title: "Market insights",
            url: "/market-insights",
          },
          {
            title: "Pace report",
            url: "/pace-report",
          },
          {
            title: "Sales statistics",
            url: "/sales-stats",
          },
          {
            title: "Bookwindow information",
            url: "/book-window-info",
          },
        ],
      },
    ],
  },
];

const Navigation = () => {
  const location = useLocation();

  const pathName = location.pathname;
  const { onClose, isOpen } = useRegisterMobileTrigger();
  const [maxVisibleItems, setMaxVisibleItems] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [dropdownMore, setDropdownMore] = useState({});
  const { width } = useRegisterWindowSizeStore();

  const menuRef = useRef();

  useEffect(() => {
    const calculateMaxVisibleItems = () => {
      if (width >= 900) {
        if (menuRef.current) {
          const containerWidth = menuRef.current.clientWidth;
          const itemWidth = 140;
          const calculatedMaxVisibleItems = Math.floor(containerWidth / itemWidth);
          setMaxVisibleItems(calculatedMaxVisibleItems);
        }
      } else {
        setMaxVisibleItems(items[0]?.menu?.length);
      }
    };

    calculateMaxVisibleItems();
  }, [width, maxVisibleItems]);

  const handleToggleDropdown = useCallback(
    (index) => {
      setDropdownOpen((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    },
    [setDropdownOpen]
  );

  const handleToggleDropdownMore = useCallback(
    (index) => {
      setDropdownMore((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    },
    [setDropdownMore]
  );

  const handleOutsideDropdownMenu = useCallback(
    (index) => {
      if (dropdownOpen[index]) {
        setDropdownOpen((prev) => ({ ...prev, [index]: false }));
      }
    },
    [dropdownOpen, setDropdownOpen]
  );

  const handleOutside = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={handleOutside} key={1} display="contents">
      <div className={`fixed top-0 bottom-0 left-0 right-[56px] z-[300] bg-white shadow-[2px_0_14px_2px_rgba(0,0,0,.05)] 2md:relative 2md:bg-transparent ${isOpen ? "w-auto translate-x-0" : "-translate-x-full 2md:translate-x-0"} transition-transform duration-500 2md:w-full`}>
        <div className="relative w-full p-0 m-auto">
          <div className="block 2md:hidden">
            <UserPrimary />
          </div>
          <ul className="list-none flex flex-col 2md:flex-row w-full" ref={menuRef}>
            {items.map((item, index) => (
              <div key={index} className="flex flex-col 2md:flex-row w-full">
                {item?.menu.slice(0, maxVisibleItems).map((x, index) => (
                  <li key={index} className={`${pathName === x.url ? "2md:border-hotel-100 bg-gray-100 2md:bg-hotel-200" : dropdownOpen[index] ? "border-hotel-25/50 2md:bg-hotel-200" : "2md:border-transparent hover:bg-gray-100 hover:border-hotel-25/50 2md:hover:bg-hotel-200 duration-200"} border-b-[1px] 2md:border-b-[4px]`}>
                    {x.url ? (
                      <NavLink onClick={() => onClose()} to={x.url} className="flex flex-col h-full text-left 2md:text-center pt-3 pb-3 pr-4 pl-4 text-primary-700 2md:text-white">
                        <Title title={x.title} xl />
                      </NavLink>
                    ) : (
                      <>
                        <OutsideClickHandler onOutsideClick={() => handleOutsideDropdownMenu(index)}>
                          <div className="relative w-full h-full">
                            <Button onClick={() => handleToggleDropdown(index)} title={x.title} icon={IoIosArrowDown} titlePosition="before" xl classIcon={`${dropdownOpen[index] ? "rotate-180 2md:rotate-0" : isOpen ? "" : "hidden 2md:block rotate-0"}`} classTitle="flex-1 text-left" className="w-full justify-between flex h-full pt-3 pb-3 pr-0 pl-2 2md:pl-4 text-primary-700 2md:text-white" />
                            {dropdownOpen[index] && (
                              <div className="relative 2md:absolute left-auto right-0 w-full 2md:w-[300px] 2md:shadow-[0_2px_8px_0_rgba(0,0,0,0.16)] top-[calc(100%_+_5px)] block bg-white z-[1] pt-0 pb-0 2md:pt-2 2md:pb-2">
                                {x.menu.map((m, index) =>
                                  m.url ? (
                                    <NavLink to={m.url} key={index} className="flex text-primary-100 items-center w-full hover:bg-gray-100 flex-row gap-2 pt-3 pb-3 2md:pt-2 2md:pb-2 pr-4 pl-4 border-b-[1px] 2md:border-b-[0px]">
                                      <Title title={m.title} xxl />
                                    </NavLink>
                                  ) : (
                                    <Title key={index} title={m.title} fontBold xl className="text-primary-700 pt-2 pb-2 pr-4 pl-4 border-t w-full flex mt-2" />
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        </OutsideClickHandler>
                      </>
                    )}
                  </li>
                ))}
                {item.menu.length > maxVisibleItems && (
                  <li className={`relative ${showMore ? "border-hotel-25/50 bg-hotel-200" : "hover:border-hotel-25/50 hover:bg-hotel-200 border-transparent"} duration-200 border-b-[4px]`}>
                    <OutsideClickHandler onOutsideClick={() => setShowMore(false)}>
                      <Button onClick={() => setShowMore(!showMore)} title="More" icon={IoIosArrowDown} titlePosition="before" xl className="w-full justify-between flex h-full pt-3 pb-3 pr-0 pl-4 text-white" />
                      {showMore && (
                        <div className="absolute left-auto right-0 w-[300px] shadow-[0_2px_8px_0_rgba(0,0,0,0.16)] top-[calc(100%_+_5px)] block bg-white z-[1] pt-2 pb-2">
                          {item.menu.slice(maxVisibleItems).map((more, index) =>
                            more.url ? (
                              <NavLink to={more.url} key={index} className="flex text-primary-100 items-center w-full hover:bg-gray-100 flex-row gap-2 pt-2 pb-2 pr-4 pl-4">
                                <Title title={more.title} xxl />
                              </NavLink>
                            ) : (
                              <OutsideClickHandler onOutsideClick={(prev) => setDropdownMore({ ...prev, [index]: false })} key={index}>
                                <div className="relative flex items-center hover:bg-gray-100 duration-200 cursor-pointer ">
                                  <Button onClick={() => handleToggleDropdownMore(index)} title={more.title} xxl icon={IoIosArrowForward} titlePosition="before" classTitle="flex-1 text-left" className="w-full p-2" />
                                  {dropdownMore[index] && (
                                    <div className="absolute left-auto right-full w-[300px] shadow-[0_2px_8px_0_rgba(0,0,0,0.16)] top-0 block bg-white z-[1] pt-2 pb-2">
                                      {more.menu.map((m, index) =>
                                        m.url ? (
                                          <NavLink to={m.url} key={index} className="flex text-primary-100 items-center w-full hover:bg-gray-100 flex-row gap-2 pt-2 pb-2 pr-4 pl-4">
                                            <Title title={m.title} xxl />
                                          </NavLink>
                                        ) : (
                                          <Title key={index} title={m.title} fontBold xl className="text-primary-700 pt-2 pb-2 pr-4 pl-4 border-t w-full flex mt-2" />
                                        )
                                      )}
                                    </div>
                                  )}
                                </div>
                              </OutsideClickHandler>
                            )
                          )}
                        </div>
                      )}
                    </OutsideClickHandler>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Navigation;
