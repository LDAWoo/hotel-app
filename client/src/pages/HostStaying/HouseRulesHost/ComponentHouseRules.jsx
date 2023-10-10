import { HouseRulesData } from "../../../components/Constants/HouseRulesData";
import Title from "../../../components/Title/Title";
import SelectInput from "../../../components/SelectInput/SelectInput";
import RadioInput from "../../../components/RadioInput/RadioInput";

const ComponentHouseRules = () => {
  return (
    <div className='flex flex-col gap-2'>
      <Title title='What are your check-in and check-out times?' fontBold xxl />
      {HouseRulesData.map((item, index) => (
        <div key={index} className='flex flex-col gap-2'>
          <Title title={item?.title} fontMedium xl />
          {item?.type === "select" && (
            <div className='flex flex-row justify-between space-x-5'>
              {item?.data.map((time, index) => (
                <div key={index} className='flex flex-col gap-2 w-full'>
                  <Title title={time?.name} xl />
                  <SelectInput>
                    {time?.time.map((itemTime, index) => (
                      <option key={index} value={itemTime?.value}>
                        {itemTime.name}
                      </option>
                    ))}
                  </SelectInput>
                </div>
              ))}
            </div>
          )}
          {item?.type === "radio" && (
            <div>
              {item?.data.map((check, index) => (
                <div className='flex flex-col gap-2' key={index}>
                  <RadioInput
                    id={check?.id}
                    name={check?.name}
                    title={check?.title}
                    value={check?.value}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ComponentHouseRules;
