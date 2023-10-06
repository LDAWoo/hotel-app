import Button from "../../../components/Buttons/Button";
import Image from "../../../components/Image/Image";
import Title from "../../../components/Title/Title";
import useRegisterFeedBack from "../../../hooks/JoinStaying/FeedBackHost/useRegisterFeedBack";
import ButtonContinueHost from "../ButtonContinueHost";

const FeedBackHost = () => {
  const { valueFeedBack } = useRegisterFeedBack();
  return (
    <div className='mx-auto w-full sm:w-[80%] md:w-[70%] 2md:w-[60%] lg:w-[50%] p-8 bg-white mt-5'>
      <div className='flex flex-col items-center text-center gap-5 w-full'>
        <Title title="You're listing?" />
        <div className='w-[80px] h-[80px]'>
          <Image
            src='/images/hotel.png'
            className='w-full h-full object-cover'
          />
        </div>

        <Title title={valueFeedBack} fontBold extraLarge6 nowrap={false} />
        <Title title='Dose this sound like your property?' xl nowrap={false} />
        <ButtonContinueHost />
        <Button
          title='No, I need to make a change'
          border
          xl
          className='w-full pt-2 pb-2'
          nowrap={false}
        />
      </div>
    </div>
  );
};

export default FeedBackHost;
