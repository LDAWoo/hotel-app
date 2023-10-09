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
              <select className='mb-5 text-[14px] text-primary-100 border-[1px] border-primary-100 pt-[5px] pb-[5px] pl-[3px] pr-[3px] focus:outline-none'>
                <option key={index} className='text-[14px] text-primary-700'>
                  Select {item?.name}
                </option>
                {item?.data.map((country, index) => (
                  <option
                    key={index}
                    value={country.code}
                    className='text-[14px] text-primary-700'
                  >
                    {country.name}
                  </option>
                ))}
              </select>
            ) : (
              <TextInput
                className={`mb-5 ${index === 2 ? "w-[50%]" : "w-full"}`}
                classBorder='rounded-sm border border-primary-100 pt-[4px] pb-[4px] pr-[3px] pl-[7px]'
                classInput='w-full focus:outline-none placeholder:text-[14px] text-[14px]'
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
