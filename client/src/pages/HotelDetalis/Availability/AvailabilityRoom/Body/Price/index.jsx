import Title from "../../../../../../components/Title/Title";
import Icon from "../../../../../../components/Icon/Icon";
import { BsInfoCircle } from "react-icons/bs";

const Price = () => {
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex flex-col gap-1 relative'>
        {/* TotalPrice */}
        <Title
          title='VND 57,900,900'
          colorTitle='text-red-600 line-through'
          medium
        />

        {/* SalePrice */}
        <div className='flex flex-row gap-1 items-center dark:text-white'>
          <Title title='VND 37,550,000' fontBold large />
          <Icon icon={BsInfoCircle} size={8} classIcon='text-primary-700' />
        </div>
      </div>

      <Title title='Includes taxes and charges' small />
    </div>
  );
};

export default Price;
