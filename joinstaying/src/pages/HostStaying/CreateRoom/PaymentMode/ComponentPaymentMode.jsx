import { useTranslation } from "react-i18next";
import RadioInput from "../../../../components/RadioInput/RadioInput";
import Title from "../../../../components/Title/Title";
import useRegisterPayment from "../../../../hooks/JoinStaying/CreateRoom/Payment/useRegisterPayment";
const ComponentPaymentMode = () => {
  const { t } = useTranslation();

  const payments = [
    {
      id: 1,
      name: "payment",
      value: true,
      title: t("HostStaying.CreateRoom.items.payment.information.payWithCredit"),
    },
    {
      id: 2,
      name: "payment",
      value: false,
      title: t("HostStaying.CreateRoom.items.payment.information.payWithStaying"),
    },
  ];
  const { creditOrDebitCard, setField } = useRegisterPayment();

  const handleChange = (e) => {
    const value = e.target.value === "true";
    setField("creditOrDebitCard", value);
  };
  return (
    <div>
      <div className="flex flex-col gap-2">
        <Title title={t("HostStaying.CreateRoom.items.payment.information.title")} xxl fontBold nowrap={false} />
        <Title title={t("HostStaying.CreateRoom.items.payment.information.subTitle1")} xl nowrap={false} />

        <div className="flex flex-col gap-2">
          {payments.map((item, index) => (
            <RadioInput key={index} id={"payment" + index} isChecked={item?.value === creditOrDebitCard} name={item?.name} value={item?.value} title={item?.title} onChange={handleChange} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentPaymentMode;
