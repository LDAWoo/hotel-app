import { useTranslation } from "react-i18next";
import Button from "../Buttons/Button";
import Search from "../Search/Search";
function Banner() {
  const { t } = useTranslation();
  return (
    <div className='relative'>
      <div className='relative w-full bg-hotel-200'>
        <div className='w-full m-auto bg-hotel-200 lg:max-w-[1100px] mb-10 p-[10px]'>
          <div className='w-full text-white h-[280px] my-auto'>
            <div className='flex w-full flex-col items-start justify-start pt-8 gap-5'>
              <div className='flex flex-col w-full'>
                <span className='text-[32px] md:text-[46px] font-bold'>
                  {t("Banner.title")}
                </span>
                <span className='text-[20px] md:text-[24px] overflow-hidden whitespace-nowrap '>
                  {t("Banner.subTitle")}
                </span>
              </div>
              <div>
                <Button
                  className='w-full h-full bg-hotel-50 pt-[10px] pb-[10px] pl-5 pr-5 duration-300 rounded-md hover:bg-hotel-200'
                  title={t("Banner.bookNow")}
                  classTitle='text-[18px] font-medium'
                />
              </div>
            </div>
          </div>
          <div className='h-[190px] 2md:max-h-[40px]'>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
