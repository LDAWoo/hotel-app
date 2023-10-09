import PropTypes from "prop-types";
import Button from "../../../components/Buttons/Button";
import Image from "../../../components/Image/Image";
import Title from "../../../components/Title/Title";
const ItemCategoryHost = ({
  className,
  name,
  img,
  keys,
  description,
  onClick,
}) => {
  return (
    <div
      className={`w-full border rounded-md p-4 bg-white dark:bg-primary-700 dark:border-primary-500 aspect-auto md:aspect-[50/40] 2md:aspect-[50/50] ${className}`}
    >
      <div className='flex flex-col gap-2 w-full h-full items-center text-center'>
        <div className='flex flex-col flex-1 gap-2 items-center'>
          {img && (
            <div className='w-[50px] h-[50px]'>
              <Image src={img} className='w-full h-full object-cover' />
            </div>
          )}
          <Title
            title={name}
            fontBold
            extraLarge4
            colorTitle='dark:text-white'
          />
          <Title
            title={description}
            nowrap={false}
            xl
            colorTitle='dark:text-primary-50'
          />
        </div>

        <Button
          title='List your property'
          background
          className='pt-2 pb-2 justify-center'
          onClick={() => onClick(keys)}
        />
      </div>
    </div>
  );
};

ItemCategoryHost.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  description: PropTypes.string.isRequired,
  keys: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ItemCategoryHost;
