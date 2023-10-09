import { useState } from "react";
import Button from "../../../../components/Buttons/Button";
import Title from "../../../../components/Title/Title";
import CategoryItem from "./CategoryItem";
import { TbArrowsMoveVertical } from "react-icons/tb";
import useRegisterWindowSizeStore from "../../../../hooks/useRegisterWindowSizeStore";

const initialVisibleCount = 3;

const categoriesData = [
  { id: 1, title: "Staff", rating: 4.8 },
  { id: 2, title: "Facilities", rating: 2.8 },
  { id: 3, title: "Cleanliness", rating: 1.8 },
  { id: 4, title: "Comfort", rating: 3.8 },
  { id: 5, title: "Value for Money", rating: 0.8 },
  { id: 6, title: "Location", rating: 5 },
];

const Categories = ({ vertical }) => {
  const { width } = useRegisterWindowSizeStore();
  const [showMore, setShowMore] = useState(true);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const handleShowMore = () => {
    setVisibleCount(categoriesData.length);
    setShowMore(false);
  };

  const handleShowLess = () => {
    setVisibleCount(initialVisibleCount);
    setShowMore(true);
  };

  return (
    <div className='flex flex-col gap-2 dark:text-white'>
      <Title title='Categories:' fontBold xl />
      <div
        className={`grid ${
          vertical ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        }  gap-2 sm:gap-5 dark:text-white`}
      >
        {categoriesData
          .slice(0, width > 640 ? categoriesData.length : visibleCount)
          .map((category) => (
            <CategoryItem
              key={category.id}
              title={category.title}
              rating={category.rating}
            />
          ))}
      </div>

      {showMore && (
        <div className='flex flex-row items-center w-auto sm:hidden'>
          <Button
            className='text-hotel-100 hover:underline duration-200 pt-2 pb-2 pr-0 pl-2 w-auto -translate-x-[12%]'
            title='Show more'
            icon={TbArrowsMoveVertical}
            titlePosition='before'
            size={16}
            xl
            fontBold
            onClick={handleShowMore}
          />
        </div>
      )}

      {!showMore && (
        <div className='flex flex-row items-center w-auto sm:hidden'>
          <Button
            className='text-hotel-100 hover:underline duration-200 pt-2 pb-2 pr-0 pl-2 w-auto -translate-x-[12%]'
            title='Show less'
            icon={TbArrowsMoveVertical}
            titlePosition='before'
            size={16}
            xl
            fontBold
            onClick={handleShowLess}
          />
        </div>
      )}
    </div>
  );
};

export default Categories;
