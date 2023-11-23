import Icon from "../Icon/Icon";
import { IoIosSearch } from "react-icons/io";
const SearchMap = ({ results, onChange }) => {
  return (
    <div className='absolute left-[60px] top-[20px] w-full mx-auto z-[5]'>
      <div className='border-none p-0 m-0 box-border'>
        <Icon
          icon={IoIosSearch}
          classIcon='absolute p-[8px] translate-y-1 text-primary-50'
          size={20}
        />

        <input
          type='search'
          placeholder='Search on map'
          onChange={onChange}
          className='text-[14px] w-[calc(100%-120px)] focus:outline-none border-[2px] border-transparent focus:border-hotel-75 shadow-[0_2px_8px_rgba(0,0,0,0.16)] pl-[32px] pr-[10px] rounded-[4px] pt-2 pb-2'
        />
      </div>

      <div></div>
    </div>
  );
};

export default SearchMap;
