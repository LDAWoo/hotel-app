import { useState } from "react";
import { NavLink } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { IoIosLogOut, IoIosPhonePortrait } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import { PiUserCircleLight } from "react-icons/pi";
import Title from "../../../Title/Title";
import Icon from "../../../Icon/Icon";

const items = [
  {
    menu: [
      {
        title: "My device",
        url: "mydevice",
        icon: IoIosPhonePortrait,
      },
      {
        title: "Sign out",
        url: "/sign-out",
        icon: IoIosLogOut,
      },
    ],
  },
  {
    menu: [{ title: "Add property to your account" }, { title: "Add new property", url: "/add", icon: IoAddCircleOutline }],
  },
];

const User = () => {
  const [visible, setVisible] = useState(false);

  const handleShowDropDownUser = () => {
    setVisible(!visible);
  };

  const handleOutsideClick = () => {
    setVisible(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClick}>
      <div className="relative text-white cursor-pointer">
        <div className={`border-[3px] ${visible ? "border-hotel-75" : " border-transparent"} duration-300 rounded-full`} onClick={handleShowDropDownUser}>
          <Icon icon={PiUserCircleLight} size={30} />
        </div>
        {visible && (
          <div className="fixed 2md:absolute left-[8px] 2md:left-auto right-[8px] 2md:top-[calc(100%_+_2px)] 2md:-right-[8px] rounded-sm w-auto 2md:w-[270px] pt-2 pb-2 bg-white shadow-[0_2px_2px_0px_rgba(0,0,0,0.27)]">
            {items.map((item, index) => (
              <div key={index} className="">
                {item.menu.map((x, index) =>
                  x.url ? (
                    <NavLink to={x.url} key={index} className="flex text-primary-100 items-center w-full hover:bg-gray-50 flex-row gap-2 pt-2 pb-2 pr-4 pl-4">
                      {x.icon && <Icon icon={x.icon} size="24" />}
                      <Title title={x.title} xxl className="" />
                    </NavLink>
                  ) : (
                    <Title key={index} title={x.title} fontBold xl className="text-primary-700 pt-2 pb-2 pr-4 pl-4 border-t w-full flex mt-2" />
                  )
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default User;
