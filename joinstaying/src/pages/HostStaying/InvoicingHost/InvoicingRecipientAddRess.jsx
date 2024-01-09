import SelectInput from "../../../components/SelectInput/SelectInput";
import TextInput from "../../../components/TextInput/TextInput";
import Title from "../../../components/Title/Title";
import PropType from "prop-types";

const InvoicingRecipientAddRess = ({ data }) => {
  return (
    <div className='flex flex-col gap-2 mt-4'>
      <Title
        title='Please provide invoice recipient’s address'
        xl
        nowrap={false}
        className='dark:text-primary-50'
      />
      {data?.map((item, index) => (
        <div className='flex flex-col gap-2' key={index}>
          <label className='font-medium text-[14px]'>{item?.name}</label>
          {item?.type === "select" && (
            <SelectInput>
              {item?.data.map((country, index) => (
                <option
                  key={index}
                  value={country?.code}
                  className='text-[14px] text-primary-700 dark:text-white'
                >
                  {country?.name}
                </option>
              ))}
            </SelectInput>
          )}
          {item?.type === "text" && (
            <TextInput
              className={`mb-5 w-full`}
              classBorder='border border-primary-100 rounded-sm'
              classInput='w-full focus:outline-none placeholder:text-[14px] text-[14px] border-[1px] pt-[5px] pb-[5px] pl-[3px] pr-[3px] border-transparent focus:border-hotel-75 dark:focus:border-hotel-500 dark:bg-primary-700 dark:text-white'
              placeholder={item?.placeHolder}
            />
          )}
        </div>
      ))}
    </div>
  );
};

InvoicingRecipientAddRess.propTypes = {
  data: PropType.array,
};

export default InvoicingRecipientAddRess;
