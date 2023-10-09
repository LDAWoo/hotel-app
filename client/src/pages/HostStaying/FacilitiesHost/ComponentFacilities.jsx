import { FacilitiesHostData } from "../../../components/Constants/FacilitiesHostData";
import CheckBox from "../../../components/Checkbox/Checkbox";

function ComponentFacilities() {
  return (
    <div>
      <div className='flex flex-col gap-2'>
        {FacilitiesHostData.map((item, index) => (
          <div key={index} className='flex flex-row gap-2'>
            <CheckBox value={item?.id} title={item?.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComponentFacilities;
