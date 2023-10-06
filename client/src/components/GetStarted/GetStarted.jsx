import { AiOutlineCheck } from "react-icons/ai";
import Button from "../Buttons/Button";
import Label from "../Label/Label";
import Title from "../Title/Title";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { memo } from "react";

function GetStarted() {
  const data = [
    {
      title: "45% of partners get their first booking within a week",
    },
    {
      title: "More than 1,1 billion holiday rental guests since 2023",
    },
    {
      title: "Full control over your property and finances",
    },
    {
      title: "Registration is free and takes 15 minutes",
    },
  ];

  return (
    <div className='w-full'>
      <div className='bg-white mr-2'>
        <div className='flex flex-col gap-2 p-4'>
          <Title
            title='Earn more with consistent bookings'
            fontBold
            colorTitle='text-primary-700'
            xxxl
            nowrap={false}
          />

          <ul className='flex flex-col list-none gap-2'>
            {data.map((item, index) => (
              <Label
                key={index}
                icon={AiOutlineCheck}
                classIcon='text-success-50'
                size={20}
                title={item.title}
                classTitle='text-primary-100 text-[14px]'
              />
            ))}
          </ul>

          <Button
            title='Get started now'
            background
            className='pt-3 pb-3'
            titlePosition='before'
            icon={HiOutlineArrowNarrowRight}
            size={20}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(GetStarted);
