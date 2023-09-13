import { useTranslation } from "react-i18next";
import { ourHotels } from "../../../components/Constants/OurHotel";
import HotelCard from "./HotelCard";
import Title from "../../../components/Title/Title";
function OurHotel() {
  const { t } = useTranslation();
  return (
    <div className='w-full mb-5 ml-0 mr-0 mt-0'>
      <div className='flex flex-col w-full'>
        <div className='mb-5'>
          <div className='flex flex-col'>
            <Title
              title={t("OurHotel.title")}
              extraLarge4
              fontBold
              colorTitle='dark:text-white'
              nowrap={false}
            />
            <Title
              title={t("OurHotel.subTitle")}
              xxl
              colorTitle='text-primary-100 dark:text-primary-50'
              nowrap={false}
            />
          </div>
        </div>

        <div className='grid gap-x-3 gap-y-3 auto-cols-auto grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 w-full '>
          {ourHotels.map((card) => (
            <HotelCard
              key={card.id}
              to={card.to}
              images={card?.images}
              title={card.name}
              price={card.price}
              description={card.description}
              isWishlist={card?.isWishlist}
              starCount={card.star}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurHotel;
