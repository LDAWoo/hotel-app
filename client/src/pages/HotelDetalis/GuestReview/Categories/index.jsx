import { useState } from "react";
import Button from "../../../../components/Buttons/Button";
import Title from "../../../../components/Title/Title";
import CategoryItem from "./CategoryItem";
import { TbArrowsMoveVertical } from "react-icons/tb";
import useRegisterWindowSizeStore from "../../../../hooks/useRegisterWindowSizeStore";
import { useTranslation } from "react-i18next";

const initialVisibleCount = 3;

const Categories = ({ data, vertical }) => {
  const { width } = useRegisterWindowSizeStore();
  const [showMore, setShowMore] = useState(true);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const {t} = useTranslation();

  const handleShowMore = () => {
    setVisibleCount(data?.categories?.length);
    setShowMore(false);
  };

  const handleShowLess = () => {
    setVisibleCount(initialVisibleCount);
    setShowMore(true);
  };

  return (
    <div className='flex flex-col gap-2 dark:text-white'>
      <Title title={t("HotelDetails.Categories.title")} fontBold xl />
      <div
        className={`grid ${
          vertical ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        }  gap-2 sm:gap-5 dark:text-white`}
      >
        {data?.categories
          .slice(0, width > 640 ? data?.categories?.length : visibleCount)
          .map((category) => (
            <CategoryItem
              key={category?.categoryId}
              title={category?.categoryName}
              rating={category?.rating}
            />
          ))}
      </div>

      {showMore && (
        <div className='flex flex-row items-center w-full sm:hidden'>
          <Button
            className='text-hotel-100 hover:underline duration-200 mt-1'
            title={t("HotelDetails.Categories.showMore")}
            icon={TbArrowsMoveVertical}
            titlePosition='before'
            size={16}
            xl
            fontMedium
            onClick={handleShowMore}
          />
        </div>
      )}

      {!showMore && (
        <div className='flex flex-row items-center w-full sm:hidden'>
          <Button
            className='text-hotel-100 hover:underline duration-200 mt-1'
            title={t("HotelDetails.Categories.showLess")}
            icon={TbArrowsMoveVertical}
            titlePosition='before'
            size={16}
            xl
            fontMedium
            onClick={handleShowLess}
          />
        </div>
      )}
    </div>
  );
};

export default Categories;
