import { useTranslation } from "react-i18next";
import { ourHotels } from "../../../components/Constants/OurHotel";
import HotelCard from "./HotelCard";
function OurHotel() {
  const { t } = useTranslation();
  return (
    <div className='w-full mb-5 ml-0 mr-0 mt-0'>
      <div className='flex flex-col w-full'>
        <div className='mb-5'>
          <div className='flex flex-col'>
            <span className='flex items-center text-[20px] md:text-[24px] font-bold dark:text-white'>
              {t("OurHotel.title")}
            </span>
            <span className='flex items-center text-[14px] md:text-[16px] text-primary-200 dark:text-primary-50'>
              {t("OurHotel.subTitle")}
            </span>
          </div>
        </div>

        <div className='grid gap-x-5 gap-y-8 auto-cols-auto grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 w-full '>
          {ourHotels.map((card) => (
            <HotelCard
              key={card.id}
              to={card.to}
              src={card.src}
              title={card.name}
              price={card.price}
              description={card.description}
              isWishlist={card.isWishlist}
              starCount={card.star}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurHotel;
