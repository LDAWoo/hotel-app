import { ExtraBed, FacilitiesHostData } from "../../../components/Constants/FacilitiesHostData";
import RadioInput from "../../../components/RadioInput/RadioInput";
import SelectInput from "../../../components/SelectInput/SelectInput";
import Title from "../../../components/Title/Title";

import { Fragment, memo, useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import Checkbox from "../../../components/Checkbox/Checkbox";
import useRegisterExtraBed from "../../../hooks/JoinStaying/FacilitiesHost/useRegisterExtraBed";

const ComponentExtraBed = () => {
  const { checkedType, setCheckedType, extraBed, setExtraBed } = useRegisterExtraBed();

  useEffect(() => {
    resetChecked();
  }, []);

  const resetChecked = () => {
    ExtraBed.map((extra) => {
      if (extra.type === "checkbox" || extra.type === "select") {
        const init = extra.data.map((x) => {
          return { type: x.value, checked: false, price: 0.0, old: "0" };
        });

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

  const handleKeyDown = (e) => {
    if (e.key === "-") {
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
                          checkedType.map((check, index) => (
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
                                              value={checkedType.some((item) => item.type === subItemOne?.value)?.value}
                                              decimalScale={2}
                                              fixedDecimalScale={subItemTwo?.value !== valueActive}
                                              onValueChange={(e) => handleChange(subItemOne?.value, e.value)}
                                              onFocus={() => handleFocus(subItemTwo?.value)}
                                              onBlur={handleBlur}
                                              onKeyDown={handleKeyDown}
                                            />
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </>
                          ))}
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
