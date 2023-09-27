import PropTypes from "prop-types";
import Image from "../../../../components/Image/Image";
import Title from "../../../../components/Title/Title";
import Body from "../../DescriptionHighlight/Description/Description/Body";

const CardReview = ({ ...props }) => {
  return (
    <div className='box-border w-full h-full p-4 border dark:border-primary-500'>
      <div className='flex flex-col gap-1'>
        {/* Avatar  */}
        <div className='flex flex-row items-center gap-2'>
          <div className='w-[32px] h-[32px] rounded-full border-[2px] border-secondary-50'>
            <Image
              src='https://xx.bstatic.com/static/img/review/avatars/ava-l.png'
              className='h-full w-full rounded-full object-cover'
            />
          </div>
          <div>
            <Title title='Vu Lee' fontBold xl colorTitle='dark:text-white' />
          </div>
        </div>
        {/* Content */}
        <div className='flex flex-row w-full'>
          <Body
            maxSegments={1}
            data={props?.description}
            className='break-words whitespace-pre-line text-[14px] dark:text-primary-50'
          />
        </div>
        {/* ReadMore */}
        <div>
          <Title
            title='Read More'
            titleCustom='text-hotel-50 hover:underline cursor-pointer duration-300'
            large
          />
        </div>
      </div>
    </div>
  );
};

CardReview.propTypes = {
  description: PropTypes.string.isRequired,
};

export default CardReview;
