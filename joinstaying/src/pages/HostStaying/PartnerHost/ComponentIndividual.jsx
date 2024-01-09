import Title from "../../../components/Title/Title";
import TextInput from "../../../components/TextInput/TextInput";
import DateFormatStaying from "../../../components/Staying/DateFormatStaying";
import { memo } from "react";

const getIndividual = [
  {
    id: 1,
    title:
      "Please provide the full names and dates of birth of all individuals who own 25% or more of the accommodation.",
    data: [
      {
        title: "First name",
        name: "first_name",
      },
      {
        title: "Last name",
        name: "last_name",
      },
      {
        title: "Date of birth",
        name: "date",
        date: "23/05/2003",
      },
    ],
  },
];

const ComponentIndividual = () => {
  return (
    <div>
      {getIndividual.map((individual, index) => (
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

              {item?.name === "date" ? (
                <DateFormatStaying date={item?.date} />
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

export default memo(ComponentIndividual);
