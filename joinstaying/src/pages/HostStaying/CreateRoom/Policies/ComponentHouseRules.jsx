import { useTranslation } from "react-i18next";
import RadioInput from "../../../../components/RadioInput/RadioInput";
import Title from "../../../../components/Title/Title";
import Toggle from "../../../../components/Toggle/Toogle";
import useRegisterPolicies from "../../../../hooks/JoinStaying/CreateRoom/Policies/useRegisterPolicies";

const ComponentHouseRules = () => {
  const { t } = useTranslation();

  const Pets = [
    {
      name: t("HostStaying.CreateRoom.items.policies.information.pets.yes"),
      value: "yes",
    },
    {
      name: t("HostStaying.CreateRoom.items.policies.information.pets.no"),
      value: "no",
    },
  ];

  const smokings = [
    {
      name: t("HostStaying.CreateRoom.items.policies.information.smoking.no"),
      value: "yes",
    },
    {
      name: t("HostStaying.CreateRoom.items.policies.information.smoking.no"),
      value: "no",
    },
  ];

  const { petPolicy, smokingPolicy, additionalPolices, setField } = useRegisterPolicies();

  const handleChangePet = (value) => {
    setField("petPolicy", value);
  };

  const handleChangeSmoking = (value) => {
    setField("smokingPolicy", value);
  };

  const handleToggleAdditional = (e) => {
    setField("additionalPolices", e.target.checked ? "yes" : "no");
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <Title title={t("HostStaying.CreateRoom.items.policies.information.additional")} fontMedium xl />
        <Toggle isChecked={additionalPolices === "no" ? false : true} onChange={handleToggleAdditional} />
      </div>

      <div className="flex flex-col gap-2">
        <Title title={t("HostStaying.CreateRoom.items.policies.information.pet")} fontMedium xl />

        <div className="flex flex-col gap-2">
          {Pets.map((pet, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <RadioInput id={"pet " + index} name={`pet ${pet?.name}`} isChecked={pet?.value === petPolicy} title={pet?.name} value={pet?.value} onChange={(e) => handleChangePet(e.target.value)} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Title title={t("HostStaying.CreateRoom.items.policies.information.smo")} fontMedium xl />

        <div className="flex flex-col gap-2">
          {smokings.map((smoking, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <RadioInput id={"smoking " + index} name={`smoking ${smoking?.name}`} isChecked={smoking?.value === smokingPolicy} title={smoking?.name} value={smoking?.value} onChange={(e) => handleChangeSmoking(e.target.value)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentHouseRules;
