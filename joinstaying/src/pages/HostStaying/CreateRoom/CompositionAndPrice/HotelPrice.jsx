import { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { MdOutlineErrorOutline } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import Icon from "../../../../components/Icon/Icon";
import Label from "../../../../components/Label/Label";
import MoneyFormatStaying from "../../../../components/Staying/MoneyFormatStaying";
import TextError from "../../../../components/TextError/TextError";
import Title from "../../../../components/Title/Title";
import useRegisterCompositionAndPrice from "../../../../hooks/JoinStaying/CreateRoom/CompositionAndPrice/useRegisterCompositionAndPrice";
import { useTranslation } from "react-i18next";

const HotelPrice = ({ ...props }) => {
  const { t } = useTranslation();
  const HotelPriceData = [
    {
      id: 1,
      title: t("HostStaying.CreateRoom.items.composition.information.titlePrice"),
      type: "number",
      data: [
        {
          id: 1,
          name: t("HostStaying.CreateRoom.items.composition.information.priceGuestPay"),
          subName: t("HostStaying.CreateRoom.items.composition.information.subPriceGuestPay"),
        },
      ],
    },
    {
      id: 2,
      type: "none",
      commissionRate: 15,
      data: [
        {
          icon: AiOutlineCheck,
          name: t("HostStaying.CreateRoom.items.composition.information.commissions.help"),
        },
        {
          icon: AiOutlineCheck,
          name: t("HostStaying.CreateRoom.items.composition.information.commissions.save"),
        },
        {
          icon: AiOutlineCheck,
          name: t("HostStaying.CreateRoom.items.composition.information.commissions.we"),
        },
      ],
      earning: t("HostStaying.CreateRoom.items.composition.information.commissions.earning"),
    },
  ];

  const [active, setActive] = useState(false);
  const { pricePerNight, errorPricePerNight, setField } = useRegisterCompositionAndPrice();
  const [totalPrice, setTotalPrice] = useState();

  const handleChange = (values) => {
    const { value } = values;

    const roundedNum = parseInt(value, 10);
    if (value.length > 0) {
      setField("pricePerNight", roundedNum);
    } else {
      setField("pricePerNight", parseInt(0));
    }
  };

  useEffect(() => {
    if (pricePerNight > 0) {
      setTotalPrice(pricePerNight - pricePerNight * 0.15);
    }
  }, [pricePerNight]);

  const handleFocus = () => {
    setActive(true);
  };
  const handleBlur = () => {
    setActive(false);
  };

  const handleKeyDown = (e, value) => {
    if (e.key === "-") {
      e.preventDefault();
    }

    if (e.key === "0" && value === "") {
      e.preventDefault();
    }
  };
  return (
    <div>
      {HotelPriceData.map((price, index) => (
        <div key={index} className="flex flex-col gap-2">
          {price?.title && <Title title={price?.title} fontMedium xl nowrap={false} />}
          {price?.type == "number" && (
            <div>
              {price?.data.map((item, index) => (
                <div key={index} className="relative flex flex-col gap-1 dark:text-primary-50">
                  <Title title={item?.name} xl fontMedium />
                  <div className={`flex relative border-[2px] rounded-[4px] duration-300 dark:text-white ${active ? "border-hotel-75" : `${errorPricePerNight.length > 0 ? "border-red-500" : "border-primary-700 dark:border-primary-500"}`}`}>
                    <div className="pt-1 pb-1 pr-2 pl-2 after:absolute after:contents-[''] after:w-[1px] after:h-[60%] after:top-[20%] after:ml-2 after:bg-[#e7e7e7] dark:after:bg-primary-400">VND</div>
                    <div className="flex flex-1 w-full ml-2">
                      <CurrencyFormat displayType="input" min={0} thousandSeparator={!active} className="w-full focus:outline-none bg-transparent pt-1 pb-1 pr-2 pl-2" value={pricePerNight} decimalScale={2} fixedDecimalScale={!active} onValueChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} {...props} onKeyDown={(e) => handleKeyDown(e, pricePerNight)} />
                    </div>
                    {errorPricePerNight.length > 0 && <Icon icon={MdOutlineErrorOutline} size={20} classIcon="absolute top-[20%] text-red-500 bottom-0 right-0" />}
                  </div>
                  <TextError error={errorPricePerNight} />
                  <Title title={item?.subName} large />
                </div>
              ))}
            </div>
          )}
          {price?.type == "none" && (
            <div>
              {pricePerNight > 0 && (
                <div className="flex flex-col gap-2 pl-2 pb-2">
                  <div>
                    <Title title={`${price?.commissionRate}%`} /> Staying.com {t("HostStaying.CreateRoom.items.composition.information.commissions.title")}
                  </div>
                  <ul className="inline-block list-none pt-0 pb-5 ml-[40px] text-[14px]">
                    {price?.data.map((i, index) => (
                      <Label key={index} icon={i?.icon} title={i?.name} size={18} className="inline-block" classIcon="text-green-800" classTitle="dark:text-primary-50" />
                    ))}
                  </ul>
                  <hr className="dark:border-primary-400" />
                  <p className="mt-5">
                    <MoneyFormatStaying price={totalPrice} /> {price?.earning}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HotelPrice;
