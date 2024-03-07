import { useTranslation } from "react-i18next";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import Title from "../../../../components/Title/Title";
import useRegisterConfirmHotel from "../../../../hooks/JoinStaying/CreateRoom/ConfirmHotel/useRegisterConfirmHotel";

const ComponentConfirmHotel = () => {
  const { t } = useTranslation();

  const items = [
    {
      id: "acceptGeneralTermsPrivacy",
      name: t("HostStaying.CreateRoom.items.confirm.information.acceptGeneralTermsPrivacy"),
    },
    {
      id: "certificationOfLegalBusinessOperations",
      name: t("HostStaying.CreateRoom.items.confirm.information.certificationOfLegalBusinessOperations"),
    },
  ];

  const { statusConfirm, setField } = useRegisterConfirmHotel();
  const handleChange = (e) => {
    const valueId = e.target.value;
    const isConfirm = statusConfirm.some((value) => value.id === valueId);

    if (isConfirm) {
      setField(
        "statusConfirm",
        statusConfirm.filter((value) => value.id !== valueId)
      );
    } else {
      setField("statusConfirm", [...statusConfirm, { id: valueId }]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Title title={t("HostStaying.CreateRoom.items.confirm.information.title")} fontBold xxl />

      <Title title={t("HostStaying.CreateRoom.items.confirm.information.subTitle1")} nowrap={false} xl />

      <Title title={t("HostStaying.CreateRoom.items.confirm.information.subTitle2")} nowrap={false} extraLarge4 />

      <div className="flex flex-col">
        <>
          {items.map((item, index) => (
            <div key={index} className="flex flex-row gap-2">
              <Checkbox value={item?.id} title={item?.name} checked={statusConfirm.some((s) => s?.id === item?.id)} onChange={handleChange} />
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

ComponentConfirmHotel.propTypes = {};

export default ComponentConfirmHotel;
