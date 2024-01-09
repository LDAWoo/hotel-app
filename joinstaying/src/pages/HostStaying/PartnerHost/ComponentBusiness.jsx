import { memo } from "react";
import SelectInput from "../../../components/SelectInput/SelectInput";
import TextInput from "../../../components/TextInput/TextInput";
import Title from "../../../components/Title/Title";
import countryList from "country-list";
const getBusiness = [
  {
    id: 1,
    title: "",
    data: [
      {
        title: "Full name of business entity",
        type: "text",
        name: "owner_company_name",
      },
      {
        title: "Address of business entity",
        name: "owner_company_address",
      },
      {
        title: "Zip code",
        type: "text",
        name: "owner_company_address_zip_code",
      },
      {
        title: "City",
        type: "text",
        name: "owner_company_address_city",
      },
      {
        title: "Country",
        name: "Select country/region",
        type: "select",
        data: countryList.getData(),
      },
    ],
  },
];

const ComponentBusiness = () => {
  return (
    <div>
      {getBusiness.map((individual, index) => (
        <div key={index} className='flex flex-col gap-2'>
          <Title
            title={individual?.title}
            nowrap={false}
            xl
            className='dark:text-primary-50'
          />

          {individual?.data.map((item, index) => (
            <div key={index} className='flex flex-col gap-2'>
              <Title title={item?.title} fontMedium xl nowrap={false} />

              {item?.type === "select" ? (
                <SelectInput>
                  <option
                    key={index}
                    className='text-[14px] text-primary-700 dark:text-white'
                  >
                    {item?.name}
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
                </SelectInput>
              ) : (
                <TextInput
                  type='text'
                  name={item?.name}
                  classBorder='border border-primary-100 rounded-sm'
                  classInput='w-full focus:outline-none placeholder:text-[14px] text-[14px] border-[1px] pt-[5px] pb-[5px] pl-[3px] pr-[3px] border-transparent focus:border-hotel-75 dark:focus:border-hotel-500 dark:bg-primary-700 dark:text-white'
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default memo(ComponentBusiness);
