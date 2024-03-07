import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { validateName, validateNameLength, validateZipCode } from "../../../../Regexs/Validate";
import { validatePhone } from "../../../../Regexs/Validate/Phone";
import { postAddHotelName } from "../../../../api/HostStaying/HotelName";
import { UserContext } from "../../../../components/Contexts/AppUserProvider";
import Title from "../../../../components/Title/Title";
import routesConfig from "../../../../configs/routesConfig";
import useRegisterAddRess from "../../../../hooks/JoinStaying/AddRessHost/useRegisterAddRess";
import useRegisterHotelName from "../../../../hooks/JoinStaying/HotelNameHost/useRegisterHotelName";
import useRegisterOwner from "../../../../hooks/JoinStaying/OwnerHost/useRegisterOwner";
import ComponentHost from "../../ComponentHost";
import FooterHost from "../../FooterHost";
import ComponentBasicInformation from "./ComponentBasicInformation";
import ComponentNotificationAddRess from "./ComponentNotificationAddRess";
import useRegisterCreateRoom from "../../../../hooks/JoinStaying/CreateRoom/useRegisterCreateRoom";

const BasicInformation = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { setComplete } = useRegisterCreateRoom();
  const { user, token, sessionToken } = useContext(UserContext);
  const { quantityHotel } = useRegisterOwner();
  const { country, streetAddress, districtAddress, city, postalCode, setField: setFieldAddress } = useRegisterAddRess();
  const { hotelName, rating, managerHotel, contactPerson, phoneNumberOne, phoneNumberTwo, setField } = useRegisterHotelName();

  const validateHotel = (prevState) => {
    let isValid = true;

    if (prevState.hotelName === "") {
      setField("errorHotelName", t("HostStaying.CreateRoom.Error.information.errors.hotelNameNotBlank"));
      isValid = false;
    } else {
      if (!validateName(prevState.hotelName)) {
        setField("errorHotelName", t("HostStaying.CreateRoom.Error.information.errors.notNameHotelName"));
        isValid = false;
      } else {
        if (!validateNameLength(prevState.hotelName)) {
          setField("errorHotelName", t("HostStaying.CreateRoom.Error.information.errors.notNameLengthHotelName"));
          isValid = false;
        } else {
          setField("errorHotelName", "");
        }
      }
    }

    if (prevState.contactPerson === "") {
      setField("errorContactPerson", t("HostStaying.CreateRoom.Error.information.errors.contactPersonNotBlank"));
      isValid = false;
    } else {
      if (!validateName(prevState.contactPerson)) {
        setField("errorContactPerson", t("HostStaying.CreateRoom.Error.information.errors.notNameContactPerson"));
        isValid = false;
      } else {
        if (!validateNameLength(prevState.contactPerson)) {
          setField("errorContactPerson", t("HostStaying.CreateRoom.Error.information.errors.notNameLengthContactPerson"));
          isValid = false;
        } else {
          setField("errorContactPerson", "");
        }
      }
    }

    if (prevState.phoneNumberOne === "") {
      setField("errorPhoneNumberOne", t("HostStaying.CreateRoom.Error.information.errors.phoneNumberNotBlank"));
      isValid = false;
    } else {
      if (!validatePhone(prevState.phoneNumberOne)) {
        setField("errorPhoneNumberOne", t("HostStaying.CreateRoom.Error.information.errors.notPhoneNumber"));
        isValid = false;
      } else {
        setField("errorPhoneNumberOne", "");
      }
    }

    if (prevState.phoneNumberTwo === "") {
      setField("errorPhoneNumberTwo", t("HostStaying.CreateRoom.Error.information.errors.phoneNumberNotBlank"));
      isValid = false;
    } else {
      if (!validatePhone(prevState.phoneNumberTwo) && prevState.phoneNumberTwo.length > 0) {
        setField("errorPhoneNumberTwo", t("HostStaying.CreateRoom.Error.information.errors.notPhoneNumber"));
        isValid = false;
      } else {
        setField("errorPhoneNumberTwo", "");
      }
    }

    return isValid;
  };

  const validateAddress = (prevState) => {
    let isValid = true;

    if (prevState.streetAddress === "") {
      setFieldAddress("errorStreetAddress", t("HostStaying.CreateRoom.Error.information.errors.addressNotBlank"));
      isValid = false;
    } else {
      setFieldAddress("errorStreetAddress", "");
    }

    if (prevState.districtAddress === "") {
      setFieldAddress("errorDistrictAddress", t("HostStaying.CreateRoom.Error.information.errors.districtNotBlank"));
      isValid = false;
    } else {
      setFieldAddress("errorDistrictAddress", "");
    }

    if (prevState.city === "") {
      setFieldAddress("errorCity", t("HostStaying.CreateRoom.Error.information.errors.cityNotBlank"));
      isValid = false;
    } else {
      setFieldAddress("errorCity", "");
    }

    if (prevState.postalCode.length === 0) {
      setFieldAddress("errorPostalCode", t("HostStaying.CreateRoom.Error.information.errors.postalCodeNotBlank"));
      isValid = false;
    } else {
      if (!validateZipCode(prevState.postalCode)) {
        setFieldAddress("errorPostalCode", t("HostStaying.CreateRoom.Error.information.errors.notPostalCode"));
        isValid = false;
      } else {
        setFieldAddress("errorPostalCode", "");
      }
    }

    return isValid;
  };

  useEffect(() => {
    checkValidateHotel();
  }, [hotelName, contactPerson, phoneNumberOne, phoneNumberTwo]);

  useEffect(() => {
    checkValidateAddress();
  }, [streetAddress, districtAddress, city, postalCode]);

  useEffect(() => {
    checkValidateHotel();
    checkValidateAddress();
  }, [i18n.language]);

  const checkValidateHotel = () => {
    return validateHotel({ hotelName, contactPerson, phoneNumberOne, phoneNumberTwo });
  };

  const checkValidateAddress = () => {
    return validateAddress({ streetAddress, districtAddress, city, postalCode });
  };

  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    navigate(routesConfig.becomeAHostFeedBack);
  };

  const handleSaveAndContinue = async () => {
    if (!checkValidateHotel() || !checkValidateAddress()) return;

    const data = {
      name: hotelName,
      rating: rating,
      contactPerson: contactPerson,
      phoneNumber: phoneNumberOne,
      phoneNumberTwo: phoneNumberTwo,
      managerHotel: managerHotel,
      streetAddress: streetAddress,
      districtAddress: districtAddress,
      country: country,
      city: city,
      postalCode: postalCode,
      quantityHotel: quantityHotel,
    };

    try {
      setLoading(true);
      await postAddHotelName(data, token, sessionToken);
      setLoading(false);
      setComplete("completeInformation", true);
      navigate(`${routesConfig.becomeAHostCreateRoom}${`?token=${sessionToken}&source=composition`}`);
    } catch (e) {
      setLoading(true);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="p-4 gap-4 flex flex-col">
        <div className="flex flex-col">
          <Title title={`${t("HostStaying.CreateRoom.items.information.title")} ${user?.lastName} ${user?.firstName}!`} nowrap={false} fontBold extraLarge4 colorTitle="dark:text-white" />
          <Title title={t("HostStaying.CreateRoom.items.information.subTitle")} nowrap={false} xl />
        </div>
      </div>

      <ComponentHost componentLeft={<ComponentBasicInformation />} componentRight={<ComponentNotificationAddRess />} footer={<FooterHost onBack={handleBack} onContinue={handleSaveAndContinue} disabled={loading} />} loading={loading} />
    </div>
  );
};

BasicInformation.propTypes = {};

export default BasicInformation;
