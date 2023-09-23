import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "../Icon";
import Dropdown from "../Dropdown";

const navigation = [
  {
    title: "Home",
    icon: "home",
    url: "/",
  },
  {
    title: "Products",
    slug: "products",
    icon: "diamond",
    add: true,
    dropdown: [
      {
        title: "Dashboard",
        url: "/products/dashboard",
      },
      {
        title: "Drafts",
        url: "/products/drafts",
        counter: "2",
        colorCounter: "#FFBC99",
      },
      {
        title: "Released",
        url: "/products/released",
      },
      {
        title: "Comments",
        url: "/products/comments",
      },
      {
        title: "Scheduled",
        url: "/products/scheduled",
        counter: "8",
        colorCounter: "#B5E4CA",
      },
    ],
  },
  {
    title: "Customers",
    slug: "customers",
    icon: "profile-circle",
    dropdown: [
      {
        title: "Overview",
        url: "/customers/overview",
      },
      {
        title: "Customer list",
        url: "/customers/customer-list",
      },
    ],
  },
  {
    title: "Shop",
    icon: "store",
    url: "/shop",
  },
  {
    title: "Income",
    slug: "income",
    icon: "pie-chart",
    dropdown: [
      {
        title: "Earning",
        url: "/income/earning",
      },
      {
        title: "Refunds",
        url: "/income/refunds",
      },
      {
        title: "Payouts",
        url: "/income/payouts",
      },
      {
        title: "Statements",
        url: "/income/statements",
      },
    ],
  },
  {
    title: "Promote",
    icon: "promotion",
    url: "/promote",
  },
];

function Sidebar({ className, onClose }) {
  const [visibleHelp, setVisibleHelp] = useState(false);
  const [visible, setVisible] = useState(false);

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className={`fixed top-0 left-0 bottom-0 flex flex-col w-full items-stretch sm:w-[75px] sm:z-50 p-[12px] sm:items-center xl:w-[300px] xl:p-[24px] overflow-auto no-scrollbar bg-secondary-n  dark:bg-secondary-n7 md:shadow-[4px_0px_32px_rgba(17,19,21,0.05)] ${visible ? "sm:w-full z-50 md:w-[300px] md:items-stretch " : "hidden sm:flex"} ${className}`} onClick={onClose}>
      <button className={`absolute top-[5px] right-[0px] w-[48px] h-[48px] text-secondary-n7 dark:text-secondary-n1 ${visible ? "md:block" : "hidden"}`} onClick={onClose}>
        <Icon name="close" size="24" />
      </button>

      {/* startLogo */}
      <div className="mt-2 mb-2 font-bold">Staying</div>
      {/* endLogo */}

      {/* startMenu */}
      <div className="flex flex-col mb-auto w-full">
        {navigation.map((item, index) =>
          item.url ? (
            <NavLink
              key={index}
              to={item.url}
              className={`flex items-center w-full whitespace-nowrap font-bold text-[0] xl:text-[15px] p-[12px] xl:gap-2 rounded-xl transition-shadow ${
                pathname === item.url ? "text-secondary-n7 dark:text-secondary-n1 bg-secondary-n3 dark:bg-secondary-n6 shadow-[inset_0px_-2px_1px_rgba(0,0,0,0.05),inset_0px_1px_1px_rgba(255,255,255,1)]" : "text-secondary-n4 hover:text-secondary-n5 dark:hover:text-secondary-n2"
              }
              ${visible ? "w-full md:w-full md:text-[15px] gap-3 text-[15px]" : ""}
              `}
            >
              <Icon name={item.icon} size="24" />
              {item.title}
            </NavLink>
          ) : (
            <Dropdown key={index} item={item} visibleSidebar={visible} setValue={setVisible} onClose={onClose} />
          )
        )}
      </div>
      {/* endMenu */}
      <button className="xl:hidden inline-block w-[48px] h-[48px] text-secondary-n4" onClick={() => setVisible(!visible)}>
        <Icon name="arrow-right" size="24" />
        {/* <Icon name="close" size="24" /> */}
      </button>
    </div>
  );
}

export default Sidebar;
