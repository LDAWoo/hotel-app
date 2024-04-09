import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from "../../components/Buttons/Button";
import Image from "../../components/Image/Image";
import Title from "../../components/Title/Title";
import routesConfig from '../../configs/routesConfig';

const Successfully = () => {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate(routesConfig.home)
  }

  return (
    <div className='w-full flex-1 flex'>
      <div className='w-full m-auto lg:max-w-[var(--max-width)] mt-10 mb-10 p-[10px] bg-transparent'>
        <div className='flex flex-col w-full'>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-center text-center">
              <Title title={t("BookingSuccess.title")} fontBold extraLarge6 nowrap={false}/>
              <Title title={t("BookingSuccess.subTitle")} fontMedium extraLarge5 nowrap={false}/>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-[200px] h-[200px] 2md:min-w-[250px] 2md:min-h-[250px]">
                  <Image src="/images/hotel-floor.png" className="min-w-full min-h-full"/>
                </div>
            </div>

            <div className="flex w-auto justify-center items-center">
                <div>
                  <Button title={t("BookingSuccess.backToHome")} background className="p-[8px_16px] rounded-sm" xxl fontMedium onClick={handleBackToHome}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Successfully.propTypes = {};

export default Successfully;
