import MoneyFormatStaying from "../../../../../components/Staying/MoneyFormatStaying";
import Title from "../../../../../components/Title/Title";
import PropTypes from "prop-types";

function PriceSummary({ data }) {
  return (
    <div className='flex flex-col gap-2'>
      <Title title='Your price summary' fontBold xxl />
      <div className='absolute top-[50px] right-0 left-0 bg-gray-200 w-full p-4'>
        <div className='flex flex-row justify-between'>
          <Title title='Total' fontBold extraLarge5 />
          <div className='flex flex-col items-end justify-end'>
            <MoneyFormatStaying
              price={data?.price}
              decimalScale={0}
              className='font-bold gap-2 text-[22px]'
            />
            <Title title='Includes taxes and fees' xl />
          </div>
        </div>
      </div>
      <div className='mt-[100px]'>
        <Title className='' title='Price information' fontBold xxl />
      </div>
    </div>
  );
}

PriceSummary.propTypes = {
  data: PropTypes.object,
};

export default PriceSummary;
