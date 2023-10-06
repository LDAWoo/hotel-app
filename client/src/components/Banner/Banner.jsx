import { useTranslation } from "react-i18next";
import Button from "../Buttons/Button";
import Search from "../Search/Search";
import Title from "../Title/Title";
function Banner() {
  const { t } = useTranslation();
  return (
    <div className='relative'>
      <div className='relative w-full bg-hotel-600'>
        <div className='w-full m-auto bg-hotel-600 lg:max-w-[var(--max-width)] mb-10 p-[10px]'>
          <div className='w-full text-white h-auto mb-2 my-auto'>
            <div className='flex w-full flex-col items-start justify-start pt-8 gap-5'>
              <div className='flex flex-col w-full'>
                <Title
                  title={t("Banner.title")}
                  extraLarge6
                  fontBold
                  nowrap={false}
                />
                <Title title={t("Banner.subTitle")} xxxl nowrap={false} />
              </div>
              <div>
                <Button
                  className='w-full h-full bg-hotel-50 pt-[10px] pb-[10px] pl-5 pr-5 duration-300 rounded-md hover:bg-hotel-200'
                  title={t("Banner.bookNow")}
                  xl
                  fontBold
                />
              </div>
            </div>
          </div>
          <div className='h-[175px] 2md:max-h-[40px]'>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
