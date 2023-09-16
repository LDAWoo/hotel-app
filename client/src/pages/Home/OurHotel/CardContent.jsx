import { memo } from "react";
import { t } from "i18next";
import Star from "../../../components/Star/Start";
import Title from "../../../components/Title/Title";
import PropsTypes from "prop-types";

function CardContent({ data }) {
  return (
    <div className='w-full pr-2 pb-2 pl-2 pt-1'>
      <div className='flex items-center'>
        <div className='flex-1 '>
          <Title
            title={data?.title}
            titleCustom='text-[15px] sm:text-[16px]'
            fontBold
            colorTitle='dark:text-white'
          />
        </div>
        {data?.rating > 0 && <Star starCount={data?.rating} />}
      </div>
      {data?.description && (
        <div className='flex items-center mb-2'>
          <Title
            title={data?.description}
            titleCustom='text-[14px] sm:text-[15px]'
            colorTitle='text-primary-100 dark:text-primary-50'
          />
        </div>
      )}
      {data?.nightAndAdultAndChild && <div>{data?.nightAndAdultAndChild}</div>}
      {data?.price && (
        <div className='flex items-center gap-1'>
          <Title
            title={data?.price}
            fontBold
            titleCustom='text-[15px] sm:text-[16px]'
            colorTitle='dark:text-white'
          />
          <Title
            title='VND'
            titleCustom='text-[15px] sm:text-[16px]'
            fontBold
            colorTitle='dark:text-white'
          />
          <Title
            title={t("OurHotel.night")}
            titleCustom='text-[15px] sm:text-[16px]'
            colorTitle='dark:text-primary-50'
          />
        </div>
      )}
    </div>
  );
}

CardContent.propTypes = {
  data: PropsTypes.object,
};

export default memo(CardContent);
