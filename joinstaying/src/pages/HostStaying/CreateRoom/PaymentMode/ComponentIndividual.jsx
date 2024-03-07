import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { validateName } from "../../../../Regexs/Validate";
import RadioInput from "../../../../components/RadioInput/RadioInput";
import TextError from "../../../../components/TextError/TextError";
import TextInput from "../../../../components/TextInput/TextInput";
import Title from "../../../../components/Title/Title";
import useRegisterPayment from "../../../../hooks/JoinStaying/CreateRoom/Payment/useRegisterPayment";
import ComponentBusiness from "./ComponentBusiness";

const ComponentIndividual = () => {
  const { t } = useTranslation();

  const flagAddress = [
    {
      id: 1,
      name: "yes",
      title: t("HostStaying.CreateRoom.items.payment.information.flags.yes"),
      value: true,
    },
    {
      id: 2,
      name: "no",
      title: t("HostStaying.CreateRoom.items.payment.information.flags.no"),
      value: false,
    },
  ];

  const { firstName, errorFirstName, errorLastName, lastName, flagReceivingAddress, setField } = useRegisterPayment();

  const handleChange = (e) => {
    const value = e.target.value === "true";
    setField("flagReceivingAddress", value);
  };

  const handleChangeFirstName = (value) => {
    setField("firstName", value);
  };

  const handleChangeLastName = (value) => {
    setField("lastName", value);
  };

  const onKeyDownName = (e, value) => {
    if (!validateName(e.key)) {
      e.preventDefault();
    } else if (e.key === " " && value.trim() === "") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (!flagReceivingAddress) {
      setField("country", "");
      setField("streetAddress", "");
      setField("districtAddress", "");
      setField("city", "");
    }
  }, [flagReceivingAddress, setField]);

  return (
    <>
      <div className="flex flex-col gap-2">
        <Title fontBold xxl title={t("HostStaying.CreateRoom.items.payment.information.provideFullName")} nowrap={false} xl className="dark:text-primary-50" />

        <div className="flex flex-col gap-1">
          <Title title={t("HostStaying.CreateRoom.items.payment.information.firstName")} fontMedium xl nowrap={false} />

          <div className="flex flex-col gap-1">
            <div className="flex flex-col w-full">
              <TextInput type="text" className="w-full" value={firstName} error={errorFirstName.length > 0} sizeIcon={20} onChange={(e) => handleChangeFirstName(e.target.value)} onKeyDown={(e) => onKeyDownName(e, firstName)} />
              <TextError error={errorFirstName} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Title title={t("HostStaying.CreateRoom.items.payment.information.lastName")} fontMedium xl nowrap={false} />

          <div className="flex flex-col gap-1">
            <div className="flex flex-col w-full">
              <TextInput type="text" className="w-full" value={lastName} error={errorLastName.length > 0} sizeIcon={20} onChange={(e) => handleChangeLastName(e.target.value)} onKeyDown={(e) => onKeyDownName(e, lastName)} />
              <TextError error={errorLastName} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Title title={t("HostStaying.CreateRoom.items.payment.information.flagAddress")} fontMedium xl />

        <div className="flex flex-col gap-2">
          {flagAddress?.map((item) => (
            <RadioInput key={item.id} isChecked={item.value === flagReceivingAddress} name={item?.name} value={item?.value} title={item?.title} onChange={handleChange} />
          ))}
        </div>

        {flagReceivingAddress && <ComponentBusiness />}
      </div>
    </>
  );
};

export default memo(ComponentIndividual);
