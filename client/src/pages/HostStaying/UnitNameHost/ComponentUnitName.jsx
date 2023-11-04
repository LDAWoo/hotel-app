import { UnitNameData } from "../../../components/Constants/UnitNameData";
import SelectInput from "../../../components/SelectInput/SelectInput";
import Title from "../../../components/Title/Title";

function ComponentUnitName() {
  return <div>
    {UnitNameData.map((item,index) => (
      <div key={index}>
      <Title title={item?.title} fontMedium xl />
      {item?.type === "select" && (
        <div className='flex flex-row justify-between space-x-5'>
            <div key={index} className='flex flex-col gap-2 w-full'>
              <SelectInput>
                {item?.data.map((name, index) => (
                  <option key={index} value={name?.value}>
                    {name.name}
                  </option>
                ))}
              </SelectInput>
            </div>
        </div>
      )}
      </div>
    ))}
  </div>;
}

export default ComponentUnitName;
