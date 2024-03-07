import RadioInput from "../../../../components/RadioInput/RadioInput";
import SelectInput from "../../../../components/SelectInput/SelectInput";
import Title from "../../../../components/Title/Title";

import { Fragment, memo, useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import useRegisterExtraBed from "../../../../hooks/JoinStaying/FacilitiesHost/useRegisterExtraBed";
import { useTranslation } from "react-i18next";

// {t("HostStaying.CreateRoom.items.amenities.subTitle")}
const ComponentExtraBed = () => {
  const { t } = useTranslation();

  const FacilitiesHostData = [
    {
      id: 1,
      title: t("HostStaying.CreateRoom.items.amenities.information.optionalExtraBed"),
      subTitle: t("HostStaying.CreateRoom.items.amenities.information.provideExtraBed"),
      type: "radio",
      data: [
        {
          name: "extrabed",
          value: "yes",
          title: t("HostStaying.CreateRoom.items.amenities.information.extraBeds.yes"),
        },
        {
          name: "extrabed",
          value: "no",
          title: t("HostStaying.CreateRoom.items.amenities.information.extraBeds.no"),
        },
      ],
    },
  ];

  const ExtraBed = [
    {
      title: t("HostStaying.CreateRoom.items.amenities.information.numberOfExtraBed"),
      type: "select",
      data: [
        {
          id: 1,
          value: 1,
        },
        {
          id: 2,
          value: 2,
        },
        {
          id: 3,
          value: 3,
        },
        {
          id: 4,
          value: 4,
        },
        {
          id: 5,
          value: 5,
        },
        {
          id: 6,
          value: 6,
        },
        {
          id: 7,
          value: 7,
        },
        {
          id: 8,
          value: 8,
        },
        {
          id: 9,
          value: 9,
        },
        {
          id: 10,
          value: 10,
        },
      ],
    },
    {
      title: t("HostStaying.CreateRoom.items.amenities.information.check"),
      type: "checkbox",
      data: [
        {
          title: t("HostStaying.CreateRoom.items.amenities.information.childrenOfCrib"),
          name: "childrenUpToTwoYearOld",
          value: "childrenSleepInCribs",
          data: [],
        },
        {
          title: t("HostStaying.CreateRoom.items.amenities.information.children"),
          name: "childrenOlderThanTwoYearOld",
          value: "typeOfGuestChildren",
          data: [
            {
              title: "",
              type: "select",
              data: [
                {
                  value: 3,
                  name: t("HostStaying.CreateRoom.items.amenities.information.upTo") + " " + 3 + " " + t("HostStaying.CreateRoom.items.amenities.information.yearOld"),
                },
                {
                  value: 4,
                  name: t("HostStaying.CreateRoom.items.amenities.information.upTo") + " " + 4 + " " + t("HostStaying.CreateRoom.items.amenities.information.yearOld"),
                },
                {
                  value: 5,
                  name: t("HostStaying.CreateRoom.items.amenities.information.upTo") + " " + 5 + " " + t("HostStaying.CreateRoom.items.amenities.information.yearOld"),
                },
                {
                  value: 6,
                  name: t("HostStaying.CreateRoom.items.amenities.information.upTo") + " " + 6 + " " + t("HostStaying.CreateRoom.items.amenities.information.yearOld"),
                },
                {
                  value: 7,
                  name: t("HostStaying.CreateRoom.items.amenities.information.upTo") + " " + 7 + " " + t("HostStaying.CreateRoom.items.amenities.information.yearOld"),
                },
                {
                  value: 8,
                  name: t("HostStaying.CreateRoom.items.amenities.information.upTo") + " " + 8 + " " + t("HostStaying.CreateRoom.items.amenities.information.yearOld"),
                },
                {
                  value: 9,
                  name: t("HostStaying.CreateRoom.items.amenities.information.upTo") + " " + 9 + " " + t("HostStaying.CreateRoom.items.amenities.information.yearOld"),
                },
                {
                  value: 10,
                  name: t("HostStaying.CreateRoom.items.amenities.information.upTo") + " " + 10 + " " + t("HostStaying.CreateRoom.items.amenities.information.yearOld"),
                },
                {
                  value: 11,
                  name: t("HostStaying.CreateRoom.items.amenities.information.upTo") + " " + 11 + " " + t("HostStaying.CreateRoom.items.amenities.information.yearOld"),
                },
                {
                  value: 12,
                  name: t("HostStaying.CreateRoom.items.amenities.information.upTo") + " " + 12 + " " + t("HostStaying.CreateRoom.items.amenities.information.yearOld"),
                },
                {
                  value: 13,
                  name: t("HostStaying.CreateRoom.items.amenities.information.upTo") + " " + 13 + " " + t("HostStaying.CreateRoom.items.amenities.information.yearOld"),
                },
                {
                  value: 14,
                  name: t("HostStaying.CreateRoom.items.amenities.information.upTo") + " " + 14 + " " + t("HostStaying.CreateRoom.items.amenities.information.yearOld"),
                },
                {
                  value: 15,
                  name: t("HostStaying.CreateRoom.items.amenities.information.upTo") + " " + 15 + " " + t("HostStaying.CreateRoom.items.amenities.information.yearOld"),
                },
                {
                  value: 16,
                  name: t("HostStaying.CreateRoom.items.amenities.information.upTo") + " " + 16 + " " + t("HostStaying.CreateRoom.items.amenities.information.yearOld"),
                },
                {
                  value: 17,
                  name: t("HostStaying.CreateRoom.items.amenities.information.upTo") + " " + 17 + " " + t("HostStaying.CreateRoom.items.amenities.information.yearOld"),
                },
              ],
            },
            {
              title: t("HostStaying.CreateRoom.items.amenities.information.priceChildren"),
              type: "number",
              value: "priceGuestChildren",
            },
          ],
        },
        {
          title: t("HostStaying.CreateRoom.items.amenities.information.adult"),
          name: "adults",
          value: "typeOfGuestAdults",
          data: [
            {
              title: "",
              type: "select",
              data: [],
            },
            {
              title: t("HostStaying.CreateRoom.items.amenities.information.priceAdult"),
              type: "number",
              value: "priceGuestAdults",
            },
          ],
        },
      ],
    },
  ];

  const { checkedType, setCheckedType, extraBed, setExtraBed } = useRegisterExtraBed();

  useEffect(() => {
    resetChecked();
  }, [extraBed]);

  const resetChecked = () => {
    ExtraBed.map((extra) => {
      if (extra.type === "checkbox" || extra.type === "select") {
        let init = [];
        if (extraBed === 0) {
          init = extra.data.map((x) => {
            return { type: x.value, checked: false, price: 0.0, old: "0" };
          });
        } else {
          init = extra.data.map((x) => {
            return { type: x.value, checked: false, price: 0.0, old: "3" };
          });
        }

        setCheckedType(init);
      }
    });
  };

  const [chooseOption, setChooseOption] = useState("no");
  const handleChooseOption = (value) => {
    if (value === "no") {
      setExtraBed(0);
      resetChecked();
    } else {
      setExtraBed(1);
    }
    setChooseOption(value);
  };
  const [valueActive, setActiveValue] = useState("");

  const handleFocus = (v) => {
    setActiveValue(v);
  };

  const handleBlur = () => {
    setActiveValue("");
  };

  const handleKeyDown = (e, value) => {
    if (e.key === "-") {
      e.preventDefault();
    }

    if (e.key === "0" && value === "") {
      e.preventDefault();
    }
  };

  const handleChooseExtraBed = (e) => {
    const numberExtraBed = e.target.value;

    setExtraBed(numberExtraBed);
  };

  const handleChooseChildrenOld = (type, e) => {
    const value = e.target.value;
    const exitsType = checkedType.some((item) => item.type === type);
    if (exitsType) {
      const updatePrice = checkedType.map((item) => {
        if (item?.type === type) {
          return { ...item, old: value };
        }
        return item;
      });
      setCheckedType(updatePrice);
    }
  };

  const handleChange = (type, v) => {
    const exitsType = checkedType.some((item) => item.type === type);

    if (exitsType) {
      const updatePrice = checkedType.map((item) => {
        if (item?.type === type) {
          return { ...item, price: parseInt(v, 10) };
        }
        return item;
      });
      setCheckedType(updatePrice);
    }
  };

  const handleCheckCellItem = (e) => {
    const checkedItemValue = e.target.value;
    const isCheckType = checkedType.some((item) => item.type === checkedItemValue);

    if (isCheckType) {
      const updatedCheckedType = checkedType.map((item) => {
        if (item.type === checkedItemValue) {
          return { ...item, checked: !item.checked, price: 0.0, old: "0" };
        }
        return item;
      });

      setCheckedType(updatedCheckedType);
    } else {
      setCheckedType([...checkedType, { type: checkedItemValue, checked: true }]);
    }
  };

  return (
    <div className="flex flex-col">
      {FacilitiesHostData.map((itemOne, index) => (
        <div key={index} className="flex flex-col gap-1">
          <Title title={itemOne.title} fontBold xxl nowrap={false} />
          <Title title={itemOne.subTitle} xl nowrap={false} />
          {itemOne?.type === "radio" && (
            <div className="flex flex-row gap-2">
              {itemOne?.data.map((itemTwo, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <RadioInput name={itemTwo.name} id={itemTwo.value} value={itemTwo.value} title={itemTwo.title} isChecked={chooseOption === itemTwo.value} onChange={() => handleChooseOption(itemTwo.value)} />
                </div>
              ))}
            </div>
          )}

          {chooseOption === "yes" && (
            <div className="flex flex-col">
              {ExtraBed.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <Title title={item?.title} xl nowrap={false} />
                  {item?.type === "select" && (
                    <SelectInput onChange={handleChooseExtraBed} value={extraBed}>
                      {item?.data.map((bed, index) => (
                        <option key={index} value={bed?.value}>
                          {bed?.value}
                        </option>
                      ))}
                    </SelectInput>
                  )}

                  {item?.type === "checkbox" &&
                    item.data.map((subItemOne, index) => (
                      <Fragment key={index}>
                        <Checkbox title={subItemOne?.title} name={subItemOne?.name} value={subItemOne?.value} checked={checkedType.some((item) => item.type === subItemOne?.value)?.checked} onChange={handleCheckCellItem} />
                        {checkedType.length > 0 &&
                          checkedType.map((check, index) => {
                            const value = checkedType.find((item) => {
                              if (subItemOne?.value === item?.type) {
                                return true;
                              }
                            });

                            const price = value?.price || 0;

                            return (
                              <>
                                {check.type === subItemOne?.value && check.checked && subItemOne?.data.length > 0 && (
                                  <div className="flex flex-col w-full" key={index}>
                                    {subItemOne?.data.map((subItemTwo, index) => (
                                      <div key={index} className="flex flex-col gap-2">
                                        <Title title={subItemTwo?.title} xl nowrap={false} />
                                        {subItemTwo?.type === "select" && subItemTwo?.data.length !== 0 && (
                                          <SelectInput value={checkedType.some((item) => item.type === subItemOne?.value)?.old} onChange={(e) => handleChooseChildrenOld(subItemOne?.value, e)}>
                                            {subItemTwo?.data.map((child, index) => (
                                              <option key={index} value={child?.value}>
                                                {child?.name}
                                              </option>
                                            ))}
                                          </SelectInput>
                                        )}
                                        {subItemTwo?.type === "number" && (
                                          <div className={`flex relative border-[2px] w-full rounded-sm duration-300 dark:text-white ${subItemTwo?.value === valueActive ? "border-hotel-75" : "border-primary-700 dark:border-primary-500"}`}>
                                            <div className="pt-1 pb-1 pr-2 pl-2 after:absolute after:contents-[''] after:w-[1px] after:h-[60%] after:top-[20%] after:ml-2 after:bg-[#e7e7e7] dark:after:bg-primary-400">VND</div>
                                            <div className="flex flex-1 w-full ml-2">
                                              <CurrencyFormat
                                                displayType="input"
                                                thousandSeparator={subItemTwo?.value !== valueActive}
                                                className="w-full focus:outline-none bg-transparent pt-1 pb-1 pr-2 pl-2"
                                                value={price}
                                                decimalScale={2}
                                                fixedDecimalScale={subItemTwo?.value !== valueActive}
                                                onValueChange={(e) => handleChange(subItemOne?.value, e.value)}
                                                onFocus={() => handleFocus(subItemTwo?.value)}
                                                onBlur={handleBlur}
                                                onKeyDown={(e) => handleKeyDown(e, price)}
                                              />
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </>
                            );
                          })}
                      </Fragment>
                    ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default memo(ComponentExtraBed);
