import { useState } from "react";
import Border from "../../../components/Border/Border";
import { PartnerData } from "../../../components/Constants/PartnerData";
import SelectInput from "../../../components/SelectInput/SelectInput";
import Title from "../../../components/Title/Title";
import ComponentBusiness from "./ComponentBusiness";
import ComponentIndividual from "./ComponentIndividual";

const ComponentPartner = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedValue(selectedValue);
  };

  return (
    <div className='flex flex-col gap-2'>
      <Title
        title='In order to comply with various legal and regulatory requirements, we need to collect and verify some information about you and your property.'
        xl
        nowrap={false}
        className='dark:text-primary-50'
      />
      {PartnerData.map((partner, index) => (
        <div key={index} className='flex flex-col gap-2'>
          <Title title={partner?.title} xl fontBold nowrap={false} />
          {partner?.type === "select" && (
            <SelectInput onChange={(e) => handleSelectChange(e)}>
              {partner?.data.map((item, index) => (
                <option
                  key={index}
                  value={item?.value}
                  className='text-[14px] text-primary-700 dark:text-white'
                >
                  {item?.name}
                </option>
              ))}
            </SelectInput>
          )}
        </div>
      ))}

      {selectedValue === "individual" && <ComponentIndividual />}
      {selectedValue === "business" && (
        <div>
          <ComponentBusiness />
          <Border />
          <ComponentIndividual />
        </div>
      )}
    </div>
  );
};

export default ComponentPartner;
