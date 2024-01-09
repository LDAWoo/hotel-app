import { useNavigate } from "react-router-dom";
import Button from "../../../components/Buttons/Button";
import Image from "../../../components/Image/Image";
import Title from "../../../components/Title/Title";
import useRegisterFeedBack from "../../../hooks/JoinStaying/FeedBackHost/useRegisterFeedBack";
import ButtonContinueHost from "../ButtonContinueHost";
import routesConfig from "../../../configs/routesConfig";

const FeedBackHost = () => {
  const navigate = useNavigate();

  const { valueFeedBack } = useRegisterFeedBack();

  const handleChange = () => {
    navigate(routesConfig.becomeAHostCategory);
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostAddRess);
  };
  return (
    <div>
      <div className='mx-auto w-[90%] sm:w-[80%] md:w-[70%] 2md:w-[60%] lg:w-[50%] p-8 bg-white border dark:border-primary-500 dark:bg-primary-700 mt-5'>
        <div className='flex flex-col items-center text-center gap-5 w-full'>
          <Title title="You're listing?" colorTitle='dark:text-white' />
          <div className='w-[80px] h-[80px]'>
            <Image
              src='/images/hotel.png'
              className='w-full h-full object-cover'
            />
          </div>

          <Title
            title={valueFeedBack}
            fontBold
            extraLarge6
            nowrap={false}
            colorTitle='dark:text-white'
          />
          <Title
            title='Dose this sound like your property?'
            xl
            nowrap={false}
            colorTitle='dark:text-primary-50'
          />
          <ButtonContinueHost onClick={handleContinue} />
          <Button
            title='No, I need to make a change'
            border
            xl
            className='w-full pt-2 pb-2 justify-center'
            nowrap={false}
            onClick={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FeedBackHost;
