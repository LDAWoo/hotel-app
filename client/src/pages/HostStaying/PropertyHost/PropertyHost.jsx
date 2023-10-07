import { useState } from "react";
import { PropertiesHost } from "../../../components/Constants/PropertiesHost";
import Title from "../../../components/Title/Title";
import ButtonContinueHost from "../ButtonContinueHost";
import ButtonPrevHost from "../ButtonPrevHost";
import ItemHost from "../ItemHost";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";

const PropertyHost = () => {
  const [activeProperty, setActiveProperty] = useState("");
  const navigate = useNavigate();

  const handleChooseProperty = (property) => {
    setActiveProperty(property);
  };

  const handleBack = () => {
    navigate(routesConfig.becomeAHostCategory);
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostOwner);
  };

  return (
    <div>
      <div className='max-w-[500px] flex flex-col h-full justify-between'>
        <div className='relative'>
          <div className='flex flex-col p-4 gap-2'>
            <Title
              title='From the list below, which property category is most similar to your place?'
              nowrap={false}
              extraLarge4
            />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 2md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-5 p-4 bg-white'>
        {PropertiesHost.map((item, index) => (
          <ItemHost
            key={index}
            name={item?.name}
            description={item?.description}
            active={item?.name === activeProperty}
            onClick={() => handleChooseProperty(item?.name)}
          />
        ))}
      </div>

      <div className='flex w-full flex-row gap-2 mt-5 p-4'>
        <ButtonPrevHost onClick={handleBack} />
        <ButtonContinueHost onClick={handleContinue} />
      </div>
    </div>
  );
};

export default PropertyHost;
