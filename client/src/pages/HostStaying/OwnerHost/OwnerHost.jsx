import { useState } from "react";
import { OwnerHostData } from "../../../components/Constants/OwnerHostData";
import TextInput from "../../../components/TextInput/TextInput";
import Title from "../../../components/Title/Title";
import useRegisterNumberOfProperty from "../../../hooks/JoinStaying/OwnerHost/useRegisterNumberOfProperty";
import ButtonContinueHost from "../ButtonContinueHost";
import ButtonPrevHost from "../ButtonPrevHost";
import ItemHost from "../ItemHost";
import useRegisterFeedBack from "../../../hooks/JoinStaying/FeedBackHost/useRegisterFeedBack";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";

const OwnerHost = () => {
  const { numberOfProperty, setNumberOfProperty } =
    useRegisterNumberOfProperty();
  const { setValueFeedBack } = useRegisterFeedBack();
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const [isNumberOfProperty, setIsNumberOfProperty] = useState(false);

  const handleChooseItem = (item, numberOfProperty) => {
    if (!numberOfProperty) {
      setNumberOfProperty(2);
    }
    setIsNumberOfProperty(numberOfProperty);
    setValueFeedBack(item);
    setActive(item);
  };

  const handleChangeNumberOfProperty = (e) => {
    setNumberOfProperty(e.target.value);
  };

  const handleBack = () => {
    navigate(routesConfig.becomeAHostProperty);
  };

  const handleContinue = () => {
    navigate(routesConfig.becomeAHostFeedBack);
  };

  return (
    <div>
      <div className='max-w-[500px] flex flex-col h-full justify-between'>
        <div className='relative'>
          <div className='flex flex-col p-4 gap-2'>
            <Title
              title='How many hotels are you listing?'
              nowrap={false}
              extraLarge4
            />
          </div>
        </div>
      </div>
      <div className='w-full grid grid-cols-1 gap-5 p-4 bg-white'>
        {OwnerHostData.map((item, index) => (
          <ItemHost
            key={index}
            description={item?.name}
            img={item?.image}
            active={active === item?.name}
            className='aspect-auto'
            onClick={() => handleChooseItem(item?.name, item?.numberOfProperty)}
          />
        ))}

        {isNumberOfProperty && (
          <div className='flex flex-col gap-2 w-full'>
            <Title title='Number of property' />
            <TextInput
              type='number'
              classInput='w-[20%] pl-1 pt-1 pb-1 text-primary-700 border-[1px] border-primary-700 rounded-md'
              classBorder
              value={numberOfProperty}
              onChange={handleChangeNumberOfProperty}
            />
          </div>
        )}
      </div>

      <div className='flex flex-row gap-2 w-full mt-5 p-4'>
        <ButtonPrevHost onClick={handleBack} />
        <ButtonContinueHost
          disabled={numberOfProperty < 2}
          onClick={handleContinue}
        />
      </div>
    </div>
  );
};

export default OwnerHost;
