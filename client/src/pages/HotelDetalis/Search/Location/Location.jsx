import Title from "../../../../components/Title/Title";
import ButtonSearch from "../ButtonSearch";
import { IoSearchOutline } from "react-icons/io5";
function Location() {
  return (
    <div className='flex flex-col w-full'>
      <Title title='Destination/property name:' large />
      <ButtonSearch
        icon={IoSearchOutline}
        type='text'
        placeholder='Where are you going?'
      />
    </div>
  );
}

export default Location;
