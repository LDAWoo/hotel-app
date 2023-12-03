import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routesConfig from "../../../configs/routesConfig";
import useRegisterFeedBack from "../../../hooks/JoinStaying/FeedBackHost/useRegisterFeedBack";
import useRegisterNumberOfProperty from "../../../hooks/JoinStaying/OwnerHost/useRegisterNumberOfProperty";
import ComponentHost from "../ComponentHost";
import FooterHost from "../FooterHost";
import ComponentOwnerHost from "./ComponentOwnerHost";

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

  useEffect(() => {
    if (numberOfProperty) {
      console.log(numberOfProperty);
    }
  }, []);

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
    <ComponentHost
      classComponent='p-4 gap-5'
      title='How many hotels are you listing?'
      componentLeft={
        <ComponentOwnerHost
          value={numberOfProperty}
          active={active}
          onClick={handleChooseItem}
          onChange={handleChangeNumberOfProperty}
          isNumberOfProperty={isNumberOfProperty}
        />
      }
      classFooter='mt-5 2md:mt-0'
      footer={
        <FooterHost
          onBack={handleBack}
          disabled={numberOfProperty < 2}
          onContinue={handleContinue}
        />
      }
    />
  );
};

export default OwnerHost;
