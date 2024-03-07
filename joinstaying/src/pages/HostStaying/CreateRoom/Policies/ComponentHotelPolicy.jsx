import { useTranslation } from "react-i18next";
import RadioInput from "../../../../components/RadioInput/RadioInput";
import SelectInput from "../../../../components/SelectInput/SelectInput";
import Title from "../../../../components/Title/Title";
import useRegisterPolicies from "../../../../hooks/JoinStaying/CreateRoom/Policies/useRegisterPolicies";

const ComponentHotelPolicy = () => {
  const { t } = useTranslation();

  const HotelPolicyData = [
    {
      id: 1,
      title: t("HostStaying.CreateRoom.items.policies.information.cancelBooking"),
      type: "select",
      name: "days",
      data: [
        {
          name: t("HostStaying.CreateRoom.items.policies.information.before18"),
          value: "0 day",
        },
        {
          name: t("HostStaying.CreateRoom.items.policies.information.before1day"),
          value: "1 day",
        },
        {
          name: t("HostStaying.CreateRoom.items.policies.information.before2day"),
          value: "2 days",
        },
        {
          name: t("HostStaying.CreateRoom.items.policies.information.before3day"),
          value: "3 days",
        },
        {
          name: t("HostStaying.CreateRoom.items.policies.information.before4day"),
          value: "4 days",
        },
        {
          name: t("HostStaying.CreateRoom.items.policies.information.before5day"),
          value: "5 days",
        },
      ],
    },
    {
      id: 2,
      title: t("HostStaying.CreateRoom.items.policies.information.priceCancelBooking"),
      type: "radio",
      data: [
        {
          name: "cancel_guest_payment",
          value: "first_night",
          title: t("HostStaying.CreateRoom.items.policies.information.firstNight"),
        },
        {
          name: "cancel_guest_payment",
          value: "full_stay",
          title: t("HostStaying.CreateRoom.items.policies.information.totalPrice"),
        },
      ],
    },
  ];

  const { bookingPolicy, cancellationPolicy, setField } = useRegisterPolicies();

  const handleSelectCancelPolicies = (e) => {
    const value = e.target.value;
    setField("bookingPolicy", value);
  };

  const handleChangeCancelPolicies = (e) => {
    const value = e.target.value;
    setField("cancellationPolicy", value);
  };

  return (
    <div className="flex flex-col gap-4">
      {HotelPolicyData.map((policy, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Title title={policy?.title} fontMedium xl nowrap={false} />
          {policy?.type === "select" && (
            <SelectInput className="w-full" value={bookingPolicy} onChange={handleSelectCancelPolicies}>
              {policy?.data &&
                policy?.data.map((item, index) => (
                  <option key={index} value={item?.value}>
                    {item?.name}
                  </option>
                ))}
            </SelectInput>
          )}
          {policy?.type === "radio" && <div className="flex flex-col gap-2">{policy?.data && policy?.data.map((item, index) => <RadioInput onChange={handleChangeCancelPolicies} key={index} id={index} name={item?.name} isChecked={item?.value === cancellationPolicy} value={item?.value} title={item?.title} />)}</div>}
        </div>
      ))}
    </div>
  );
};

export default ComponentHotelPolicy;
