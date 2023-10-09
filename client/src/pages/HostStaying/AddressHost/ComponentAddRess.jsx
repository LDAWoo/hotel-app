import { AddRessData } from "../../../components/Constants/AddRessData";
import TextInput from "../../../components/TextInput/TextInput";

const ComponentAddRess = () => {
  return (
    <div>
      {AddRessData.map((item, index) => (
        <div key={index}>
          <div className='flex flex-col gap-2'>
            <label className='font-medium text-[14px]'>{item?.name}</label>
            {item?.data ? (
              <select className='mb-5 text-[14px] text-primary-100 border-[1px] border-primary-100 pt-[5px] pb-[5px] pl-[3px] pr-[3px] focus:outline-none dark:bg-primary-700 dark:text-white'>
                <option
                  key={index}
                  className='text-[14px] text-primary-700 dark:text-white'
                >
                  Select {item?.name}
                </option>
                {item?.data.map((country, index) => (
                  <option
                    key={index}
                    value={country.code}
                    className='text-[14px] text-primary-700 dark:text-white'
                  >
                    {country.name}
                  </option>
                ))}
              </select>
            ) : (
              <TextInput
                className={`mb-5 ${index === 2 ? "w-[50%]" : "w-full"}`}
                classBorder='border border-primary-100 rounded-sm'
                classInput='w-full focus:outline-none placeholder:text-[14px] text-[14px] border-[1px] pt-[5px] pb-[5px] pl-[3px] pr-[3px] border-transparent focus:border-hotel-75 dark:focus:border-hotel-500 dark:bg-primary-700 dark:text-white'
                placeholder={item?.placeHolder}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentAddRess;
