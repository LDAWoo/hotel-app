import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../components/Contexts/AppUserProvider";
import Title from "../../../../components/Title/Title";
import ComponentHost from "../../ComponentHost";
import FooterHost from "../../FooterHost";
import ComponentGroup from "./ComponentGroup";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { postAddHotelPayment } from "../../../../api/HostStaying/Payment";
import routesConfig from "../../../../configs/routesConfig";
import useRegisterPayment from "../../../../hooks/JoinStaying/CreateRoom/Payment/useRegisterPayment";
import useRegisterCreateRoom from "../../../../hooks/JoinStaying/CreateRoom/useRegisterCreateRoom";
import ComponentNotificationPayment from "./ComponentNotificationPayment";
const PaymentMode = () => {
  const { t, i18n } = useTranslation();
  const { token, sessionToken } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { creditOrDebitCard, firstName, lastName, flagReceivingAddress, country, streetAddress, districtAddress, city, setField } = useRegisterPayment();
  const navigate = useNavigate();
  const { setComplete } = useRegisterCreateRoom();

  const validateAddress = (prevState) => {
    let isValid = true;

    if (prevState.streetAddress === "") {
      setField("errorStreetAddress", t("HostStaying.CreateRoom.Error.payment.errors.addressNotBlank"));
      isValid = false;
    } else {
      setField("errorStreetAddress", "");
    }

    if (prevState.districtAddress === "") {
      setField("errorDistrictAddress", t("HostStaying.CreateRoom.Error.payment.errors.districtNotBlank"));
      isValid = false;
    } else {
      setField("errorDistrictAddress", "");
    }

    if (prevState.city === "") {
      setField("errorCity", t("HostStaying.CreateRoom.Error.payment.errors.cityNotBlank"));
      isValid = false;
    } else {
      setField("errorCity", "");
    }

    return isValid;
  };

  const validateFullName = (prevState) => {
    let isValid = true;

    if (prevState.firstName === "") {
      setField("errorFirstName", t("HostStaying.CreateRoom.Error.payment.errors.firstNameNotBlank"));
      isValid = false;
    } else {
      setField("errorFirstName", "");
    }

    if (prevState.lastName === "") {
      setField("errorLastName", t("HostStaying.CreateRoom.Error.payment.errors.lastNameNotBlank"));
      isValid = false;
    } else {
      setField("errorLastName", "");
    }

    return isValid;
  };

  const checkValidateAddress = () => {
    return validateAddress({ streetAddress, districtAddress, city });
  };

  const checkValidateFullName = () => {
    return validateFullName({ firstName, lastName });
  };

  useEffect(() => {
    checkValidateAddress();
    checkValidateFullName();
  }, [i18n.language]);

  const handleSaveAndChange = async () => {
    const data = {
      creditOrDebitCard,
      nameOnInvoice: firstName.trim() + " " + lastName.trim(),
      flagReceivingAddress,
      hotelPaymentMethodAddressRequest: {
        streetAddress,
        districtAddress,
        city,
        country,
      },
    };

    try {
      setLoading(true);
      await postAddHotelPayment(data, token, sessionToken);
      setLoading(false);
      setComplete("completePayment", true);
      navigate(`${routesConfig.becomeAHostCreateRoom}${`?token=${sessionToken}&source=confirm`}`);
    } catch (e) {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate(`${routesConfig.becomeAHostCreateRoom}${`?token=${sessionToken}&source=policies`}`);
  };

  useEffect(() => {
    let isValid = false;
    if (flagReceivingAddress) {
      isValid = checkValidateAddress() && checkValidateFullName();
    } else {
      isValid = checkValidateFullName();
    }
    setDisabled(!isValid);
  }, [flagReceivingAddress, firstName, lastName, streetAddress, districtAddress, city]);

  return (
    <div className="flex flex-col">
      <div className="p-4 gap-4 flex flex-col">
        <div className="flex flex-col">
          <Title title={t("HostStaying.CreateRoom.items.payment.name")} nowrap={false} fontBold extraLarge4 colorTitle="dark:text-white" />
          <Title title={t("HostStaying.CreateRoom.items.payment.subTitle")} nowrap={false} xl />
        </div>
      </div>

      <ComponentHost componentLeft={<ComponentGroup />} componentRight={<ComponentNotificationPayment />} footer={<FooterHost disabled={loading || disabled} onBack={handleBack} onContinue={handleSaveAndChange} />} loading={loading} />
    </div>
  );
};

PaymentMode.propTypes = {};

export default PaymentMode;
