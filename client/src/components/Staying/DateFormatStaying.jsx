import CurrencyFormat from "react-currency-format";

const DateFormatStaying = ({ date, onChange }) => {
  return (
    <div className='border border-primary-100 rounded-sm relative w-full duration-200 outline-none'>
      <CurrencyFormat
        className='w-full focus:outline-none placeholder:text-[14px] text-[14px] border-[1px] pt-[5px] pb-[5px] pl-[3px] pr-[3px] border-transparent focus:border-hotel-75 dark:focus:border-hotel-500 dark:bg-primary-700 dark:text-white'
        value={date}
        displayType='input'
        format='##/##/####'
        placeholder='dd/mm/yyyy'
        mask={["d", "d", "m", "m", "y", "y", "y", "y"]}
        onChange={onChange}
      />
    </div>
  );
};

export default DateFormatStaying;
