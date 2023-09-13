import { useEffect, useRef, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";
import useRegisterToolTipCategoriesMore from "../../../hooks/useRegisterToolTipCategoriesMore";
import Button from "../../Buttons/Button";
import { categories } from "../../Constants/Categories";
import TitleComponent from "../../TitleComponent/TitleComponent";
import RegisterToolTip from "../../ToolTip/RegisterToolTip/RegisterToolTip";
import MoreMenu from "./MoreMenu";

function Categories() {
  const [maxVisibleItems, setMaxVisibleItems] = useState(0);
  const location = useLocation();
  const pathName = location.pathname;
  const categoriesRef = useRef();
  const { onOpen } = useRegisterToolTipCategoriesMore();
  useEffect(() => {
    const calculateMaxVisibleItems = () => {
      if (categoriesRef.current) {
        const containerWidth = categoriesRef.current.clientWidth;
        const itemWidth = 260;
        const calculatedMaxVisibleItems = Math.floor(
          containerWidth / itemWidth,
        );
        setMaxVisibleItems(calculatedMaxVisibleItems);
      }
    };
    calculateMaxVisibleItems();

    window.addEventListener("resize", calculateMaxVisibleItems);

    return () => {
      window.removeEventListener("resize", calculateMaxVisibleItems);
    };
  }, []);

  const sortedCategories = categories.slice().sort((a, b) => {
    if (a.to === pathName) return -1;
    if (b.to === pathName) return 1;
    return 0;
  });

  const handleShowCategoriesMore = () => {
    onOpen();
  };

  return (
    <div className='flex items-center justify-center bg-hotel-200 w-full'>
      <div
        className='flex box-border m-auto pt-1 pb-1 w-full bg-hotel-200 lg:max-w-[var(--max-width)] p-[10px]'
        ref={categoriesRef}
      >
        <div className='flex w-full gap-2'>
          {sortedCategories.slice(0, maxVisibleItems).map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={`flex items-center justify-center w-auto h-auto rounded-[24px]
              ${
                pathName === item.to
                  ? "border-[2px] border-hotel-50 bg-hotel-100"
                  : "hover:bg-hotel-100"
              }
              `}
            >
              <Button
                className='w-full p-[4px] vsm:p-[5px] sm:p-[6px] text-white'
                title={item.translationKey}
                icon={item?.icon}
                size={18}
                xxl
                fontMedium
              />
            </Link>
          ))}
          {sortedCategories.length > maxVisibleItems && (
            <div className='flex items-center justify-center w-auto h-auto rounded-[24px] hover:bg-hotel-100'>
              <Button
                className='w-full p-[4px] vsm:p-[5px] sm:p-[6px] text-white'
                title='More'
                size={18}
                icon={SlOptionsVertical}
                iconPosition='right'
                active
                xxl
                fontMedium
                onClick={handleShowCategoriesMore}
              />
              <RegisterToolTip
                render={
                  <MoreMenu data={sortedCategories.slice(maxVisibleItems)} />
                }
                width={240}
                component={
                  <TitleComponent title='More' icon={SlOptionsVertical} />
                }
                userRegisterToolTip={useRegisterToolTipCategoriesMore}
                zIndex='z-[999]'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
