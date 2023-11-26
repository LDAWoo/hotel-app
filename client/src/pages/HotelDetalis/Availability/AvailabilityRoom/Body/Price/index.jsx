import Title from "../../../../../../components/Title/Title";
import Icon from "../../../../../../components/Icon/Icon";
import { BsInfoCircle } from "react-icons/bs";
import MoneyFormatStaying from "../../../../../../components/Staying/MoneyFormatStaying";
import PropTypes from "prop-types";

const Price = ({ data }) => {
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex flex-col gap-1 relative'>
        {/* TotalPrice */}
        <MoneyFormatStaying
          price={data?.totalMoneyOriginal}
          className='text-red-600 line-through gap-1'
        />

        {/* SalePrice */}
        <div className='flex flex-row gap-1 items-center dark:text-white'>
          <MoneyFormatStaying
            price={data?.totalMoneyPromotion}
            className='gap-1 font-bold text-[16px]'
          />

          <Icon icon={BsInfoCircle} size={12} classIcon='text-primary-700' />
        </div>
      </div>

      <Title title='Includes taxes and charges' large />
    </div>
  );
};

Price.propTypes = {
  data: PropTypes.object,
};

export default Price;
