import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../components/Buttons/Button";
import routesConfig from "../../../configs/routesConfig";
import { useTranslation } from "react-i18next";

const PageResults = ({ data, dataHotel }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = data?.pageable?.pageSize;

  const firstItemIndex = (currentPage - 1) * itemsPerPage + 1;

  const lastItemIndex = firstItemIndex + dataHotel?.length - 1;

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      const searchParams = new URLSearchParams(location.search);
      searchParams.delete("offset");
      searchParams.set("offset", page);
      navigate(routesConfig.searchResults + "?" + searchParams.toString());
    }
  };

  useEffect(() => {
    setCurrentPage(data?.pageable?.pageNumber + 1);
  }, [data]);

  return (
    <div className='flex flex-row items-center justify-between border border-gray-200 rounded-md overflow-hidden'>
      <div className='flex flex-row items-center gap-1'>
        <div>
          <Button
            icon={MdKeyboardArrowLeft}
            size={24}
            className={`p-2 hover:bg-hotel-25 rounded-sm ${
              currentPage === 1
                ? "bg-transparent hover:bg-transparent text-gray-500"
                : "text-hotel-50"
            }`}
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
          />
        </div>
        <div className='flex flex-row items-center gap-2'>
          {Array.from({ length: data?.totalPage }).map((_, index) => (
            <div key={index}>
              <Button
                onClick={() => handlePageClick(index + 1)}
                title={index + 1}
                className={`pt-[2px] pb-[2px] pr-2 pl-2 rounded-[4px] border text-[14px] ${
                  currentPage === index + 1
                    ? " border-black cursor-default"
                    : "hover:bg-hotel-25 rounded-sm text-hotel-50 border-transparent"
                }`}
              />
            </div>
          ))}
        </div>

        <div>
          <Button
            icon={MdKeyboardArrowRight}
            size={24}
            className={`p-2 hover:bg-hotel-25 rounded-sm ${
              currentPage === data?.totalPage
                ? "bg-transparent hover:bg-transparent text-gray-500"
                : "text-hotel-50"
            }`}
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === data?.totalPage}
          />
        </div>
      </div>
      <div className='flex flex-row items-center gap-1 text-[14px] mr-4'>
        <span>{t("SearchResults.showing")}</span>
        <span>{firstItemIndex}</span>
        <span>–</span>
        <span>{lastItemIndex}</span>
      </div>
    </div>
  );
};

PageResults.propTypes = {
  data: PropTypes.object,
  dataHotel: PropTypes.array,
};

export default PageResults;
